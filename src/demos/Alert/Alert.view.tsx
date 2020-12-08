/* eslint-disable no-alert */
import React from 'react';
import { Alert, Box } from '../../lib';
import Demo from './Alert.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Alert.constants';
import { AlertVariant } from '../../lib/Alert/Alert.styles';

const AlertDemo = () => {
  return (
    <Wrapper>
      <Title>Alert</Title>
      <Paragraph>
        Use it to display themed messages to the user (info, errors, warnings, and success
        messages).
      </Paragraph>

      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Alert } from '@binarycapsule/ui-capsules';"}</Usage>

      <SubTitle>All</SubTitle>
      <Box>
        {['info', 'success', 'warning', 'error'].map(variant => (
          <Alert
            key={variant}
            variant={variant as AlertVariant}
            title="Adipiscing Malesuada Inceptos"
            message="Etiam porta sem malesuada magna mollis euismod."
            extraAction={{
              text: 'Extra action',
              action() {
                alert('Extra action');
              },
            }}
            onRequestClose={() => alert('onRequestClose')}
            actions={[
              {
                text: 'Action 1',
                action() {
                  alert('Action 1');
                },
              },
              {
                text: 'Action 2',
                action() {
                  alert('Action 2');
                },
              },
            ]}
            mb="32"
          />
        ))}
      </Box>

      <Demo />

      <SubTitle>Props</SubTitle>
      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default AlertDemo;
