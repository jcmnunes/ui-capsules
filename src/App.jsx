/* eslint-disable no-alert */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import AlertView from './demos/Alert/Alert.view';
import AnchorView from './demos/Anchor/Anchor.view';
import ButtonView from './demos/Button/Button.view';
import CheckboxView from './demos/Checkbox/Checkbox.view';
import DialogView from './demos/Dialog/Dialog.view';
import EditableInputView from './demos/EditableInput/EditableInput.view';
import HomeView from './components/Home/Home';
import IconButtonView from './demos/IconButton/IconButton.view';
import IconView from './demos/Icon/Icon.view';
import IllustratedIconView from './demos/IllustratedIcon/IllustratedIcon.view';
import InputView from './demos/Input/Input.view';
import MenuView from './demos/Menu/Menu.view';
import ModalView from './demos/Modal/Modal.view';
import RadioPickerView from './demos/RadioPicker/RadioPicker.view';
import RadioView from './demos/Radio/Radio.view';
import SelectView from './demos/Select/Select.view';
import SkeletonView from './demos/Skeleton/Skeleton.view';
import SpinnerView from './demos/Spinner/Spinner.view';
import SplashView from './demos/Splash/Splash.view';
import SwitchView from './demos/Switch/Switch.view';
import TableView from './demos/Table/Table.view';
import TextView from './demos/Text/Text.view';
import ToastView from './demos/Toast/Toast.view';
import TooltipView from './demos/Tooltip/Tooltip.view';
import TruncatedTextView from './demos/TruncatedText/TruncatedText.view';
import Sidebar from './components/Sidebar/Sidebar';
import { styled } from './lib/stitches.config';
import { Flex, IconButton, useTheme, useGlobalStyles } from './lib';

export const SidebarWrapper = styled('div', {
  flex: 2,
  background: '$neutral100',
  border: `1px solid $neutral200`,
  display: 'flex',
  justifyContent: 'flex-end',
});

export const ShowcaseWrapper = styled('div', {
  flex: 3,
  padding: '32px 64px 64px',
  background: '$bg',
});

const App = () => {
  useGlobalStyles();

  const { isDark, setTheme } = useTheme();

  return (
    <Flex>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>

      <ShowcaseWrapper>
        <Flex justify="end" css={{ width: 600 }}>
          <IconButton
            icon={isDark ? 'moon' : 'sun'}
            variant="ghostGray"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label="Change theme"
          />
        </Flex>

        <Route exact path="/" render={() => <Redirect to="/getting-started" />} />
        <Route path="/getting-started" component={HomeView} />

        <Route path="/alert" component={AlertView} />
        <Route path="/anchor" component={AnchorView} />
        <Route path="/button" component={ButtonView} />
        <Route path="/checkbox" component={CheckboxView} />
        <Route path="/dialog" component={DialogView} />
        <Route path="/editable-input" component={EditableInputView} />
        <Route path="/icon" component={IconView} />
        <Route path="/icon-button" component={IconButtonView} />
        <Route path="/illustrated-icon" component={IllustratedIconView} />
        <Route path="/input" component={InputView} />
        <Route path="/menu" component={MenuView} />
        <Route path="/modal" component={ModalView} />
        <Route path="/radio" component={RadioView} />
        <Route path="/radio-picker" component={RadioPickerView} />
        <Route path="/select" component={SelectView} />
        <Route path="/skeleton" component={SkeletonView} />
        <Route path="/spinner" component={SpinnerView} />
        <Route path="/splash" component={SplashView} />
        <Route path="/switch" component={SwitchView} />
        <Route path="/table" component={TableView} />
        <Route path="/text" component={TextView} />
        <Route path="/toast" component={ToastView} />
        <Route path="/tooltip" component={TooltipView} />
        <Route path="/truncated-text" component={TruncatedTextView} />
      </ShowcaseWrapper>
    </Flex>
  );
};

export default App;
