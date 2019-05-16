import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const StyledButton = styled(Button)`
  width: ${props => props.width};
`;

export const ButtonComponent = ({
  type, color, size, children, fluid, width
}) => (
  <div>
    <StyledButton type={type} color={color} size={size} fluid={fluid} width={width}>
      {children}
    </StyledButton>
  </div>
);
