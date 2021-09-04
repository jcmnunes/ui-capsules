import React from 'react';
import { IllustratedIcon, Anchor, IllustratedIconType } from '../../lib';
import Demo from './IllustratedIcon.demo';
import { illustratedIcons } from '../../lib/IllustratedIcon/IllustratedIcon.constants';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import IconGrid from '../../components/IconGrid/IconGrid';
import { ILLUSTRATED_ICON_PROPS } from './IllustratedIcon.constants';
import IconCard from '../../components/IconCard/IconCard';

const IllustratedIconView = () => {
  return (
    <Wrapper as="main">
      <header>
        <Title>IllustratedIcon</Title>
        <Paragraph>
          This component renders an icon from the illustrated icons collection of{' '}
          <Anchor href="https://refactoringui.com/book/">RefactoringUI book</Anchor>.
        </Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { IllustratedIcon } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <Demo />

      <section>
        <SubTitle>Props</SubTitle>
        <PropsTable props={ILLUSTRATED_ICON_PROPS} />
      </section>

      <section>
        <SubTitle id="icons">Icons</SubTitle>
        <IconGrid>
          {(Object.keys(illustratedIcons) as IllustratedIconType[]).sort().map((icon, index) => (
            <IconCard key={icon} label={icon} isLastInRow={(index + 1) % 4 === 0}>
              <IllustratedIcon icon={icon} />
            </IconCard>
          ))}
        </IconGrid>
      </section>
    </Wrapper>
  );
};

export default IllustratedIconView;
