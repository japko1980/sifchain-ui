/* tslint:disable */
/* eslint-disable */
/**
 * Sifchain - gRPC Gateway docs
 * A REST interface for state queries, legacy transactions
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
import {
  OsmosisIncentivesActiveGaugesResponseData,
  OsmosisIncentivesActiveGaugesResponseDataFromJSON,
  OsmosisIncentivesActiveGaugesResponseDataFromJSONTyped,
  OsmosisIncentivesActiveGaugesResponseDataToJSON,
  OsmosisIncentivesActiveGaugesResponsePagination,
  OsmosisIncentivesActiveGaugesResponsePaginationFromJSON,
  OsmosisIncentivesActiveGaugesResponsePaginationFromJSONTyped,
  OsmosisIncentivesActiveGaugesResponsePaginationToJSON,
} from "./";

/**
 *
 * @export
 * @interface OsmosisIncentivesUpcomingGaugesResponse
 */
export interface OsmosisIncentivesUpcomingGaugesResponse {
  /**
   *
   * @type {Array<OsmosisIncentivesActiveGaugesResponseData>}
   * @memberof OsmosisIncentivesUpcomingGaugesResponse
   */
  data?: Array<OsmosisIncentivesActiveGaugesResponseData>;
  /**
   *
   * @type {OsmosisIncentivesActiveGaugesResponsePagination}
   * @memberof OsmosisIncentivesUpcomingGaugesResponse
   */
  pagination?: OsmosisIncentivesActiveGaugesResponsePagination;
}

export function OsmosisIncentivesUpcomingGaugesResponseFromJSON(
  json: any,
): OsmosisIncentivesUpcomingGaugesResponse {
  return OsmosisIncentivesUpcomingGaugesResponseFromJSONTyped(json, false);
}

export function OsmosisIncentivesUpcomingGaugesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): OsmosisIncentivesUpcomingGaugesResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, "data")
      ? undefined
      : (json["data"] as Array<any>).map(
          OsmosisIncentivesActiveGaugesResponseDataFromJSON,
        ),
    pagination: !exists(json, "pagination")
      ? undefined
      : OsmosisIncentivesActiveGaugesResponsePaginationFromJSON(
          json["pagination"],
        ),
  };
}

export function OsmosisIncentivesUpcomingGaugesResponseToJSON(
  value?: OsmosisIncentivesUpcomingGaugesResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data:
      value.data === undefined
        ? undefined
        : (value.data as Array<any>).map(
            OsmosisIncentivesActiveGaugesResponseDataToJSON,
          ),
    pagination: OsmosisIncentivesActiveGaugesResponsePaginationToJSON(
      value.pagination,
    ),
  };
}