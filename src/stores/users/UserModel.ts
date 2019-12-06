import { GenericError } from '@/api/Http';

export interface User {
    id?: number;
    username?: string;
    email?: string;
    isSchool?: boolean;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: User;
}

export interface RegisterRequest {
    username: string;
    password: string;
    email: string;
    isSchool: boolean;
}

export interface UserState {
    user: User | null;
    error: GenericError | null;
}
