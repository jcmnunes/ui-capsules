import styled from 'styled-components';

const ComponentDisplay = styled.div`
  background: white;
  border-radius: 8px;
  width: ${props => props.width};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

export default ComponentDisplay;
