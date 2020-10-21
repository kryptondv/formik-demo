import React from 'react';
import { Form, Segment} from 'semantic-ui-react';
import { useFormik } from 'formik';

const FirstForm = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      github: ''
    },
    onSubmit: values => console.log(values)
  });

  console.log('Form values', formik.values)

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
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor="email">E-mail</label>
          <Form.Input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor="github">Github profile</label>
          <Form.Input
            type="text"
            name="github"
            id="github"
            onChange={formik.handleChange}
            value={formik.values.github}
          />
        </Form.Field>

        <Form.Button type="submit">Submit</Form.Button>
      </Form>
    </Segment>
  );
};

export default FirstForm;
