import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Alert from './demos/Alert/Alert.view';
import Button from './demos/Button/Button.view';
import IllustratedIcon from './demos/IllustratedIcon/IllustratedIcon.view';
import Icon from './demos/Icon/Icon.view';
import Checkbox from './demos/Checkbox/Checkbox.view';
import Input from './demos/Input/Input.view';
import Toaster from './demos/Toaster/Toaster.view';
import Skeleton from './demos/Skeleton/Skeleton.view';
import Spinner from './demos/Spinner/Spinner.view';
import Splash from './demos/Splash/Splash.view';
import Select from './demos/Select/Select.view';
import Radio from './demos/Radio/Radio.view';
import RadioPicker from './demos/RadioPicker/RadioPicker.view';
import Tooltip from './demos/Tooltip/Tooltip.view';
import EditableInput from './demos/EditableInput/EditableInput.view';
import Modal from './demos/Modal/Modal.view';
import Dialog from './demos/Dialog/Dialog.view';
import Anchor from './demos/Anchor/Anchor.view';
import IconButtonView from './demos/IconButton/IconButton.view';
import Table from './demos/Table/Table.view';
import Text from './demos/Text/Text.view';
import SwitchView from './demos/Switch/Switch.view';
import TruncatedText from './demos/TruncatedText/TruncatedText.view';
import Sidebar from './components/Sidebar/Sidebar';
import { styled } from './lib/stitches.config';
import { Flex, IconButton } from './lib';
import { lightTheme } from './lib/lightTheme';
import { darkTheme } from './lib/darkTheme';
import { globalCss } from '@stitches/react';
import { useLocalStorage } from './hooks/useLocalStorage';

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

const globalStyles = globalCss({
  body: { color: '$neutral700' },
});

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const isDarkTheme = theme === 'dark';

  useEffect(() => {
    document.body.classList.remove(isDarkTheme ? lightTheme : darkTheme);
    document.body.classList.add(isDarkTheme ? darkTheme : lightTheme);
  }, [isDarkTheme]);

  globalStyles();

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>

      <ShowcaseWrapper>
        <Flex justify="end" css={{ width: 600 }}>
          <IconButton
            icon={isDarkTheme ? 'moon' : 'sun'}
            variant="ghostGray"
            onClick={() => setTheme(isDarkTheme ? 'light' : 'dark')}
            aria-label="Change theme"
          />
        </Flex>

        <Route exact path="/" render={() => <Redirect to="/getting-started" />} />
        <Route path="/getting-started" component={Home} />

        <Route path="/alert" component={Alert} />
        <Route path="/anchor" component={Anchor} />
        <Route path="/button" component={Button} />
        <Route path="/checkbox" component={Checkbox} />
        <Route path="/dialog" component={Dialog} />
        <Route path="/editable-input" component={EditableInput} />
        <Route path="/icon" component={Icon} />
        <Route path="/icon-button" component={IconButtonView} />
        <Route path="/illustrated-icon" component={IllustratedIcon} />
        <Route path="/input" component={Input} />
        {/*<Route path="/menu" component={Menu} />*/}
        <Route path="/modal" component={Modal} />
        <Route path="/splash" component={Splash} />
        <Route path="/radio" component={Radio} />
        <Route path="/radio-picker" component={RadioPicker} />
        <Route path="/select" component={Select} />
        <Route path="/skeleton" component={Skeleton} />
        <Route path="/spinner" component={Spinner} />
        <Route path="/switch" component={SwitchView} />
        <Route path="/table" component={Table} />
        <Route path="/text" component={Text} />
        <Route path="/toaster" component={Toaster} />
        <Route path="/truncated-text" component={TruncatedText} />
        <Route path="/tooltip" component={Tooltip} />
      </ShowcaseWrapper>
    </div>
  );
};

export default App;
