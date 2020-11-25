import React, { useMemo, useState } from 'react';
import Demo from './IconSolid.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import IconGrid from '../../components/IconGrid/IconGrid';
import { ICON_PROPS } from './IconSolid.constants';
import { Anchor, Box, Flex, Icon, IconSolidType, Input, Text } from '../../lib';
import IconCard from '../../components/IconCard/IconCard';
import { solidIcons } from '../../lib/IconSolid/IconSolid.constants';
import { IconSolid } from '../../lib/IconSolid/IconSolid';

const ButtonDemo = () => {
  const [iconFilter, iconFilterSet] = useState('');

  const icons = useMemo(() => {
    const iconNames = Object.keys(solidIcons);

    return iconNames.filter(name => name.startsWith(iconFilter.toLowerCase()));
  }, [iconFilter]);

  return (
    <Wrapper>
      <Title>IconSolid</Title>
      <Paragraph>
        Use this component to render a solid icon. Most of the available icons are from the{' '}
        <Anchor href="https://github.com/refactoringui/heroicons">Heroicons collection</Anchor>.
      </Paragraph>

      <SubTitle>Usage</SubTitle>
      <Usage>{"import { IconSolid } from '@binarycapsule/ui-capsules';"}</Usage>

      <Demo />

      <SubTitle>Props</SubTitle>
      <PropsTable props={ICON_PROPS} />

      <SubTitle id="icons">Icons</SubTitle>

      <Box mb="24">
        <Input
          value={iconFilter}
          onChange={evt => iconFilterSet(evt.target.value)}
          iconBefore="search"
          placeholder="Search"
          inputSize="large"
        />
      </Box>

      <IconGrid>
        {(icons as IconSolidType[]).sort().map((icon, index) => (
          <IconCard key={icon} label={icon} isLastInRow={(index + 1) % 4 === 0}>
            <IconSolid icon={icon} />
          </IconCard>
        ))}
      </IconGrid>

      {icons.length === 0 && (
        <Flex alignItems="center" justifyContent="center" flexDirection="column">
          <Icon icon="emoji_sad" mr="8" color="neutral.400" size="48px" />
          <Text fontSize="h6" color="neutral.400" textAlign="center" mt="2">
            {`No icons found for "${iconFilter}"`}
          </Text>
        </Flex>
      )}
    </Wrapper>
  );
};

export default ButtonDemo;
