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
import { SpaceReservationFeatureRequest } from './spaceReservationFeatureRequest';

export class CreateSpaceReservationRequest {
    /**
    * Space Reservation Notes
    */
    'notes': string | null;
    /**
    * Expires At
    */
    'expiresAt'?: Date | null;
    /**
    * Minimum Price
    */
    'minPrice': number;
    /**
    * Maximum Price
    */
    'maxPrice': number;
    /**
    * Length of Unit
    */
    'length': number;
    /**
    * Width of Unit
    */
    'width': number;
    /**
    * Height of Unit
    */
    'height'?: number | null;
    /**
    * Features for the Unit
    */
    'features': Array<SpaceReservationFeatureRequest>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "features",
            "baseName": "features",
            "type": "Array<SpaceReservationFeatureRequest>"
        }    ];

    static getAttributeTypeMap() {
        return CreateSpaceReservationRequest.attributeTypeMap;
    }
}
