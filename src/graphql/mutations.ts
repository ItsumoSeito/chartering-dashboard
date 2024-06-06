/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createRequest = /* GraphQL */ `mutation CreateRequest(
  $input: CreateRequestInput!
  $condition: ModelRequestConditionInput
) {
  createRequest(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRequestMutationVariables,
  APITypes.CreateRequestMutation
>;
export const updateRequest = /* GraphQL */ `mutation UpdateRequest(
  $input: UpdateRequestInput!
  $condition: ModelRequestConditionInput
) {
  updateRequest(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRequestMutationVariables,
  APITypes.UpdateRequestMutation
>;
export const deleteRequest = /* GraphQL */ `mutation DeleteRequest(
  $input: DeleteRequestInput!
  $condition: ModelRequestConditionInput
) {
  deleteRequest(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRequestMutationVariables,
  APITypes.DeleteRequestMutation
>;
