import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import HomeComponent from './components/HomeComponent/HomeComponent';
import Button from './components/Button/Button.view';
import Icon20 from './components/Icon20/Icon20.view';
import Sidebar from './components/Sidebar/Sidebar';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SidebarWrapper = styled.div`
  flex: 2;
  background: ${props => props.theme.neutral050};
  display: flex;
  justify-content: flex-end;
`;

export const ShowcaseWrapper = styled.div`
  flex: 3;
  padding: 64px;
`;

const App = () => (
  <AppWrapper>
    <SidebarWrapper>
      <Sidebar />
    </SidebarWrapper>
    <ShowcaseWrapper>
      <Route exact path="/" component={HomeComponent} />
      <Route path="/button" component={Button} />
      <Route path="/icon20" component={Icon20} />
    </ShowcaseWrapper>
  </AppWrapper>
);

export default App;
