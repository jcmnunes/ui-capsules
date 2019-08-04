import styled from 'styled-components';

export const DemoWrapper = styled.div`
  border-radius: 12px;
  background-color: ${props => props.theme.neutral050};
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const Display = styled.div`
  background: white;
  border-radius: 8px;
  width: ${props => props.width};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

export const PropAdjuster = styled.div`
  flex: 1;
  padding: 0 48px 0 18px;
`;

export const ActionsBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
