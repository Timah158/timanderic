/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Project } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProjectUpdateForm(props) {
  const {
    id: idProp,
    project,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    createdOn: "",
    completedOn: "",
    description: "",
    img: "",
    createdBy: "",
    hidden: false,
    status: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [createdOn, setCreatedOn] = React.useState(initialValues.createdOn);
  const [completedOn, setCompletedOn] = React.useState(
    initialValues.completedOn
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [img, setImg] = React.useState(initialValues.img);
  const [createdBy, setCreatedBy] = React.useState(initialValues.createdBy);
  const [hidden, setHidden] = React.useState(initialValues.hidden);
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = projectRecord
      ? { ...initialValues, ...projectRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setCreatedOn(cleanValues.createdOn);
    setCompletedOn(cleanValues.completedOn);
    setDescription(cleanValues.description);
    setImg(cleanValues.img);
    setCreatedBy(cleanValues.createdBy);
    setHidden(cleanValues.hidden);
    setStatus(cleanValues.status);
    setErrors({});
  };
  const [projectRecord, setProjectRecord] = React.useState(project);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Project, idProp) : project;
      setProjectRecord(record);
    };
    queryData();
  }, [idProp, project]);
  React.useEffect(resetStateValues, [projectRecord]);
  const validations = {
    title: [{ type: "Required" }],
    createdOn: [{ type: "Required" }],
    completedOn: [],
    description: [{ type: "Required" }],
    img: [{ type: "URL" }],
    createdBy: [{ type: "Required" }],
    hidden: [{ type: "Required" }],
    status: [],
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
          title,
          createdOn,
          completedOn,
          description,
          img,
          createdBy,
          hidden,
          status,
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
            Project.copyOf(projectRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ProjectUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              createdOn,
              completedOn,
              description,
              img,
              createdBy,
              hidden,
              status,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Created on"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={createdOn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              createdOn: value,
              completedOn,
              description,
              img,
              createdBy,
              hidden,
              status,
            };
            const result = onChange(modelFields);
            value = result?.createdOn ?? value;
          }
          if (errors.createdOn?.hasError) {
            runValidationTasks("createdOn", value);
          }
          setCreatedOn(value);
        }}
        onBlur={() => runValidationTasks("createdOn", createdOn)}
        errorMessage={errors.createdOn?.errorMessage}
        hasError={errors.createdOn?.hasError}
        {...getOverrideProps(overrides, "createdOn")}
      ></TextField>
      <TextField
        label="Completed on"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={completedOn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              createdOn,
              completedOn: value,
              description,
              img,
              createdBy,
              hidden,
              status,
            };
            const result = onChange(modelFields);
            value = result?.completedOn ?? value;
          }
          if (errors.completedOn?.hasError) {
            runValidationTasks("completedOn", value);
          }
          setCompletedOn(value);
        }}
        onBlur={() => runValidationTasks("completedOn", completedOn)}
        errorMessage={errors.completedOn?.errorMessage}
        hasError={errors.completedOn?.hasError}
        {...getOverrideProps(overrides, "completedOn")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              createdOn,
              completedOn,
              description: value,
              img,
              createdBy,
              hidden,
              status,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Img"
        isRequired={false}
        isReadOnly={false}
        value={img}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              createdOn,
              completedOn,
              description,
              img: value,
              createdBy,
              hidden,
              status,
            };
            const result = onChange(modelFields);
            value = result?.img ?? value;
          }
          if (errors.img?.hasError) {
            runValidationTasks("img", value);
          }
          setImg(value);
        }}
        onBlur={() => runValidationTasks("img", img)}
        errorMessage={errors.img?.errorMessage}
        hasError={errors.img?.hasError}
        {...getOverrideProps(overrides, "img")}
      ></TextField>
      <TextField
        label="Created by"
        isRequired={true}
        isReadOnly={false}
        value={createdBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              createdOn,
              completedOn,
              description,
              img,
              createdBy: value,
              hidden,
              status,
            };
            const result = onChange(modelFields);
            value = result?.createdBy ?? value;
          }
          if (errors.createdBy?.hasError) {
            runValidationTasks("createdBy", value);
          }
          setCreatedBy(value);
        }}
        onBlur={() => runValidationTasks("createdBy", createdBy)}
        errorMessage={errors.createdBy?.errorMessage}
        hasError={errors.createdBy?.hasError}
        {...getOverrideProps(overrides, "createdBy")}
      ></TextField>
      <SwitchField
        label="Hidden"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hidden}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              createdOn,
              completedOn,
              description,
              img,
              createdBy,
              hidden: value,
              status,
            };
            const result = onChange(modelFields);
            value = result?.hidden ?? value;
          }
          if (errors.hidden?.hasError) {
            runValidationTasks("hidden", value);
          }
          setHidden(value);
        }}
        onBlur={() => runValidationTasks("hidden", hidden)}
        errorMessage={errors.hidden?.errorMessage}
        hasError={errors.hidden?.hasError}
        {...getOverrideProps(overrides, "hidden")}
      ></SwitchField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              createdOn,
              completedOn,
              description,
              img,
              createdBy,
              hidden,
              status: value,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
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
          isDisabled={!(idProp || project)}
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
              !(idProp || project) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
