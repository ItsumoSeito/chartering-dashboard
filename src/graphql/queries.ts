/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getRequest = /* GraphQL */ `query GetRequest($id: ID!) {
  getRequest(id: $id) {
    id
    originAirport
    originAirportCode
    destinationAirport
    destinationAirportCode
    requestedDepartureDate
    cargoType
    cargoWeight
    cargoVolume
    cargoLength
    cargoWidth
    cargoHeight
    cargoSpecialHandlingInformation
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRequestQueryVariables,
  APITypes.GetRequestQuery
>;
export const listRequests = /* GraphQL */ `query ListRequests(
  $filter: ModelRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  listRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      originAirport
      originAirportCode
      destinationAirport
      destinationAirportCode
      requestedDepartureDate
      cargoType
      cargoWeight
      cargoVolume
      cargoLength
      cargoWidth
      cargoHeight
      cargoSpecialHandlingInformation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRequestsQueryVariables,
  APITypes.ListRequestsQuery
>;
export const syncRequests = /* GraphQL */ `query SyncRequests(
  $filter: ModelRequestFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRequests(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      originAirport
      originAirportCode
      destinationAirport
      destinationAirportCode
      requestedDepartureDate
      cargoType
      cargoWeight
      cargoVolume
      cargoLength
      cargoWidth
      cargoHeight
      cargoSpecialHandlingInformation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRequestsQueryVariables,
  APITypes.SyncRequestsQuery
>;
