// 
import React from "react";
import { Formik, Field, Form } from "formik";
import { required } from "../../../../utils/validators/validators";
import { createField } from "../../../Common/FormsControls/FormsControls";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      {error && <div>{error}</div>}
      <div>
        <b>Full name</b>: {createField("Full name", "fullName", [required], Field, {})}
      </div>
      <div>
        <b>Looking for a job</b>:
        {createField("", "lookingForAJob", [], Field, { type: "checkbox" }, "")}
      </div>
      <div>
        <b>My professional skills</b>:
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          [required],
          Field,
          {}
        )}
      </div>
      <div>
        <b>About me</b>:
        {createField("About me", "aboutMe", [required], Field, {})}
      </div>
      {/* <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              <b>
                {key}: {createField(key, "contacts." + key, [], Field, {})}
              </b>
            </div>
          );
        })}
      </div> */}
    </Form>
  );
};

const ProfileDataFormFormik = ({ initialValues, onSubmit, error }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit, profile }) => (
        <ProfileDataForm
          handleSubmit={handleSubmit}
          profile={profile}
          error={error}
        />
      )}
    </Formik>
  );
};

export default ProfileDataFormFormik;
