import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import jstoxml from 'jstoxml';

const config = {
  header: true,
};

export abstract class ResponseFormatter {
  /**
   * Format the response based on the Accept header.
   * @param data The data to return in the response.
   * @param acceptHeader The value of the Accept header.
   * @param status The HTTP status code to use for the response.
   * @returns A Response object with JSON or XML content.
   */
  static formatResponse(
    data: any,
    acceptHeader: string = 'application/json',
    status: number = StatusCodes.OK,
  ) {
    if (acceptHeader.includes('application/xml')) {
      const xmlResponse = jstoxml.toXML({ data }, config);
      return new Response(xmlResponse, {
        headers: { 'Content-Type': 'application/xml' },
        status,
      });
    }

    return new Response(JSON.stringify({ data }), {
      headers: { 'Content-Type': 'application/json' },
      status,
    });
  }

  /**
   * Handle errors and format the response.
   * @param error The error to handle.
   * @param acceptHeader The value of the Accept header.
   * @param status The HTTP status code to use for the error response (defaults to 500).
   * @returns A Response object with error details in JSON or XML format.
   */
  static formatError(
    error: any,
    acceptHeader: string = 'application/json',
    status: number = StatusCodes.INTERNAL_SERVER_ERROR,
  ) {
    const errorData = {
      error: error.message || getReasonPhrase(status),
      ...(error.details ? { details: error.details } : {}),
    };

    if (acceptHeader.includes('application/xml')) {
      const xmlError = jstoxml.toXML({ error: errorData }, config);
      return new Response(xmlError, {
        headers: { 'Content-Type': 'application/xml' },
        status,
      });
    }

    return new Response(JSON.stringify(errorData), {
      headers: { 'Content-Type': 'application/json' },
      status,
    });
  }
}
