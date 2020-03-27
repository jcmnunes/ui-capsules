import React from 'react';
import Demo from './Iconis.demo';
import { ICONIS } from '../../lib/Iconis/Iconis.constants';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import IconGrid from '../../components/IconGrid/IconGrid';
import { ICONIS_PROPS } from './Iconis.constants';
import { Iconis } from '../../lib/Iconis/Iconis';
import IconCard from '../../components/IconCard/IconCard';
import { Anchor } from '../../lib';

const IconisView = () => {
  return (
    <Wrapper>
      <Title>Iconis</Title>
      <Paragraph>
        This component renders an icon from the illustrated icons collection of{' '}
        <Anchor href="https://refactoringui.com/book/">RefactoringUI book</Anchor>.
      </Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Iconis } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={ICONIS_PROPS} />
      <SubTitle id="icons">Icons</SubTitle>
      <IconGrid>
        {Object.keys(ICONIS)
          .sort()
          .map((icon, index) => (
            <IconCard key={icon} label={icon} isLastInRow={(index + 1) % 4 === 0}>
              <Iconis icon={icon} />
            </IconCard>
          ))}
      </IconGrid>
    </Wrapper>
  );
};

export default IconisView;
