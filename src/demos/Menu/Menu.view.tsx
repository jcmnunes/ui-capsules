import React from 'react';
import { Link } from 'react-router-dom';
import Demo from './Menu.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title, UL } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Menu.constants';
import { Button } from '../../lib';

const MenuView = () => {
  return (
    <Wrapper>
      <Title>Menu</Title>
      <Paragraph>
        This component renders a dropdown menu. Pass the trigger for the menu as the
        &quot;trigger&quot; prop. Render a list of MenuItems components as children. MenuItem
        receives the following props:
      </Paragraph>
      <UL>
        <li>
          <code>text</code>: &quot;string&quot; - The text to render
        </li>
        <li>
          <code>icon</code>: &quot;string&quot; - The icon to render before the text (from the{' '}
          <Link to="/illustrated-icon">
            <Button variant="link">IllustratedIcon collection</Button>
          </Link>
          )
        </li>
        <li>
          <code>closeOnAction</code>: &quot;boolean&quot; (default: true) - Whether the menu should
          close after triggering the item action
        </li>
        <li>
          <code>handleAction</code>: &quot;function&quot; (required) - The function to be called on
          action triggered (when clicking or Enter keydown in an item).
        </li>
      </UL>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Menu, MenuItem } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default MenuView;
