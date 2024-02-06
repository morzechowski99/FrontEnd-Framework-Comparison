/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CarItemDto } from '../models/CarItemDto';
import type { CreateUpdateCarDto } from '../models/CreateUpdateCarDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CarsService {
    /**
     * Get cars
     * @returns CarItemDto List of cars
     * @throws ApiError
     */
    public static getApiCars(): CancelablePromise<Array<CarItemDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Cars',
            errors: {
                400: `Invalid request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Create a car
     * @returns any Car created
     * @throws ApiError
     */
    public static postApiCars({
        requestBody,
    }: {
        /**
         * new car data
         */
        requestBody?: CreateUpdateCarDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Cars',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get car by id
     * @returns CarItemDto Car with given id
     * @throws ApiError
     */
    public static getApiCars1({
        id,
    }: {
        /**
         * car id
         */
        id: string,
    }): CancelablePromise<CarItemDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Cars/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid request`,
                401: `Unauthorized`,
                404: `Car with given id does not exist`,
            },
        });
    }
    /**
     * Update a car
     * @returns CarItemDto Car updated
     * @throws ApiError
     */
    public static putApiCars({
        id,
        requestBody,
    }: {
        /**
         * car id
         */
        id: string,
        /**
         * car data
         */
        requestBody?: CreateUpdateCarDto,
    }): CancelablePromise<CarItemDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Cars/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid request`,
                401: `Unauthorized`,
                404: `Car with given id does not exist`,
            },
        });
    }
    /**
     * Delete a car
     * @returns any Car deleted
     * @throws ApiError
     */
    public static deleteApiCars({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Cars/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid request`,
                401: `Unauthorized`,
                404: `Car with given id does not exists`,
            },
        });
    }
}
