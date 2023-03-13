/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Project2CreateFormInputValues = {
    title?: string;
    createdOn?: string;
    completedOn?: string;
    description?: string;
    img?: string;
    createdBy?: string;
    hidden?: boolean;
    status?: string;
};
export declare type Project2CreateFormValidationValues = {
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
export declare type Project2CreateFormOverridesProps = {
    Project2CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    createdOn?: PrimitiveOverrideProps<TextFieldProps>;
    completedOn?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    img?: PrimitiveOverrideProps<TextFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
    hidden?: PrimitiveOverrideProps<SwitchFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Project2CreateFormProps = React.PropsWithChildren<{
    overrides?: Project2CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Project2CreateFormInputValues) => Project2CreateFormInputValues;
    onSuccess?: (fields: Project2CreateFormInputValues) => void;
    onError?: (fields: Project2CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Project2CreateFormInputValues) => Project2CreateFormInputValues;
    onValidate?: Project2CreateFormValidationValues;
} & React.CSSProperties>;
export default function Project2CreateForm(props: Project2CreateFormProps): React.ReactElement;
