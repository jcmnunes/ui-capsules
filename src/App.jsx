import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home/Home';
import Alert from './demos/Alert/Alert.view';
import Button from './demos/Button/Button.view';
import IllustratedIcon from './demos/IllustratedIcon/IllustratedIcon.view';
import Icon from './demos/Icon/Icon.view';
import IconSolid from './demos/IconSolid/IconSolid.view';
import Checkbox from './demos/Checkbox/Checkbox.view';
import Select from './demos/Select/Select.view';
import Input from './demos/Input/Input.view';
import Toaster from './demos/Toaster/Toaster.view';
import Menu from './demos/Menu/Menu.view';
import Skeleton from './demos/Skeleton/Skeleton.view';
import Spinner from './demos/Spinner/Spinner.view';
import Splash from './demos/Splash/Splash.view';
import Radio from './demos/Radio/Radio.view';
import Tooltip from './demos/Tooltip/Tooltip.view';
import EditableInput from './demos/EditableInput/EditableInput.view';
import Modal from './demos/Modal/Modal.view';
import Dialog from './demos/Dialog/Dialog.view';
import Anchor from './demos/Anchor/Anchor.view';
import IconButton from './demos/IconButton/IconButton.view';
import Table from './demos/Table/Table.view';
import Switch from './demos/Switch/Switch.view';
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
      <Route exact path="/" render={() => <Redirect to="/getting-started" />} />
      <Route path="/getting-started" component={Home} />

      <Route path="/alert" component={Alert} />
      <Route path="/anchor" component={Anchor} />
      <Route path="/button" component={Button} />
      <Route path="/checkbox" component={Checkbox} />
      <Route path="/dialog" component={Dialog} />
      <Route path="/editable-input" component={EditableInput} />
      <Route path="/icon" component={Icon} />
      <Route path="/icon-button" component={IconButton} />
      <Route path="/icon-solid" component={IconSolid} />
      <Route path="/illustrated-icon" component={IllustratedIcon} />
      <Route path="/input" component={Input} />
      <Route path="/menu" component={Menu} />
      <Route path="/modal" component={Modal} />
      <Route path="/splash" component={Splash} />
      <Route path="/radio" component={Radio} />
      <Route path="/select" component={Select} />
      <Route path="/skeleton" component={Skeleton} />
      <Route path="/spinner" component={Spinner} />
      <Route path="/switch" component={Switch} />
      <Route path="/table" component={Table} />
      <Route path="/toaster" component={Toaster} />
      <Route path="/tooltip" component={Tooltip} />
    </ShowcaseWrapper>
  </AppWrapper>
);

export default App;
