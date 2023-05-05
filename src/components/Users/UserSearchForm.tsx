import { Formik } from "formik";
import { FilterType } from "../../redux/users-reducer";

export const userSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
};

type PropsType = {
  onFilterChanged: (filter: FilterType) => void;
};

const UsersSearchForm: React.FC<PropsType> = (props) => {
  const submit = (
    values: FilterType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    props.onFilterChanged(values);
  };
  return (
    <div>
      <Formik
        initialValues={{ term: '' }}
        validate={userSearchFormValidate}
        onSubmit={submit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="term"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.term}
            />

            <button type="submit" disabled={isSubmitting}>
              Find
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UsersSearchForm;
