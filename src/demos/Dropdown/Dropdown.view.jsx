import React from 'react';
import Demo from './Dropdown.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title, UL } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Dropdown.constants';

const DropdownDemo = () => {
  return (
    <Wrapper>
      <Title>Dropdown</Title>
      <Paragraph>
        This component renders a dropdown. Pass the trigger for the dropdown as the
        &quot;trigger&quot; prop. Render a list of DropdownItem components as children. DropdownItem
        receives the following props:
      </Paragraph>
      <UL>
        <li>
          <code>children</code>: &quot;string&quot; - The text to render
        </li>
        <li>
          <code>iconBefore</code>: &quot;string&quot; - The icon to render before the text (from the
          Icon20 collection)
        </li>
        <li>
          <code>iconAfter</code>: &quot;string&quot; - The icon to render after the text (from the
          Icon20 collection)
        </li>
        <li>
          <code>closeOnAction</code>: &quot;boolean&quot; (default: true) - Whether dropdown should
          close after triggering the item action
        </li>
        <li>
          <code>handleAction</code>: &quot;function&quot; (required) - The function to be called on
          action triggered (when clicking or Enter keydown in an item).
        </li>
      </UL>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Dropdown, DropdownItem } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default DropdownDemo;
