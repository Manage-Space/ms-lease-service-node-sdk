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

export class SubscriptionProductResponse {
    /**
    * Subscription productId ID
    */
    'subscriptionProductId': string;
    /**
    * Product ID
    */
    'productId': string;
    /**
    * Account ID
    */
    'accountId': string;
    /**
    * Site ID
    */
    'siteId': string;
    /**
    * Org ID
    */
    'orgId': string;
    /**
    * Amount of the subscription product
    */
    'amount': number;
    /**
    * Start date.
    */
    'startDate': Date | null;
    /**
    * end date.
    */
    'endDate': Date | null;
    /**
    * Rental ID
    */
    'rentalId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subscriptionProductId",
            "baseName": "subscriptionProductId",
            "type": "string"
        },
        {
            "name": "productId",
            "baseName": "productId",
            "type": "string"
        },
        {
            "name": "accountId",
            "baseName": "accountId",
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
            "name": "endDate",
            "baseName": "endDate",
            "type": "Date"
        },
        {
            "name": "rentalId",
            "baseName": "rentalId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionProductResponse.attributeTypeMap;
    }
}

