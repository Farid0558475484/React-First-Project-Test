import React from "react";
import s from "./FormsControls.module.css";

export const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta && meta.touched && meta.error;

  return (
    <div className={`${s.formController} ${hasError ? s.error : ""}`}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta && meta.touched && meta.error;

  return (
    <div className={`${s.formController} ${hasError ? s.error : ""}`}>
      <div>
        <textarea {...input} {...props} className={s.a} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
export const Input = ({ input, meta, ...props }) => {
  const hasError = meta && meta.touched && meta.error;

  return (
    <div className={`${s.formController} ${hasError ? s.error : ""}`}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
