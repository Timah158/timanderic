/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Project2 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Project2UpdateFormInputValues = {
    title?: string;
    createdOn?: string;
    completedOn?: string;
    description?: string;
    img?: string;
    createdBy?: string;
    hidden?: boolean;
    status?: string;
};
export declare type Project2UpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    createdOn?: ValidationFunction<string>;
    completedOn?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    img?: ValidationFunction<string>;
    createdBy?: ValidationFunction<string>;
    hidden?: ValidationFunction<boolean>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Project2UpdateFormOverridesProps = {
    Project2UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    createdOn?: PrimitiveOverrideProps<TextFieldProps>;
    completedOn?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    img?: PrimitiveOverrideProps<TextFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
    hidden?: PrimitiveOverrideProps<SwitchFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Project2UpdateFormProps = React.PropsWithChildren<{
    overrides?: Project2UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    project2?: Project2;
    onSubmit?: (fields: Project2UpdateFormInputValues) => Project2UpdateFormInputValues;
    onSuccess?: (fields: Project2UpdateFormInputValues) => void;
    onError?: (fields: Project2UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Project2UpdateFormInputValues) => Project2UpdateFormInputValues;
    onValidate?: Project2UpdateFormValidationValues;
} & React.CSSProperties>;
export default function Project2UpdateForm(props: Project2UpdateFormProps): React.ReactElement;
