import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

const Space = styled.div`
  margin: 35px;
`;

export const AuthButton = () => (
    <Space>
        <Grid centered>
            <Button color='blue' size='big'>Continue</Button>
        </Grid>
  </Space>
);


export const ButtonComponent = ({ type, text }) => (
  <div>
    <Button type={type} >{text}</Button>
  </div>
);
