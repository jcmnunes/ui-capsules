import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home/Home';
import Button from './demos/Button/Button.view';
import Icon20 from './demos/Icon20/Icon20.view';
import Checkbox from './demos/Checkbox/Checkbox.view';
import Select from './demos/Select/Select.view';
import Input from './demos/Input/Input.view';
import Toaster from './demos/Toaster/Toaster.view';
import Dropdown from './demos/Dropdown/Dropdown.view';
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
      <Route exact path="/" component={Home} />
      <Route path="/button" component={Button} />
      <Route path="/icon20" component={Icon20} />
      <Route path="/checkbox" component={Checkbox} />
      <Route path="/select" component={Select} />
      <Route path="/input" component={Input} />
      <Route path="/toaster" component={Toaster} />
      <Route path="/dropdown" component={Dropdown} />
    </ShowcaseWrapper>
  </AppWrapper>
);

export default App;
