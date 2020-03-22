import React from 'react';
import Demo from './Icon24.demo';
import { ICONS } from '../../lib/Icon24/Icon24.constants';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import IconGrid from '../../components/IconGrid/IconGrid';
import { ICON24_PROPS } from './Icon24.constants';
import { Icon24 } from '../../lib/Icon24/Icon24';
import IconCard from '../../components/IconCard/IconCard';

const Icon24View = () => {
  return (
    <Wrapper>
      <Title>Icon24</Title>
      <Paragraph>This component renders an icon from the 24x24 collection.</Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Icon } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={ICON24_PROPS} />
      <SubTitle id="icons">Icons</SubTitle>
      <IconGrid>
        {Object.keys(ICONS)
          .sort()
          .map((icon, index) => (
            <IconCard key={icon} label={icon} isLastInRow={(index + 1) % 5 === 0}>
              <Icon24 icon={icon} />
            </IconCard>
          ))}
      </IconGrid>
    </Wrapper>
  );
};

export default Icon24View;
