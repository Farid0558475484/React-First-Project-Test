import React from "react";
import { Formik, Form, Field } from "formik";
import { Textarea } from "../../Common/FormsControls/FormsControls";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";

let maxLength10 = maxLengthCreator(10);

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
              as={Textarea}
              placeholder={"enter text"}
              validate={[required, maxLength10]}
            />
          </div>

          <button type={"submit"}>Send</button>
        </Form>
      )}
    </Formik>
  );
};

export default AddMessageForm;
