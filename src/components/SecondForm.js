import React from 'react';
import { Form, Segment, Message } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SecondForm = () => {
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

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const { errors, touched } = formik;

  const renderErrorMsg = fieldName =>
    errors[fieldName] && touched[fieldName] ? (
      <Message negative visible size="mini">
        {errors[fieldName]}
      </Message>
    ) : null;

  return (
    <Segment inverted>
      <Form size="large" inverted onSubmit={formik.handleSubmit}>
        <Form.Field>
          <label htmlFor="name">Name</label>
          <Form.Input
            type="text"
            name="name"
            id="name"
            {...formik.getFieldProps('name')}
          />
          {renderErrorMsg('name')}
        </Form.Field>

        <Form.Field>
          <label htmlFor="email">E-mail</label>
          <Form.Input
            type="email"
            name="email"
            id="email"
            {...formik.getFieldProps('email')}
          />
          {renderErrorMsg('email')}
        </Form.Field>

        <Form.Field>
          <label htmlFor="github">Github profile</label>
          <Form.Input
            type="text"
            name="github"
            id="github"
            {...formik.getFieldProps('github')}
          />
          {renderErrorMsg('github')}
        </Form.Field>

        <Form.Button type="submit">Submit</Form.Button>
      </Form>
    </Segment>
  );
};

export default SecondForm;
