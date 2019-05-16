import React from 'react';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';


const FormWrapper = styled(Form)`
  margin: 0 auto;
  &&& {
    input {
      background-color: #E8E8E8 !important;
      border: none !important;
    }
  }
`;

export const FormStyle = ({ onSubmit, loading, children }) => (
  <FormWrapper
    data-testid='forgotPassword'
    onSubmit={onSubmit}
    loading={loading}
  >{children}
  </FormWrapper>
);


export const InputField = ({
  size, placeholder, type, name, onChange, value, iconPosition, icon,
  actionIcon, onClick
}) => (
    <Form.Input
      size={size}
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      iconPosition={iconPosition}
      icon={icon}
      action={{ icon: actionIcon, onClick }}
    />
);
