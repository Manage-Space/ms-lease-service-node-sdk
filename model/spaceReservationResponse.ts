/**
 * ManageSpace Lease API
 * ManageSpace Lease API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ReservationStatus } from './reservationStatus';
import { SpaceReservationFeature } from './spaceReservationFeature';

export class SpaceReservationResponse {
    /**
    * Space reservation ID
    */
    'spaceReservationId': string;
    /**
    * Site ID
    */
    'siteId': string;
    /**
    * Organization ID
    */
    'orgId': string;
    /**
    * Account ID
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
    /**
    * Reservation notes
    */
    'notes': string | null;
    /**
    * Expires at
    */
    'expiresAt': Date;
    /**
    * List of reservation features
    */
    'features': Array<SpaceReservationFeature>;
    /**
    * Minimum price
    */
    'minPrice': number;
    /**
    * Maximum price
    */
    'maxPrice': number;
    /**
    * Length
    */
    'length': number;
    /**
    * Width
    */
    'width': number;
    /**
    * Height
    */
    'height': number | null;
    /**
    * Created date
    */
    'createdAt': Date;
    /**
    * Created By
    */
    'createdBy': string;
    /**
    * Updated date
    */
    'updatedAt': Date | null;
    /**
    * Updated by
    */
    'updatedBy': string | null;
    'status': ReservationStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "spaceReservationId",
            "baseName": "spaceReservationId",
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
            "name": "notes",
            "baseName": "notes",
            "type": "string"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "Date"
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "Array<SpaceReservationFeature>"
        },
        {
            "name": "minPrice",
            "baseName": "minPrice",
            "type": "number"
        },
        {
            "name": "maxPrice",
            "baseName": "maxPrice",
            "type": "number"
        },
        {
            "name": "length",
            "baseName": "length",
            "type": "number"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "updatedBy",
            "baseName": "updatedBy",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ReservationStatus"
        }    ];

    static getAttributeTypeMap() {
        return SpaceReservationResponse.attributeTypeMap;
    }
}
