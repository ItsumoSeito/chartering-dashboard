/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Request } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function RequestCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    originAirport: "",
    originAirportCode: "",
    destinationAirport: "",
    destinationAirportCode: "",
    requestedDepartureDate: "",
    cargoType: "",
    cargoWeight: "",
    cargoVolume: "",
    cargoLength: "",
    cargoWidth: "",
    cargoHeight: "",
    cargoSpecialHandlingInformation: "",
  };
  const [originAirport, setOriginAirport] = React.useState(
    initialValues.originAirport
  );
  const [originAirportCode, setOriginAirportCode] = React.useState(
    initialValues.originAirportCode
  );
  const [destinationAirport, setDestinationAirport] = React.useState(
    initialValues.destinationAirport
  );
  const [destinationAirportCode, setDestinationAirportCode] = React.useState(
    initialValues.destinationAirportCode
  );
  const [requestedDepartureDate, setRequestedDepartureDate] = React.useState(
    initialValues.requestedDepartureDate
  );
  const [cargoType, setCargoType] = React.useState(initialValues.cargoType);
  const [cargoWeight, setCargoWeight] = React.useState(
    initialValues.cargoWeight
  );
  const [cargoVolume, setCargoVolume] = React.useState(
    initialValues.cargoVolume
  );
  const [cargoLength, setCargoLength] = React.useState(
    initialValues.cargoLength
  );
  const [cargoWidth, setCargoWidth] = React.useState(initialValues.cargoWidth);
  const [cargoHeight, setCargoHeight] = React.useState(
    initialValues.cargoHeight
  );
  const [cargoSpecialHandlingInformation, setCargoSpecialHandlingInformation] =
    React.useState(initialValues.cargoSpecialHandlingInformation);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setOriginAirport(initialValues.originAirport);
    setOriginAirportCode(initialValues.originAirportCode);
    setDestinationAirport(initialValues.destinationAirport);
    setDestinationAirportCode(initialValues.destinationAirportCode);
    setRequestedDepartureDate(initialValues.requestedDepartureDate);
    setCargoType(initialValues.cargoType);
    setCargoWeight(initialValues.cargoWeight);
    setCargoVolume(initialValues.cargoVolume);
    setCargoLength(initialValues.cargoLength);
    setCargoWidth(initialValues.cargoWidth);
    setCargoHeight(initialValues.cargoHeight);
    setCargoSpecialHandlingInformation(
      initialValues.cargoSpecialHandlingInformation
    );
    setErrors({});
  };
  const validations = {
    originAirport: [{ type: "Required" }],
    originAirportCode: [{ type: "Required" }],
    destinationAirport: [{ type: "Required" }],
    destinationAirportCode: [{ type: "Required" }],
    requestedDepartureDate: [{ type: "Required" }],
    cargoType: [{ type: "Required" }],
    cargoWeight: [{ type: "Required" }],
    cargoVolume: [{ type: "Required" }],
    cargoLength: [{ type: "Required" }],
    cargoWidth: [{ type: "Required" }],
    cargoHeight: [{ type: "Required" }],
    cargoSpecialHandlingInformation: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          originAirport,
          originAirportCode,
          destinationAirport,
          destinationAirportCode,
          requestedDepartureDate,
          cargoType,
          cargoWeight,
          cargoVolume,
          cargoLength,
          cargoWidth,
          cargoHeight,
          cargoSpecialHandlingInformation,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Request(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RequestCreateForm")}
      {...rest}
    >
      <TextField
        label="Origin airport"
        isRequired={true}
        isReadOnly={false}
        value={originAirport}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              originAirport: value,
              originAirportCode,
              destinationAirport,
              destinationAirportCode,
              requestedDepartureDate,
              cargoType,
              cargoWeight,
              cargoVolume,
              cargoLength,
              cargoWidth,
              cargoHeight,
              cargoSpecialHandlingInformation,
            };
            const result = onChange(modelFields);
            value = result?.originAirport ?? value;
          }
          if (errors.originAirport?.hasError) {
            runValidationTasks("originAirport", value);
          }
          setOriginAirport(value);
        }}
        onBlur={() => runValidationTasks("originAirport", originAirport)}
        errorMessage={errors.originAirport?.errorMessage}
        hasError={errors.originAirport?.hasError}
        {...getOverrideProps(overrides, "originAirport")}
      ></TextField>
      <TextField
        label="Origin airport code"
        isRequired={true}
        isReadOnly={false}
        value={originAirportCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              originAirport,
              originAirportCode: value,
              destinationAirport,
              destinationAirportCode,
              requestedDepartureDate,
              cargoType,
              cargoWeight,
              cargoVolume,
              cargoLength,
              cargoWidth,
              cargoHeight,
              cargoSpecialHandlingInformation,
            };
            const result = onChange(modelFields);
            value = result?.originAirportCode ?? value;
          }
          if (errors.originAirportCode?.hasError) {
            runValidationTasks("originAirportCode", value);
          }
          setOriginAirportCode(value);
        }}
        onBlur={() =>
          runValidationTasks("originAirportCode", originAirportCode)
        }
        errorMessage={errors.originAirportCode?.errorMessage}
        hasError={errors.originAirportCode?.hasError}
        {...getOverrideProps(overrides, "originAirportCode")}
      ></TextField>
      <TextField
        label="Destination airport"
        isRequired={true}
        isReadOnly={false}
        value={destinationAirport}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              originAirport,
              originAirportCode,
              destinationAirport: value,
              destinationAirportCode,
              requestedDepartureDate,
              cargoType,
              cargoWeight,
              cargoVolume,
              cargoLength,
              cargoWidth,
              cargoHeight,
              cargoSpecialHandlingInformation,
            };
            const result = onChange(modelFields);
            value = result?.destinationAirport ?? value;
          }
          if (errors.destinationAirport?.hasError) {
            runValidationTasks("destinationAirport", value);
          }
          setDestinationAirport(value);
        }}
        onBlur={() =>
          runValidationTasks("destinationAirport", destinationAirport)
        }
        errorMessage={errors.destinationAirport?.errorMessage}
        hasError={errors.destinationAirport?.hasError}
        {...getOverrideProps(overrides, "destinationAirport")}
      ></TextField>
      <TextField
        label="Destination airport code"
        isRequired={true}
        isReadOnly={false}
        value={destinationAirportCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              originAirport,
              originAirportCode,
              destinationAirport,
              destinationAirportCode: value,
              requestedDepartureDate,
              cargoType,
              cargoWeight,
              cargoVolume,
              cargoLength,
              cargoWidth,
              cargoHeight,
              cargoSpecialHandlingInformation,
            };
            const result = onChange(modelFields);
            value = result?.destinationAirportCode ?? value;
          }
          if (errors.destinationAirportCode?.hasError) {
            runValidationTasks("destinationAirportCode", value);
          }
          setDestinationAirportCode(value);
        }}
        onBlur={() =>
          runValidationTasks("destinationAirportCode", destinationAirportCode)
        }
        errorMessage={errors.destinationAirportCode?.errorMessage}
        hasError={errors.destinationAirportCode?.hasError}
        {...getOverrideProps(overrides, "destinationAirportCode")}
      ></TextField>
      <TextField
        label="Requested departure date"
        isRequired={true}
        isReadOnly={false}
        value={requestedDepartureDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              originAirport,
              originAirportCode,
              destinationAirport,
              destinationAirportCode,
              requestedDepartureDate: value,
              cargoType,
              cargoWeight,
              cargoVolume,
              cargoLength,
              cargoWidth,
              cargoHeight,
              cargoSpecialHandlingInformation,
            };
            const result = onChange(modelFields);
            value = result?.requestedDepartureDate ?? value;
          }
          if (errors.requestedDepartureDate?.hasError) {
            runValidationTasks("requestedDepartureDate", value);
          }
          setRequestedDepartureDate(value);
        }}
        onBlur={() =>
          runValidationTasks("requestedDepartureDate", requestedDepartureDate)
        }
        errorMessage={errors.requestedDepartureDate?.errorMessage}
        hasError={errors.requestedDepartureDate?.hasError}
        {...getOverrideProps(overrides, "requestedDepartureDate")}
      ></TextField>
      <TextField
        label="Cargo type"
        isRequired={true}
        isReadOnly={false}
        value={cargoType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              originAirport,
              originAirportCode,
              destinationAirport,
              destinationAirportCode,
              requestedDepartureDate,
              cargoType: value,
              cargoWeight,
              cargoVolume,
              cargoLength,
              cargoWidth,
              cargoHeight,
              cargoSpecialHandlingInformation,
            };
            const result = onChange(modelFields);
            value = result?.cargoType ?? value;
          }
          if (errors.cargoType?.hasError) {
            runValidationTasks("cargoType", value);
          }
          setCargoType(value);
        }}
        onBlur={() => runValidationTasks("cargoType", cargoType)}
        errorMessage={errors.cargoType?.errorMessage}
        hasError={errors.cargoType?.hasError}
        {...getOverrideProps(overrides, "cargoType")}
      ></TextField>
      <TextField
        label="Cargo weight"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={cargoWeight}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              originAirport,
              originAirportCode,
              destinationAirport,
              destinationAirportCode,
              requestedDepartureDate,
              cargoType,
              cargoWeight: value,
              cargoVolume,
              cargoLength,
              cargoWidth,
              cargoHeight,
              cargoSpecialHandlingInformation,
            };
            const result = onChange(modelFields);
            value = result?.cargoWeight ?? value;
          }
          if (errors.cargoWeight?.hasError) {
            runValidationTasks("cargoWeight", value);
          }
          setCargoWeight(value);
        }}
        onBlur={() => runValidationTasks("cargoWeight", cargoWeight)}
        errorMessage={errors.cargoWeight?.errorMessage}
        hasError={errors.cargoWeight?.hasError}
        {...getOverrideProps(overrides, "cargoWeight")}
      ></TextField>
      <TextField
        label="Cargo volume"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={cargoVolume}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              originAirport,
              originAirportCode,
              destinationAirport,
              destinationAirportCode,
              requestedDepartureDate,
              cargoType,
              cargoWeight,
              cargoVolume: value,
              cargoLength,
              cargoWidth,
              cargoHeight,
              cargoSpecialHandlingInformation,
            };
            const result = onChange(modelFields);
            value = result?.cargoVolume ?? value;
          }
          if (errors.cargoVolume?.hasError) {
            runValidationTasks("cargoVolume", value);
          }
          setCargoVolume(value);
        }}
        onBlur={() => runValidationTasks("cargoVolume", cargoVolume)}
        errorMessage={errors.cargoVolume?.errorMessage}
        hasError={errors.cargoVolume?.hasError}
        {...getOverrideProps(overrides, "cargoVolume")}
      ></TextField>
      <TextField
        label="Cargo length"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={cargoLength}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              originAirport,
              originAirportCode,
              destinationAirport,
              destinationAirportCode,
              requestedDepartureDate,
              cargoType,
              cargoWeight,
              cargoVolume,
              cargoLength: value,
              cargoWidth,
              cargoHeight,
              cargoSpecialHandlingInformation,
            };
            const result = onChange(modelFields);
            value = result?.cargoLength ?? value;
          }
          if (errors.cargoLength?.hasError) {
            runValidationTasks("cargoLength", value);
          }
          setCargoLength(value);
        }}
        onBlur={() => runValidationTasks("cargoLength", cargoLength)}
        errorMessage={errors.cargoLength?.errorMessage}
        hasError={errors.cargoLength?.hasError}
        {...getOverrideProps(overrides, "cargoLength")}
      ></TextField>
      <TextField
        label="Cargo width"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={cargoWidth}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              originAirport,
              originAirportCode,
              destinationAirport,
              destinationAirportCode,
              requestedDepartureDate,
              cargoType,
              cargoWeight,
              cargoVolume,
              cargoLength,
              cargoWidth: value,
              cargoHeight,
              cargoSpecialHandlingInformation,
            };
            const result = onChange(modelFields);
            value = result?.cargoWidth ?? value;
          }
          if (errors.cargoWidth?.hasError) {
            runValidationTasks("cargoWidth", value);
          }
          setCargoWidth(value);
        }}
        onBlur={() => runValidationTasks("cargoWidth", cargoWidth)}
        errorMessage={errors.cargoWidth?.errorMessage}
        hasError={errors.cargoWidth?.hasError}
        {...getOverrideProps(overrides, "cargoWidth")}
      ></TextField>
      <TextField
        label="Cargo height"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={cargoHeight}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              originAirport,
              originAirportCode,
              destinationAirport,
              destinationAirportCode,
              requestedDepartureDate,
              cargoType,
              cargoWeight,
              cargoVolume,
              cargoLength,
              cargoWidth,
              cargoHeight: value,
              cargoSpecialHandlingInformation,
            };
            const result = onChange(modelFields);
            value = result?.cargoHeight ?? value;
          }
          if (errors.cargoHeight?.hasError) {
            runValidationTasks("cargoHeight", value);
          }
          setCargoHeight(value);
        }}
        onBlur={() => runValidationTasks("cargoHeight", cargoHeight)}
        errorMessage={errors.cargoHeight?.errorMessage}
        hasError={errors.cargoHeight?.hasError}
        {...getOverrideProps(overrides, "cargoHeight")}
      ></TextField>
      <TextField
        label="Cargo special handling information"
        isRequired={false}
        isReadOnly={false}
        value={cargoSpecialHandlingInformation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              originAirport,
              originAirportCode,
              destinationAirport,
              destinationAirportCode,
              requestedDepartureDate,
              cargoType,
              cargoWeight,
              cargoVolume,
              cargoLength,
              cargoWidth,
              cargoHeight,
              cargoSpecialHandlingInformation: value,
            };
            const result = onChange(modelFields);
            value = result?.cargoSpecialHandlingInformation ?? value;
          }
          if (errors.cargoSpecialHandlingInformation?.hasError) {
            runValidationTasks("cargoSpecialHandlingInformation", value);
          }
          setCargoSpecialHandlingInformation(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "cargoSpecialHandlingInformation",
            cargoSpecialHandlingInformation
          )
        }
        errorMessage={errors.cargoSpecialHandlingInformation?.errorMessage}
        hasError={errors.cargoSpecialHandlingInformation?.hasError}
        {...getOverrideProps(overrides, "cargoSpecialHandlingInformation")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
