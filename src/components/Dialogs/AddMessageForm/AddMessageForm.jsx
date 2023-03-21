import React from "react";
import { Formik, Form, Field } from "formik";
import { Input } from "../../Common/FormsControls/FormsControls";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";

export const validateTextarea = (value) => {
  const errors = [];
  const maxLength = maxLengthCreator(5);

  if (required(value)) {
    errors.push("Field is required");
  }
  if (maxLength(value)) {
    errors.push(`Max length is ${maxLength}`);
  }

  return errors;
};
const AddMessageForm = (props) => {
  let AddNewMessage = (values) => {
    props.sendMessage(values);
  };

  return (
    <Formik
      initialValues={{
        newMessageBody: "",
      }}
      onSubmit={(values, { resetForm }) => {
        AddNewMessage(values.newMessageBody);
        resetForm({ values: "" });
      }}
    >
      {() => (
        <Form>
          <div>
            <Field
              name={"newMessageBody"}
              as={Input}
              placeholder={"enter text"}
              validate={(value) => {
                const errors = validateTextarea(value);
                return errors.length ? errors : undefined;
              }}
            />
          </div>

          <button type={"submit"}>Send</button>
        </Form>
      )}
    </Formik>
  );
};

export default AddMessageForm;
