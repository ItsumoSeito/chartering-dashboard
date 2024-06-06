/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRequestInput = {
  id?: string | null,
  originAirport: string,
  originAirportCode: string,
  destinationAirport: string,
  destinationAirportCode: string,
  requestedDepartureDate: string,
  cargoType: string,
  cargoWeight: number,
  cargoVolume: number,
  cargoLength: number,
  cargoWidth: number,
  cargoHeight: number,
  cargoSpecialHandlingInformation?: string | null,
  _version?: number | null,
};

export type ModelRequestConditionInput = {
  originAirport?: ModelStringInput | null,
  originAirportCode?: ModelStringInput | null,
  destinationAirport?: ModelStringInput | null,
  destinationAirportCode?: ModelStringInput | null,
  requestedDepartureDate?: ModelStringInput | null,
  cargoType?: ModelStringInput | null,
  cargoWeight?: ModelFloatInput | null,
  cargoVolume?: ModelFloatInput | null,
  cargoLength?: ModelFloatInput | null,
  cargoWidth?: ModelFloatInput | null,
  cargoHeight?: ModelFloatInput | null,
  cargoSpecialHandlingInformation?: ModelStringInput | null,
  and?: Array< ModelRequestConditionInput | null > | null,
  or?: Array< ModelRequestConditionInput | null > | null,
  not?: ModelRequestConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Request = {
  __typename: "Request",
  id: string,
  originAirport: string,
  originAirportCode: string,
  destinationAirport: string,
  destinationAirportCode: string,
  requestedDepartureDate: string,
  cargoType: string,
  cargoWeight: number,
  cargoVolume: number,
  cargoLength: number,
  cargoWidth: number,
  cargoHeight: number,
  cargoSpecialHandlingInformation?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateRequestInput = {
  id: string,
  originAirport?: string | null,
  originAirportCode?: string | null,
  destinationAirport?: string | null,
  destinationAirportCode?: string | null,
  requestedDepartureDate?: string | null,
  cargoType?: string | null,
  cargoWeight?: number | null,
  cargoVolume?: number | null,
  cargoLength?: number | null,
  cargoWidth?: number | null,
  cargoHeight?: number | null,
  cargoSpecialHandlingInformation?: string | null,
  _version?: number | null,
};

export type DeleteRequestInput = {
  id: string,
  _version?: number | null,
};

export type ModelRequestFilterInput = {
  id?: ModelIDInput | null,
  originAirport?: ModelStringInput | null,
  originAirportCode?: ModelStringInput | null,
  destinationAirport?: ModelStringInput | null,
  destinationAirportCode?: ModelStringInput | null,
  requestedDepartureDate?: ModelStringInput | null,
  cargoType?: ModelStringInput | null,
  cargoWeight?: ModelFloatInput | null,
  cargoVolume?: ModelFloatInput | null,
  cargoLength?: ModelFloatInput | null,
  cargoWidth?: ModelFloatInput | null,
  cargoHeight?: ModelFloatInput | null,
  cargoSpecialHandlingInformation?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRequestFilterInput | null > | null,
  or?: Array< ModelRequestFilterInput | null > | null,
  not?: ModelRequestFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelRequestConnection = {
  __typename: "ModelRequestConnection",
  items:  Array<Request | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionRequestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  originAirport?: ModelSubscriptionStringInput | null,
  originAirportCode?: ModelSubscriptionStringInput | null,
  destinationAirport?: ModelSubscriptionStringInput | null,
  destinationAirportCode?: ModelSubscriptionStringInput | null,
  requestedDepartureDate?: ModelSubscriptionStringInput | null,
  cargoType?: ModelSubscriptionStringInput | null,
  cargoWeight?: ModelSubscriptionFloatInput | null,
  cargoVolume?: ModelSubscriptionFloatInput | null,
  cargoLength?: ModelSubscriptionFloatInput | null,
  cargoWidth?: ModelSubscriptionFloatInput | null,
  cargoHeight?: ModelSubscriptionFloatInput | null,
  cargoSpecialHandlingInformation?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRequestFilterInput | null > | null,
  or?: Array< ModelSubscriptionRequestFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateRequestMutationVariables = {
  input: CreateRequestInput,
  condition?: ModelRequestConditionInput | null,
};

export type CreateRequestMutation = {
  createRequest?:  {
    __typename: "Request",
    id: string,
    originAirport: string,
    originAirportCode: string,
    destinationAirport: string,
    destinationAirportCode: string,
    requestedDepartureDate: string,
    cargoType: string,
    cargoWeight: number,
    cargoVolume: number,
    cargoLength: number,
    cargoWidth: number,
    cargoHeight: number,
    cargoSpecialHandlingInformation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateRequestMutationVariables = {
  input: UpdateRequestInput,
  condition?: ModelRequestConditionInput | null,
};

export type UpdateRequestMutation = {
  updateRequest?:  {
    __typename: "Request",
    id: string,
    originAirport: string,
    originAirportCode: string,
    destinationAirport: string,
    destinationAirportCode: string,
    requestedDepartureDate: string,
    cargoType: string,
    cargoWeight: number,
    cargoVolume: number,
    cargoLength: number,
    cargoWidth: number,
    cargoHeight: number,
    cargoSpecialHandlingInformation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteRequestMutationVariables = {
  input: DeleteRequestInput,
  condition?: ModelRequestConditionInput | null,
};

export type DeleteRequestMutation = {
  deleteRequest?:  {
    __typename: "Request",
    id: string,
    originAirport: string,
    originAirportCode: string,
    destinationAirport: string,
    destinationAirportCode: string,
    requestedDepartureDate: string,
    cargoType: string,
    cargoWeight: number,
    cargoVolume: number,
    cargoLength: number,
    cargoWidth: number,
    cargoHeight: number,
    cargoSpecialHandlingInformation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetRequestQueryVariables = {
  id: string,
};

export type GetRequestQuery = {
  getRequest?:  {
    __typename: "Request",
    id: string,
    originAirport: string,
    originAirportCode: string,
    destinationAirport: string,
    destinationAirportCode: string,
    requestedDepartureDate: string,
    cargoType: string,
    cargoWeight: number,
    cargoVolume: number,
    cargoLength: number,
    cargoWidth: number,
    cargoHeight: number,
    cargoSpecialHandlingInformation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListRequestsQueryVariables = {
  filter?: ModelRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRequestsQuery = {
  listRequests?:  {
    __typename: "ModelRequestConnection",
    items:  Array< {
      __typename: "Request",
      id: string,
      originAirport: string,
      originAirportCode: string,
      destinationAirport: string,
      destinationAirportCode: string,
      requestedDepartureDate: string,
      cargoType: string,
      cargoWeight: number,
      cargoVolume: number,
      cargoLength: number,
      cargoWidth: number,
      cargoHeight: number,
      cargoSpecialHandlingInformation?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRequestsQueryVariables = {
  filter?: ModelRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRequestsQuery = {
  syncRequests?:  {
    __typename: "ModelRequestConnection",
    items:  Array< {
      __typename: "Request",
      id: string,
      originAirport: string,
      originAirportCode: string,
      destinationAirport: string,
      destinationAirportCode: string,
      requestedDepartureDate: string,
      cargoType: string,
      cargoWeight: number,
      cargoVolume: number,
      cargoLength: number,
      cargoWidth: number,
      cargoHeight: number,
      cargoSpecialHandlingInformation?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateRequestSubscriptionVariables = {
  filter?: ModelSubscriptionRequestFilterInput | null,
};

export type OnCreateRequestSubscription = {
  onCreateRequest?:  {
    __typename: "Request",
    id: string,
    originAirport: string,
    originAirportCode: string,
    destinationAirport: string,
    destinationAirportCode: string,
    requestedDepartureDate: string,
    cargoType: string,
    cargoWeight: number,
    cargoVolume: number,
    cargoLength: number,
    cargoWidth: number,
    cargoHeight: number,
    cargoSpecialHandlingInformation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateRequestSubscriptionVariables = {
  filter?: ModelSubscriptionRequestFilterInput | null,
};

export type OnUpdateRequestSubscription = {
  onUpdateRequest?:  {
    __typename: "Request",
    id: string,
    originAirport: string,
    originAirportCode: string,
    destinationAirport: string,
    destinationAirportCode: string,
    requestedDepartureDate: string,
    cargoType: string,
    cargoWeight: number,
    cargoVolume: number,
    cargoLength: number,
    cargoWidth: number,
    cargoHeight: number,
    cargoSpecialHandlingInformation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteRequestSubscriptionVariables = {
  filter?: ModelSubscriptionRequestFilterInput | null,
};

export type OnDeleteRequestSubscription = {
  onDeleteRequest?:  {
    __typename: "Request",
    id: string,
    originAirport: string,
    originAirportCode: string,
    destinationAirport: string,
    destinationAirportCode: string,
    requestedDepartureDate: string,
    cargoType: string,
    cargoWeight: number,
    cargoVolume: number,
    cargoLength: number,
    cargoWidth: number,
    cargoHeight: number,
    cargoSpecialHandlingInformation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
