import React from 'react';
import Demo from './Icon20.demo';
import { ICONS } from '../../lib/Icon20/Icon20.constants';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title, UL } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import IconGrid from '../../components/IconGrid/IconGrid';
import { ICON20_PROPS } from './Icon20.constants';
import Icon20 from '../../lib/Icon20/Icon20';
import IconCard from '../../components/IconCard/IconCard';

const ButtonDemo = () => {
  return (
    <Wrapper>
      <Title>Icon20</Title>
      <Paragraph>
        This component renders an icon from the collection of 20x20 icons. The collection comes from
        the following sources:
      </Paragraph>
      <UL>
        <li>Entypo</li>
        <li>Eva Icons</li>
      </UL>
      <Paragraph>
        The icon is especially useful to render inside buttons (as the iconBefore and iconAfter
        props). It can also be used to render actions inline and when there is not much space
        available.
      </Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Icon20 } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={ICON20_PROPS} />
      <SubTitle id="icons">Icons</SubTitle>
      <IconGrid>
        {Object.keys(ICONS)
          .sort()
          .map((icon, index) => (
            <IconCard key={icon} label={icon} isLastInRow={(index + 1) % 5 === 0}>
              <Icon20 icon={icon} />
            </IconCard>
          ))}
      </IconGrid>
    </Wrapper>
  );
};

export default ButtonDemo;
