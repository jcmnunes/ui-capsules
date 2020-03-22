import React from 'react';
import Demo from './Icon16.demo';
import { ICONS } from '../../lib/Icon16/Icon16.constants';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import IconGrid from '../../components/IconGrid/IconGrid';
import { ICON16_PROPS } from './Icon16.constants';
import { Icon16 } from '../../lib/Icon16/Icon16';
import IconCard from '../../components/IconCard/IconCard';

const ButtonDemo = () => {
  return (
    <Wrapper>
      <Title>Icon16</Title>
      <Paragraph>
        This component renders an icon from the 16x16 icon collection. The collection comes from the
        BlueprintJS UI kit.
      </Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Icon16 } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={ICON16_PROPS} />
      <SubTitle id="icons">Icons</SubTitle>
      <IconGrid>
        {Object.keys(ICONS)
          .sort()
          .map((icon, index) => (
            <IconCard key={icon} label={icon} isLastInRow={(index + 1) % 5 === 0}>
              <Icon16 icon={icon} />
            </IconCard>
          ))}
      </IconGrid>
    </Wrapper>
  );
};

export default ButtonDemo;
