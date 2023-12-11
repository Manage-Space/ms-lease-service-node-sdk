import localVarRequest from 'request';

export * from './accountStatsSpaceReservation';
export * from './badRequestError400Response';
export * from './badRequestError400ResponseError';
export * from './baseError';
export * from './calculateProratedAmountForFutureDate200Response';
export * from './calculateProratedAmountRequest';
export * from './calculateProratedAmountResponse';
export * from './createMoveOut200Response';
export * from './createMoveOutRequest';
export * from './createMoveOutV2200Response';
export * from './createMoveOutV2Request';
export * from './createReservation200Response';
export * from './createReservationBatchRequest';
export * from './createReservationRequest';
export * from './createReservationsRequest';
export * from './createSpaceReservationRequest';
export * from './forbiddenError403Response';
export * from './forbiddenError403ResponseError';
export * from './getGroupedSpaceReservationBySiteId200Response';
export * from './getLease200Response';
export * from './getRental200Response';
export * from './getRentalAgreements200Response';
export * from './getSpaceReservationsByAccount200Response';
export * from './getSubscriptions200Response';
export * from './internalServerError500Response';
export * from './internalServerError500ResponseError';
export * from './lease';
export * from './leaseResponse';
export * from './leaseResponseSubscription';
export * from './moveOutResponse';
export * from './moveOutV2Response';
export * from './rentalAgreementResponse';
export * from './rentalResponse';
export * from './rentalStatus';
export * from './rentalType';
export * from './reservationResponse';
export * from './reservationStatus';
export * from './spaceReservationFeature';
export * from './spaceReservationFeatureRequest';
export * from './spaceReservationGroupedResponse';
export * from './spaceReservationResponse';
export * from './subscriptionProductResponse';
export * from './subscriptionResponse';
export * from './subscriptionStatusResponse';
export * from './unauthorizedError401Response';
export * from './unauthorizedError401ResponseError';
export * from './updateIntendedMoveOutDateRequest';
export * from './updateRentalIntendedMoveOutDateRequest';
export * from './updateReservationRequest';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccountStatsSpaceReservation } from './accountStatsSpaceReservation';
import { BadRequestError400Response } from './badRequestError400Response';
import { BadRequestError400ResponseError } from './badRequestError400ResponseError';
import { BaseError } from './baseError';
import { CalculateProratedAmountForFutureDate200Response } from './calculateProratedAmountForFutureDate200Response';
import { CalculateProratedAmountRequest } from './calculateProratedAmountRequest';
import { CalculateProratedAmountResponse } from './calculateProratedAmountResponse';
import { CreateMoveOut200Response } from './createMoveOut200Response';
import { CreateMoveOutRequest } from './createMoveOutRequest';
import { CreateMoveOutV2200Response } from './createMoveOutV2200Response';
import { CreateMoveOutV2Request } from './createMoveOutV2Request';
import { CreateReservation200Response } from './createReservation200Response';
import { CreateReservationBatchRequest } from './createReservationBatchRequest';
import { CreateReservationRequest } from './createReservationRequest';
import { CreateReservationsRequest } from './createReservationsRequest';
import { CreateSpaceReservationRequest } from './createSpaceReservationRequest';
import { ForbiddenError403Response } from './forbiddenError403Response';
import { ForbiddenError403ResponseError } from './forbiddenError403ResponseError';
import { GetGroupedSpaceReservationBySiteId200Response } from './getGroupedSpaceReservationBySiteId200Response';
import { GetLease200Response } from './getLease200Response';
import { GetRental200Response } from './getRental200Response';
import { GetRentalAgreements200Response } from './getRentalAgreements200Response';
import { GetSpaceReservationsByAccount200Response } from './getSpaceReservationsByAccount200Response';
import { GetSubscriptions200Response } from './getSubscriptions200Response';
import { InternalServerError500Response } from './internalServerError500Response';
import { InternalServerError500ResponseError } from './internalServerError500ResponseError';
import { Lease } from './lease';
import { LeaseResponse } from './leaseResponse';
import { LeaseResponseSubscription } from './leaseResponseSubscription';
import { MoveOutResponse } from './moveOutResponse';
import { MoveOutV2Response } from './moveOutV2Response';
import { RentalAgreementResponse } from './rentalAgreementResponse';
import { RentalResponse } from './rentalResponse';
import { RentalStatus } from './rentalStatus';
import { RentalType } from './rentalType';
import { ReservationResponse } from './reservationResponse';
import { ReservationStatus } from './reservationStatus';
import { SpaceReservationFeature } from './spaceReservationFeature';
import { SpaceReservationFeatureRequest } from './spaceReservationFeatureRequest';
import { SpaceReservationGroupedResponse } from './spaceReservationGroupedResponse';
import { SpaceReservationResponse } from './spaceReservationResponse';
import { SubscriptionProductResponse } from './subscriptionProductResponse';
import { SubscriptionResponse } from './subscriptionResponse';
import { SubscriptionStatusResponse } from './subscriptionStatusResponse';
import { UnauthorizedError401Response } from './unauthorizedError401Response';
import { UnauthorizedError401ResponseError } from './unauthorizedError401ResponseError';
import { UpdateIntendedMoveOutDateRequest } from './updateIntendedMoveOutDateRequest';
import { UpdateRentalIntendedMoveOutDateRequest } from './updateRentalIntendedMoveOutDateRequest';
import { UpdateReservationRequest } from './updateReservationRequest';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "RentalStatus": RentalStatus,
        "RentalType": RentalType,
}

let typeMap: {[index: string]: any} = {
    "AccountStatsSpaceReservation": AccountStatsSpaceReservation,
    "BadRequestError400Response": BadRequestError400Response,
    "BadRequestError400ResponseError": BadRequestError400ResponseError,
    "BaseError": BaseError,
    "CalculateProratedAmountForFutureDate200Response": CalculateProratedAmountForFutureDate200Response,
    "CalculateProratedAmountRequest": CalculateProratedAmountRequest,
    "CalculateProratedAmountResponse": CalculateProratedAmountResponse,
    "CreateMoveOut200Response": CreateMoveOut200Response,
    "CreateMoveOutRequest": CreateMoveOutRequest,
    "CreateMoveOutV2200Response": CreateMoveOutV2200Response,
    "CreateMoveOutV2Request": CreateMoveOutV2Request,
    "CreateReservation200Response": CreateReservation200Response,
    "CreateReservationBatchRequest": CreateReservationBatchRequest,
    "CreateReservationRequest": CreateReservationRequest,
    "CreateReservationsRequest": CreateReservationsRequest,
    "CreateSpaceReservationRequest": CreateSpaceReservationRequest,
    "ForbiddenError403Response": ForbiddenError403Response,
    "ForbiddenError403ResponseError": ForbiddenError403ResponseError,
    "GetGroupedSpaceReservationBySiteId200Response": GetGroupedSpaceReservationBySiteId200Response,
    "GetLease200Response": GetLease200Response,
    "GetRental200Response": GetRental200Response,
    "GetRentalAgreements200Response": GetRentalAgreements200Response,
    "GetSpaceReservationsByAccount200Response": GetSpaceReservationsByAccount200Response,
    "GetSubscriptions200Response": GetSubscriptions200Response,
    "InternalServerError500Response": InternalServerError500Response,
    "InternalServerError500ResponseError": InternalServerError500ResponseError,
    "Lease": Lease,
    "LeaseResponse": LeaseResponse,
    "LeaseResponseSubscription": LeaseResponseSubscription,
    "MoveOutResponse": MoveOutResponse,
    "MoveOutV2Response": MoveOutV2Response,
    "RentalAgreementResponse": RentalAgreementResponse,
    "RentalResponse": RentalResponse,
    "ReservationResponse": ReservationResponse,
    "ReservationStatus": ReservationStatus,
    "SpaceReservationFeature": SpaceReservationFeature,
    "SpaceReservationFeatureRequest": SpaceReservationFeatureRequest,
    "SpaceReservationGroupedResponse": SpaceReservationGroupedResponse,
    "SpaceReservationResponse": SpaceReservationResponse,
    "SubscriptionProductResponse": SubscriptionProductResponse,
    "SubscriptionResponse": SubscriptionResponse,
    "SubscriptionStatusResponse": SubscriptionStatusResponse,
    "UnauthorizedError401Response": UnauthorizedError401Response,
    "UnauthorizedError401ResponseError": UnauthorizedError401ResponseError,
    "UpdateIntendedMoveOutDateRequest": UpdateIntendedMoveOutDateRequest,
    "UpdateRentalIntendedMoveOutDateRequest": UpdateRentalIntendedMoveOutDateRequest,
    "UpdateReservationRequest": UpdateReservationRequest,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
public accessToken: string | (() => string) = process.env.MS_TOKEN || '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
