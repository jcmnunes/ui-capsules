import React from 'react';
import Demo from './Icon.demo';
import { icons } from '../../lib/Icon/Icon.constants';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import IconGrid from '../../components/IconGrid/IconGrid';
import { ICON_PROPS } from './Icon.constants';
import { Icon, Anchor, IconType } from '../../lib';
import IconCard from '../../components/IconCard/IconCard';

const ButtonDemo = () => {
  return (
    <Wrapper>
      <Title>Icon</Title>
      <Paragraph>
        Use this component to render an icon. Most of the available icons are from the{' '}
        <Anchor href="https://github.com/refactoringui/heroicons">Heroicons collection</Anchor>.
      </Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Icon } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={ICON_PROPS} />
      <SubTitle id="icons">Icons</SubTitle>
      <IconGrid>
        {(Object.keys(icons) as IconType[]).sort().map((icon, index) => (
          <IconCard key={icon} label={icon} isLastInRow={(index + 1) % 4 === 0}>
            <Icon icon={icon} />
          </IconCard>
        ))}
      </IconGrid>
    </Wrapper>
  );
};

export default ButtonDemo;
