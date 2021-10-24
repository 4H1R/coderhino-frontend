import { Form, Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import Input from "shared/form/Input";
import Button from "shared/form/Button";
import * as Yup from "yup";
import { putMe } from "services/auth/me";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "The username must be at least 3 characters.")
    .max(31, "The username must not be greater than 31 characters.")
    .matches(/^[a-zA-Z0-9._]+$/, "The username format is invalid.")
    .required("The username field is required."),
});

function Me() {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="mt-4">
      <Formik
        validationSchema={validationSchema}
        initialValues={{ username: user.username }}
        //  onSubmit outputs values for now
        onSubmit={async (values, { setErrors }) => {
          const data = await putMe(values);
          console.log(data);
        }}
      >
        <Form className="space-y-4">
          <h1 className="text-2xl font-bold text-center">
            <span className="text-transparent bg-clip-text gradient">
              {user.username}
            </span>{" "}
            / Edit
          </h1>
          <div className="space-y-2">
            <Input name="username" />
          </div>
          <Button>Submit</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default Me;
