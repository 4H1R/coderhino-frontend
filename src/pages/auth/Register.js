import Head from "components/Head";
import React from "react";
import { Formik, Form } from "formik";
import { Input, Button, Link } from "components/auth/Form";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "The name must be at least 3 characters.")
    .max(20, "The name must not be greater than 50 characters.")
    .required("The name field is required."),
  username: Yup.string()
    .min(3, "The username must be at least 3 characters.")
    .max(31, "The name must not be greater than 31 characters.")
    .matches(/^[a-zA-Z0-9._]+$/, "The username format is invalid.")
    .required("The username field is required."),
  email: Yup.string()
    .email("The email must be a valid email address.")
    .required("The email field is required."),
  password: Yup.string()
    .min(8, "The password must be at least 8 characters.")
    .max(20, "The password must not be greater than 20 characters.")
    .required("The password field is required."),
  passwordConfirmation: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "The password confirmation does not match."
    )
    .required("The password confirmation field is required."),
});

function Register() {
  return (
    <>
      <Head title="Register" desc="Register page" />
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={validationSchema}
        //  onSubmit outputs values for now
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="space-y-4">
          <div className="space-y-2">
            <Input name="username" />
            <Input name="email" type="email" />
            <Input name="password" type="password" />
            <Input
              name="passwordConfirmation"
              type="password"
              placeholder="Password Confirmation"
            />
          </div>
          <Button>Register</Button>
        </Form>
      </Formik>
      <Link
        content="Already have an account"
        linkContent="Login Now"
        to="/login"
      />
    </>
  );
}

export default Register;
