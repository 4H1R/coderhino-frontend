import React from "react";
import Head from "components/Head";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Input, Link } from "components/auth/Form";
import login from "services/auth/register";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("The email must be a valid email address.")
    .required("The email field is required."),
  password: Yup.string()
    .min(8, "The password must be at least 8 characters.")
    .max(20, "The password must not be greater than 8 characters.")
    .required("The password field is required."),
});

function Login() {
  return (
    <>
      <Head title="Login" desc="Login page" />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        //  onSubmit outputs values for now
        onSubmit={async (values, { setSubmitting }) => {
          await login(values);
        }}
      >
        <Form className="space-y-4">
          <div className="space-y-2">
            <Input name="email" type="email" />
            <Input name="password" type="password" />
          </div>
          <div className="flex justify-between">
            <a href="/" className="inline-block text-gray-400 hover:underline">
              Forgot Password?
            </a>
          </div>
          <Button>Login</Button>
        </Form>
      </Formik>
      <Link
        content="Not a member yet"
        linkContent="Register Now"
        to="/register"
      />
    </>
  );
}

export default Login;
