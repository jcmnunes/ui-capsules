import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import Demo from '../common/Demo';
import Icon20 from '../../lib/Icon20/Icon20';
import { GITHUB_URL, ICON_OPTS } from './Icon20.constants';

const StyledSelect = styled.div`
  margin: 8px 0;
  max-width: 200px;
`;

const Icon20Demo = () => {
  const [icon, setIcon] = useState(ICON_OPTS[0]);

  const Component = <Icon20 icon={icon.value} />;

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <>
        <StyledSelect>
          <pre>icon</pre>
          <Select defaultValue={ICON_OPTS[0]} options={ICON_OPTS} onChange={opt => setIcon(opt)} />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default Icon20Demo;
