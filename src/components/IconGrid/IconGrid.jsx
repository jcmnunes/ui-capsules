import styled from 'styled-components';

const IconGrid = styled.div({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
  gap: 24,
});

export default IconGrid;
