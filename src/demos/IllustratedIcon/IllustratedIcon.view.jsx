import React from 'react';
import Demo from './IllustratedIcon.demo';
import { illustratedIcons } from '../../lib/IllustratedIcon/IllustratedIcon.constants';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import IconGrid from '../../components/IconGrid/IconGrid';
import { ILLUSTRATED_ICON_PROPS } from './IllustratedIcon.constants';
import { IllustratedIcon, Anchor } from '../../lib';
import IconCard from '../../components/IconCard/IconCard';

const IllustratedIconView = () => {
  return (
    <Wrapper>
      <Title>IllustratedIcon</Title>
      <Paragraph>
        This component renders an icon from the illustrated icons collection of{' '}
        <Anchor href="https://refactoringui.com/book/">RefactoringUI book</Anchor>.
      </Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { IllustratedIcon } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={ILLUSTRATED_ICON_PROPS} />
      <SubTitle id="icons">Icons</SubTitle>
      <IconGrid>
        {Object.keys(illustratedIcons)
          .sort()
          .map((icon, index) => (
            <IconCard key={icon} label={icon} isLastInRow={(index + 1) % 4 === 0}>
              <IllustratedIcon icon={icon} />
            </IconCard>
          ))}
      </IconGrid>
    </Wrapper>
  );
};

export default IllustratedIconView;
