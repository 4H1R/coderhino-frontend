import Head from "components/Head";
import React from "react";
import { Formik, Form } from "formik";
import { Input, Button, Link } from "components/auth/Form";
import * as Yup from "yup";
import register from "services/auth/register";
import { useDispatch } from "react-redux";
import { setUser } from "stores/userSlice";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "The username must be at least 3 characters.")
    .max(31, "The username must not be greater than 31 characters.")
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
  const dispatch = useDispatch();
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
        onSubmit={async (values, { setErrors }) => {
          const { success, data } = await register(values);
          if (!success) {
            setErrors(data);
            return;
          }
          dispatch(setUser(data));
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
