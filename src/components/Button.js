import React from 'react';
import { Button } from 'semantic-ui-react';


const ButtonComponent = ({ type, text }) => (
  <div>
    <Button type={type} >{text}</Button>
  </div>
);

export default ButtonComponent;
