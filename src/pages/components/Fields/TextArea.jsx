import React from "react";
import { FormLabel } from "@chakra-ui/form-control";
import { Field } from 'formik';

export default function TextArea({ label, name }) {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Field
        as='textarea'
        name={name}
        className="chakra-input css-1c6j008"
      />
    </>
  );
}
