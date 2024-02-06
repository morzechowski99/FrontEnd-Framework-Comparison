/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginDto } from '../models/LoginDto';
import type { RegisterUserDto } from '../models/RegisterUserDto';
import type { RegisterUserDtoResponseDto } from '../models/RegisterUserDtoResponseDto';
import type { TokenResponseDto } from '../models/TokenResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IdentityService {
    /**
     * Register new user
     * @returns RegisterUserDtoResponseDto User created
     * @throws ApiError
     */
    public static postApiIdentityRegister({
        requestBody,
    }: {
        /**
         * user data
         */
        requestBody?: RegisterUserDto,
    }): CancelablePromise<RegisterUserDtoResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Identity/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid request`,
            },
        });
    }
    /**
     * Login user
     * @returns TokenResponseDto User logged in
     * @throws ApiError
     */
    public static postApiIdentityLogin({
        requestBody,
    }: {
        /**
         * user login data
         */
        requestBody?: LoginDto,
    }): CancelablePromise<TokenResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Identity/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid request`,
            },
        });
    }
}
