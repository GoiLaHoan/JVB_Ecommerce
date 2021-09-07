import React from 'react';
import styled from 'styled-components';
import { AccountBox } from '../components/AccountBox';
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 70px 0px;
`;

function SignIn() {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
}

export default SignIn;