import React from 'react';
import Demo from './Menu.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title, UL } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Menu.constants';

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
          <code>text</code>: &quot;string&quot; (required) - The text to render
        </li>
        <li>
          <code>onClick</code>: &quot;function&quot; (required) - The function to be called on
          action triggered (when clicking or Enter keydown in an item).
        </li>
        <li>
          <code>helperText</code>: &quot;string&quot; - An optional helper text
        </li>
        <li>
          <code>leftIcon</code>: &quot;string&quot; - An icon to render before text
        </li>
        <li>
          <code>rightIcon</code>: &quot;string&quot; - An icon to render after the text
        </li>
        <li>
          <code>leftAddon</code>: &quot;React Element&quot; - An addon to render before the text
        </li>
        <li>
          <code>rightAddon</code>: &quot;ReactElement&quot; - An addon to render after the text
        </li>
        <li>
          <code>closeOnAction</code>: &quot;boolean&quot; (default: true) - Whether the menu should
          close after triggering the item action
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
