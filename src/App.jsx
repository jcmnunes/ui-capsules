import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home/Home';
import Button from './demos/Button/Button.view';
import Iconis from './demos/Iconis/Iconis.view';
import Icon from './demos/Icon/Icon.view';
import Checkbox from './demos/Checkbox/Checkbox.view';
import Select from './demos/Select/Select.view';
import Input from './demos/Input/Input.view';
import Toaster from './demos/Toaster/Toaster.view';
import Dropdown from './demos/Dropdown/Dropdown.view';
import LoadingElement from './demos/LoadingMask/LoadingMask.view';
import Spinner from './demos/Spinner/Spinner.view';
import Message from './demos/Message/Message.view';
import PageSpinner from './demos/PageSpinner/PageSpinner.view';
import Radio from './demos/Radio/Radio.view';
import Tooltip from './demos/Tooltip/Tooltip.view';
import EditableInput from './demos/EditableInput/EditableInput.view';
import Modal from './demos/Modal/Modal.view';
import Dialog from './demos/Dialog/Dialog.view';
import Anchor from './demos/Anchor/Anchor.view';
import IconButton from './demos/IconButton/IconButton.view';
import Table from './demos/Table/Table.view';
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
      <Route path="/icon-button" component={IconButton} />
      <Route path="/iconis" component={Iconis} />
      <Route path="/icon" component={Icon} />
      <Route path="/checkbox" component={Checkbox} />
      <Route path="/select" component={Select} />
      <Route path="/input" component={Input} />
      <Route path="/toaster" component={Toaster} />
      <Route path="/dropdown" component={Dropdown} />
      <Route path="/loading-mask" component={LoadingElement} />
      <Route path="/spinner" component={Spinner} />
      <Route path="/message" component={Message} />
      <Route path="/page-spinner" component={PageSpinner} />
      <Route path="/radio" component={Radio} />
      <Route path="/tooltip" component={Tooltip} />
      <Route path="/editable-input" component={EditableInput} />
      <Route path="/modal" component={Modal} />
      <Route path="/dialog" component={Dialog} />
      <Route path="/anchor" component={Anchor} />
      <Route path="/table" component={Table} />
    </ShowcaseWrapper>
  </AppWrapper>
);

export default App;
