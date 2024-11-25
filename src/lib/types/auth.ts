import type { SafeUser } from './user';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: SafeUser;
  token: string;
}

export interface JWTPayload {
  id: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

export interface AuthError {
  message: string;
  status: number;
}
