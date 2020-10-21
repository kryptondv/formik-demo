import React from 'react';
import { Form, Segment, Message } from 'semantic-ui-react';
import { useFormik } from 'formik';

const FirstForm = () => {
  const initialValues = {
    name: '',
    email: '',
    github: '',
  };

  const onSubmit = values => console.log(values);

  const validate = values => {
    let errors = {};
    const { name, email, github } = values;

    if (!name) {
      errors.name = 'Required';
    }

    if (!email) {
      errors.email = 'Required';
    } else if (!email.includes('@')) {
      errors.email = 'Incorrect Email Adress';
    }

    if (!github) {
      errors.github = 'Required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
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
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {renderErrorMsg('name')}
        </Form.Field>

        <Form.Field>
          <label htmlFor="email">E-mail</label>
          <Form.Input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {renderErrorMsg('email')}
        </Form.Field>

        <Form.Field>
          <label htmlFor="github">Github profile</label>
          <Form.Input
            type="text"
            name="github"
            id="github"
            onChange={formik.handleChange}
            value={formik.values.github}
            onBlur={formik.handleBlur}
          />
          {renderErrorMsg('github')}
        </Form.Field>

        <Form.Button type="submit">Submit</Form.Button>
      </Form>
    </Segment>
  );
};

export default FirstForm;
