import type { PoolClient } from 'pg';

import { Pool } from 'pg';

import { env } from '../env';

/**
 * DatabaseService class for handling database operations using raw SQL
 * @class DatabaseService
 */
export class DatabaseService {
  private static instance: DatabaseService;
  private pool: Pool;

  private constructor() {
    this.pool = new Pool({
      connectionString: env.DATABASE_URL,
      ssl:
        env.NODE_ENV === 'production'
          ? {
              rejectUnauthorized: false,
            }
          : undefined,
    });
  }

  /**
   * Gets the singleton instance of DatabaseService
   * @returns {DatabaseService} The database service instance
   */
  public static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  /**
   * Executes a query using a client from the pool
   * @param {string} query - The SQL query to execute
   * @param {any[]} params - The query parameters
   * @returns {Promise<any>} The query results
   */
  public async query<T>(query: string, params?: any[]): Promise<T> {
    const client = await this.pool.connect();
    try {
      const result = await client.query(query, params);
      return result.rows as T;
    }
    catch (error) {
      console.error('Database query error:', error);
      throw error;
    }
    finally {
      client.release();
    }
  }

  /**
   * Executes a stored procedure
   * @param {string} procedureName - The name of the stored procedure
   * @param {any[]} params - The procedure parameters
   * @returns {Promise<void>}
   */
  public async executeStoredProcedure(
    procedureName: string,
    params?: any[],
  ): Promise<void> {
    const client = await this.pool.connect();
    try {
      await client.query('BEGIN');
      await client.query(`CALL ${procedureName}($1)`, params);
      await client.query('COMMIT');
    }
    catch (error) {
      await client.query('ROLLBACK');
      console.error('Stored procedure execution error:', error);
      throw error;
    }
    finally {
      client.release();
    }
  }

  /**
   * Gets a client for transaction operations
   * @returns {Promise<PoolClient>} A database client
   */
  public async getClient(): Promise<PoolClient> {
    return await this.pool.connect();
  }

  /**
   * Closes the database connection pool
   * @returns {Promise<void>}
   */
  public async close(): Promise<void> {
    await this.pool.end();
  }
}
