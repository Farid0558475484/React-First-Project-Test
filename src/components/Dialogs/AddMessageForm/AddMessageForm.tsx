import { Formik, Form, Field } from "formik";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { FC } from "react";

type PropsType = {
  sendMessage: (messageText: string) => void;
  onSubmit: (values: NewMessageFormValuesType) => void;
};

export type NewMessageFormValuesType = {
  newMessageBody: string;
};

export const validateTextarea = (value: string) => {
  const errors: string[] = [];
  const maxLength = maxLengthCreator(15);

  if (required(value)) {
    errors.push("Field is required");
  }
  if (maxLength(value)) {
    errors.push(`Max length is ${maxLength}`);
  }

  return errors;
};

const AddMessageForm: FC<PropsType> = ({ sendMessage }) => {
  const AddNewMessage = (values: NewMessageFormValuesType) => {
    sendMessage(values.newMessageBody);
  };

  const initialValues: NewMessageFormValuesType = {
    newMessageBody: "",
  };

  const handleSubmit = (values: NewMessageFormValuesType, { resetForm }:any) => {
    AddNewMessage(values);
    resetForm({ values: { newMessageBody: "" } });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <div>
            <Field
              name="newMessageBody"
              as="input"
              placeholder="enter text"
              validate={(value: string) => {
                const errors = validateTextarea(value);
                return errors.length ? errors : undefined;
              }}
            />
          </div>

          <button type="submit">Send</button>
        </Form>
      )}
    </Formik>
  );
};

export default AddMessageForm;
