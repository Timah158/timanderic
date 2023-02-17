/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Projects } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProjectsUpdateForm(props) {
  const {
    id: idProp,
    projects,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Title: "",
    Content: "",
    Created_Date: "",
    Modified_Date: "",
  };
  const [Title, setTitle] = React.useState(initialValues.Title);
  const [Content, setContent] = React.useState(initialValues.Content);
  const [Created_Date, setCreated_Date] = React.useState(
    initialValues.Created_Date
  );
  const [Modified_Date, setModified_Date] = React.useState(
    initialValues.Modified_Date
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = projectsRecord
      ? { ...initialValues, ...projectsRecord }
      : initialValues;
    setTitle(cleanValues.Title);
    setContent(cleanValues.Content);
    setCreated_Date(cleanValues.Created_Date);
    setModified_Date(cleanValues.Modified_Date);
    setErrors({});
  };
  const [projectsRecord, setProjectsRecord] = React.useState(projects);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Projects, idProp)
        : projects;
      setProjectsRecord(record);
    };
    queryData();
  }, [idProp, projects]);
  React.useEffect(resetStateValues, [projectsRecord]);
  const validations = {
    Title: [],
    Content: [],
    Created_Date: [],
    Modified_Date: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
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
          Title,
          Content,
          Created_Date,
          Modified_Date,
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
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Projects.copyOf(projectsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProjectsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={Title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title: value,
              Content,
              Created_Date,
              Modified_Date,
            };
            const result = onChange(modelFields);
            value = result?.Title ?? value;
          }
          if (errors.Title?.hasError) {
            runValidationTasks("Title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("Title", Title)}
        errorMessage={errors.Title?.errorMessage}
        hasError={errors.Title?.hasError}
        {...getOverrideProps(overrides, "Title")}
      ></TextField>
      <TextField
        label="Content"
        isRequired={false}
        isReadOnly={false}
        value={Content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Content: value,
              Created_Date,
              Modified_Date,
            };
            const result = onChange(modelFields);
            value = result?.Content ?? value;
          }
          if (errors.Content?.hasError) {
            runValidationTasks("Content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("Content", Content)}
        errorMessage={errors.Content?.errorMessage}
        hasError={errors.Content?.hasError}
        {...getOverrideProps(overrides, "Content")}
      ></TextField>
      <TextField
        label="Created date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Created_Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Content,
              Created_Date: value,
              Modified_Date,
            };
            const result = onChange(modelFields);
            value = result?.Created_Date ?? value;
          }
          if (errors.Created_Date?.hasError) {
            runValidationTasks("Created_Date", value);
          }
          setCreated_Date(value);
        }}
        onBlur={() => runValidationTasks("Created_Date", Created_Date)}
        errorMessage={errors.Created_Date?.errorMessage}
        hasError={errors.Created_Date?.hasError}
        {...getOverrideProps(overrides, "Created_Date")}
      ></TextField>
      <TextField
        label="Modified date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Modified_Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Content,
              Created_Date,
              Modified_Date: value,
            };
            const result = onChange(modelFields);
            value = result?.Modified_Date ?? value;
          }
          if (errors.Modified_Date?.hasError) {
            runValidationTasks("Modified_Date", value);
          }
          setModified_Date(value);
        }}
        onBlur={() => runValidationTasks("Modified_Date", Modified_Date)}
        errorMessage={errors.Modified_Date?.errorMessage}
        hasError={errors.Modified_Date?.hasError}
        {...getOverrideProps(overrides, "Modified_Date")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || projects)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || projects) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
