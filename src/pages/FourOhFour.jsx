import React from 'react';
import styled from 'styled-components';


const CardContentContainer = styled.div`
    padding-top: 300px;
    padding-left: 500px;
    font-size: 70px;
`;

export const FourOhFour = () => (
    <CardContentContainer>
        <h1>404</h1>
        <h2>NOT FOUND</h2>
    </CardContentContainer>
);
