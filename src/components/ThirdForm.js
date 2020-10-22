import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import ErrorText from './ErrorText';

const ThirdForm = () => {
  const initialValues = {
    name: '',
    email: '',
    github: '',
    comments: '',
    adress: '',
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
        <ErrorMessage name="name" component={ErrorText} />

        <label htmlFor="email">E-mail</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" component={ErrorText} />

        <label htmlFor="github">Github profile</label>

        <Field type="text" id="github" name="github" />
        <ErrorMessage name="github" component={ErrorText} />

        <label htmlFor="comments">Comments</label>
        <Field as="textarea" id="comments" name="comments" />

        <label htmlFor="address">Address</label>
        <Field name="address">
          {props => {
            const { field, meta } = props;
            return (
              <div>
                <input id="address" {...field} />
                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
              </div>
            );
          }}
        </Field>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ThirdForm;
