import React from 'react';

const Form = () => {
  return (
    <form>

      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name"/>

      <label htmlFor="email">E-mail</label>
      <input type="text" name="email" id="email"/>

      <label htmlFor="github">Github profile</label>
      <input type="text" name="github" id="github"/>

    </form>
  );
}

export default Form;
