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

export class MoveOutResponse {
    /**
    * Lease ID
    */
    'leaseId': string;
    /**
    * Notes about the move out.
    */
    'notes': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "leaseId",
            "baseName": "leaseId",
            "type": "string"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MoveOutResponse.attributeTypeMap;
    }
}
