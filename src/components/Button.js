import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

const Space = styled.div`
  margin: 30px;
`;

const AuthButton = () => (
    <Space>
        <Grid centered>
            <Button color='blue' size='large'>Continue</Button>
        </Grid>
  </Space>
);

export default AuthButton;
