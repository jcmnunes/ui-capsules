import React from 'react';
import Demo from './Menu.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import { Anchor } from '../../lib';

const MenuView = () => {
  return (
    <Wrapper as="main">
      <header>
        <Title>Menu</Title>
        <Paragraph>
          This component renders a dropdown menu. It is based on the{' '}
          <Anchor href="https://reach.tech/menu-button">MenuButton component</Anchor> from Reach UI.
        </Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { Menu, MenuItem } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <Demo />
    </Wrapper>
  );
};

export default MenuView;
