/**
 * ManageSpace Lease API
 * ManageSpace Lease API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { RentalStatus } from './rentalStatus';
import { RentalType } from './rentalType';
import { SubscriptionProductResponse } from './subscriptionProductResponse';

export class RentalResponse {
    /**
    * Rental ID
    */
    'rentalId': string;
    /**
    * Unit ID
    */
    'unitId': string;
    /**
    * Unit Name
    */
    'unitName': string;
    /**
    * Site ID
    */
    'siteId': string;
    /**
    * Org ID
    */
    'orgId': string;
    /**
    * Account ID of the lessee
    */
    'accountId': string;
    /**
    * Account Name
    */
    'accountName': string;
    /**
    * Account Email Address
    */
    'email': string | null;
    /**
    * Account Mobile Number
    */
    'mobileNumber': string;
    'rentalType': RentalType;
    /**
    * Reservation ID
    */
    'reservationId': string | null;
    /**
    * Notes.
    */
    'notes': string | null;
    /**
    * Access code.
    */
    'accessCode': string;
    /**
    * Intended move out date.
    */
    'intendedMoveOutDate': Date | null;
    /**
    * MoveIn date.
    */
    'moveInDate': Date | null;
    /**
    * Move out date.
    */
    'moveOutDate': Date | null;
    /**
    * Expiration date.
    */
    'expiresAt': Date | null;
    /**
    * Effective date.
    */
    'effectiveDate': Date;
    /**
    * Amount of the subscription
    */
    'amount': number;
    /**
    * Rental start date
    */
    'startDate': Date;
    /**
    * Rental fee percent
    */
    'feePercent': number;
    'rentalStatus': RentalStatus;
    /**
    * Created at.
    */
    'createdAt': Date;
    /**
    * Sub products on the rental
    */
    'subscriptionProducts': Array<SubscriptionProductResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rentalId",
            "baseName": "rentalId",
            "type": "string"
        },
        {
            "name": "unitId",
            "baseName": "unitId",
            "type": "string"
        },
        {
            "name": "unitName",
            "baseName": "unitName",
            "type": "string"
        },
        {
            "name": "siteId",
            "baseName": "siteId",
            "type": "string"
        },
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string"
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string"
        },
        {
            "name": "accountName",
            "baseName": "accountName",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "mobileNumber",
            "baseName": "mobileNumber",
            "type": "string"
        },
        {
            "name": "rentalType",
            "baseName": "rentalType",
            "type": "RentalType"
        },
        {
            "name": "reservationId",
            "baseName": "reservationId",
            "type": "string"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string"
        },
        {
            "name": "accessCode",
            "baseName": "accessCode",
            "type": "string"
        },
        {
            "name": "intendedMoveOutDate",
            "baseName": "intendedMoveOutDate",
            "type": "Date"
        },
        {
            "name": "moveInDate",
            "baseName": "moveInDate",
            "type": "Date"
        },
        {
            "name": "moveOutDate",
            "baseName": "moveOutDate",
            "type": "Date"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "Date"
        },
        {
            "name": "effectiveDate",
            "baseName": "effectiveDate",
            "type": "Date"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "Date"
        },
        {
            "name": "feePercent",
            "baseName": "feePercent",
            "type": "number"
        },
        {
            "name": "rentalStatus",
            "baseName": "rentalStatus",
            "type": "RentalStatus"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "subscriptionProducts",
            "baseName": "subscriptionProducts",
            "type": "Array<SubscriptionProductResponse>"
        }    ];

    static getAttributeTypeMap() {
        return RentalResponse.attributeTypeMap;
    }
}

export namespace RentalResponse {
}
