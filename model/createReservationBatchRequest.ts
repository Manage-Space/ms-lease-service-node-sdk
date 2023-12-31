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

export class CreateReservationBatchRequest {
    /**
    * Account ID
    */
    'accountId': string;
    /**
    * Reservation Notes
    */
    'notes': string | null;
    /**
    * Expires At
    */
    'expiresAt'?: Date | null;
    /**
    * Unit ID
    */
    'unitId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountId",
            "baseName": "accountId",
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
            "name": "unitId",
            "baseName": "unitId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateReservationBatchRequest.attributeTypeMap;
    }
}

