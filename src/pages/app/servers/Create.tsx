import React from "react";
import Input from "shared/form/Input";
import Button from "shared/form/Button";
import { Formik, Form } from "formik";
import Head from "shared/elements/Head";
import Heading from "shared/elements/Heading";
import "react-image-crop/dist/ReactCrop.css";

function Create() {
  return (
    <>
      <Head title="Create a new server" desc="Create a new server page" />
      <Formik
        initialValues={{ name: "" }}
        onSubmit={async (values, { setErrors }) => {}}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-lg mx-auto space-y-4">
            <Heading>
              <span className="text-gradient">Servers</span> / Create
            </Heading>
            <div className="space-y-2">
              <Input name="name" />
              {/* <input type="file" onChange={}/> */}
            </div>
            <Button
              disabled={isSubmitting}
              className="w-full p-2 text-lg rounded-md gradient"
            >
              Create
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Create;
