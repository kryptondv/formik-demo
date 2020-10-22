import React from 'react';
import { Message } from 'semantic-ui-react';

const ErrorText = ({ children }) => {
  return (
    <Message negative visible size="mini">
        {children}
      </Message>
  );
}

export default ErrorText;
