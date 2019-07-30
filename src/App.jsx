import React from 'react';
import styled from 'styled-components';
import Button from './lib/Button/Button';

export const StyledApp = styled.div`
  padding: 32px;
`;

const App = () => (
  <StyledApp>
    <Button intent="primary" size="medium">
      Test
    </Button>
  </StyledApp>
);

export default App;
