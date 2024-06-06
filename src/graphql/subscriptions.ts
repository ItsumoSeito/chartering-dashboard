/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateRequest = /* GraphQL */ `subscription OnCreateRequest($filter: ModelSubscriptionRequestFilterInput) {
  onCreateRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRequestSubscriptionVariables,
  APITypes.OnCreateRequestSubscription
>;
export const onUpdateRequest = /* GraphQL */ `subscription OnUpdateRequest($filter: ModelSubscriptionRequestFilterInput) {
  onUpdateRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRequestSubscriptionVariables,
  APITypes.OnUpdateRequestSubscription
>;
export const onDeleteRequest = /* GraphQL */ `subscription OnDeleteRequest($filter: ModelSubscriptionRequestFilterInput) {
  onDeleteRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRequestSubscriptionVariables,
  APITypes.OnDeleteRequestSubscription
>;
