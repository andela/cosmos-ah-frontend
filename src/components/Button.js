import React from 'react';
import { Button, Grid, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

export const ButtonComponent = ({
  type, color, size, children
}) => (
  <div>
    <Button type={type} color={color} size={size} fluid>{children}</Button>
  </div>
);
