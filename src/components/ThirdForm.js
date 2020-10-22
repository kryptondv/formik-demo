import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ThirdForm = () => {
  const initialValues = {
    name: '',
    email: '',
    github: '',
  };

  const onSubmit = values => console.log(values);

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    github: Yup.string().required('Required'),
  });
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" />

        <label htmlFor="email">E-mail</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" />

        <label htmlFor="github">Github profile</label>

        <Field type="text" id="github" name="github" />
        <ErrorMessage name="github" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ThirdForm;
