import React from "react";
import s from "./FormsControls.module.scss";

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
