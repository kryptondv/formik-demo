import React from 'react';
import { Form, Segment} from 'semantic-ui-react';

const FirstForm = () => {
  return (
    <Segment inverted>
      <Form size="large" inverted>
        <Form.Field>
          <label htmlFor="name">Name</label>
          <Form.Input type="text" name="name" id="name" />
        </Form.Field>

        <Form.Field>
          <label htmlFor="email">E-mail</label>
          <Form.Input type="text" name="email" id="email" />
        </Form.Field>

        <Form.Field>
          <label htmlFor="github">Github profile</label>
          <Form.Input type="text" name="github" id="github" />
        </Form.Field>

        <Form.Button type="submit">Submit</Form.Button>
      </Form>
    </Segment>
  );
};

export default FirstForm;
