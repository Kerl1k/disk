import React from "react";
import * as Yup from "yup";
import { IUser } from "../typeScripts/IUser";
import { Field, Form, Formik } from "formik";
import { userApi } from "../services/userService";
import endpoint from "../components/endpoint";

const Registration = () => {
  const [registration] = userApi.useFetchRegistrationMutation();
  const initialValues = {
    login: "",
    password: "",
  };
  const validationSchema = Yup.object({
    login: Yup.string().required("Логин не введен"),
    password: Yup.string().required("Пароль не введен"),
  });

  function onSubmit(values: IUser) {
    registration(values)
      .unwrap()
      .then((r) => endpoint(r))
      .catch((error) => console.error("rejected", error));
  }

  return (
    <div>
      <h1>Registration</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            Логин: <Field name="login" />
            Пароль: <Field name="password" />
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
