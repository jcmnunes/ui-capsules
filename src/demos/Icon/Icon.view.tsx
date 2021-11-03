import React, { useMemo, useState } from 'react';
import Demo from './Icon.demo';
import { solidIcons } from '../../lib/Icon/Icon.constants';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import IconGrid from '../../components/IconGrid/IconGrid';
import { ICON_PROPS } from './Icon.constants';
import { Anchor, Box, Flex, Icon, IconType, Input, Switch, Text } from '../../lib';
import IconCard from '../../components/IconCard/IconCard';

const ButtonDemo = () => {
  const [isOutline, setIsOutline] = useState(false);
  const [iconFilter, iconFilterSet] = useState('');

  const icons = useMemo(() => {
    const iconNames = Object.keys(solidIcons);

    return iconNames.filter(name => name.startsWith(iconFilter.toLowerCase()));
  }, [iconFilter]);

  return (
    <Wrapper as="main">
      <header>
        <Title>Icon</Title>
        <Paragraph>
          Use this component to render an icon. Most of the available icons are from the{' '}
          <Anchor href="https://github.com/refactoringui/heroicons">Heroicons collection</Anchor>.
        </Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { Icon } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <Demo />

      <PropsTable props={ICON_PROPS} />

      <section>
        <Flex justify="between" css={{ mt: '$3' }}>
          <SubTitle id="icons">Icons</SubTitle>

          <Flex align="center">
            <Icon icon="beaker" variant="solid" size={24} />
            <Switch
              checked={isOutline}
              onChange={checked => setIsOutline(checked)}
              size="medium"
              css={{ mx: '$1' }}
            />
            <Icon icon="beaker" variant="outline" />
          </Flex>
        </Flex>

        <Box css={{ mb: '$4' }}>
          <Input
            value={iconFilter}
            onChange={evt => iconFilterSet(evt.target.value)}
            leftIcon="search"
            placeholder="Search"
            size="large"
          />
        </Box>

        <IconGrid>
          {(icons as IconType[]).sort().map((icon, index) => (
            <IconCard key={icon} label={icon} isLastInRow={(index + 1) % 4 === 0}>
              <Icon icon={icon} variant={isOutline ? 'outline' : 'solid'} />
            </IconCard>
          ))}
        </IconGrid>

        {icons.length === 0 && (
          <Flex align="center" justify="center" direction="column">
            <Icon
              icon="emoji_sad"
              variant="outline"
              size={48}
              css={{ color: '$gray400', mr: '$2' }}
            />
            <Text css={{ fontSize: '$3', color: '$neutral400', textAlign: 'center', mt: 2 }}>
              {`No icons found for "${iconFilter}"`}
            </Text>
          </Flex>
        )}
      </section>
    </Wrapper>
  );
};

export default ButtonDemo;
