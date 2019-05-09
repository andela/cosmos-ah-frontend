import React from 'react';
import { Button } from 'semantic-ui-react';

export const ButtonComponent = ({
  type, color, size, children
}) => (
  <div>
    <Button type={type} color={color} size={size} fluid>{children}</Button>
  </div>
);
