import React from "react";
import s from "./FormsControls.module.scss";
import { Field, useField } from "formik";




export const FormControl = ({ input, meta, child, touched, ...props }) => {
  const hasError = meta && meta.touched && meta.error;

  return (
    <div className={`${s.formController} ${hasError ? s.error : ""}`}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = ({ input, meta, touched, ...props }) => {
  const hasError = meta && meta.touched && meta.error;

  return (
    <FormControl input={input} meta={meta}>
      <textarea
        {...input}
        {...props}
        className={`${s.formController} ${hasError ? s.error : ""}`}
      />
    </FormControl>
  );
};

export const Input = ({ input, meta, touched, ...props }) => {
  const hasError = meta && meta.touched && meta.error;

  return (
    <FormControl input={input} meta={meta}>
      <input
        {...input}
        {...props}
        className={`${s.formController} ${hasError ? s.error : ""}`}
      />
    </FormControl>
  );
};

export const ReduxFormField = ({ placeholder, name, validators, ...props }) => {
  const [field, meta] = useField({ name, validate: validators });
  const errorText = meta.error && meta.touched ? meta.error : "";
  
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        component="input"
        {...field}
        {...props}
      />
      {errorText && <div className="error">{errorText}</div>}
    </div>
  );
};

export const createField = (
  placeholder,
  name,
  validators,
  props = {},
  text = ""
) => (
  <div>
    <ReduxFormField
      placeholder={placeholder}
      name={name}
      validators={validators}
      {...props}
    />
    {text}
  </div>
);

