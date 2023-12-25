import React, { useMemo, useState } from 'react';
import Demo from './Icon.demo';
import { solidIcons } from '../../lib/Icon/Icon.constants';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import { Main } from '../../components/common/Main';
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
    <Main>
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
        <Flex $justify="between" $align="end" css={{ marginTop: 12 }}>
          <SubTitle id="icons">Icons</SubTitle>

          <Flex $align="center" $gap={4} css="margin-bottom: 16px">
            <Icon icon="beaker" variant="solid" size={24} />
            <Switch
              checked={isOutline}
              onChange={evt => setIsOutline(evt.target.checked)}
              size="medium"
              css={{ marginLeft: 4, marginRight: 4 }}
            />
            <Icon icon="beaker" variant="outline" />
          </Flex>
        </Flex>

        <Box css={{ marginBottom: 16 }}>
          <Input
            value={iconFilter}
            onChange={evt => iconFilterSet(evt.target.value)}
            leftIcon="search"
            placeholder="Search"
            size="large"
          />
        </Box>

        <IconGrid>
          {(icons as IconType[]).sort().map(icon => (
            <IconCard key={icon} label={icon}>
              <Icon icon={icon} variant={isOutline ? 'outline' : 'solid'} />
            </IconCard>
          ))}
        </IconGrid>

        {icons.length === 0 && (
          <Flex $align="center" $justify="center" $direction="column">
            <Icon
              icon="emoji_sad"
              variant="outline"
              size={48}
              css={({ theme }) => ({ color: theme.colors.gray400, marginRight: 8 })}
            />
            <Text
              size="lg"
              css={({ theme }) => ({
                color: theme.colors.neutral400,
                textAlign: 'center',
                marginTop: 2,
              })}
            >
              {`No icons found for "${iconFilter}"`}
            </Text>
          </Flex>
        )}
      </section>
    </Main>
  );
};

export default ButtonDemo;
