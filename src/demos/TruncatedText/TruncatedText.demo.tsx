import React, { useState } from 'react';
import { Box, Checkbox, TruncatedText, Text } from '../../lib';
import Demo, { Booleans } from '../../components/Demo/Demo';
import { GITHUB_URL } from './TruncatedText.constants';

const shortText = 'Lorem ipsum';
const longText = 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.';

const TruncatedTextDemo = () => {
  const [isLongText, setIsLongText] = useState(false);

  const Component = (
    <Box css={{ width: 200 }}>
      <TruncatedText>{isLongText ? longText : shortText}</TruncatedText>
    </Box>
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Booleans>
        <Checkbox checked={isLongText} onChange={() => setIsLongText(!isLongText)}>
          <Text variant="label">Long text</Text>
        </Checkbox>

        <Text variant="helper">Notice how a tooltip is shown only when the text is truncated.</Text>
      </Booleans>
    </Demo>
  );
};

export default TruncatedTextDemo;
