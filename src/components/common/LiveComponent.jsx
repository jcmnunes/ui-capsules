import styled from 'styled-components';

export const LiveComponent = styled.div`
  border-radius: 12px;
  background-color: ${props => props.theme.neutral050};
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export default LiveComponent;
