import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSidebar = styled.div`
  width: 256px;
  height: 100vh;
  padding: 48px 24px;
`;

export const SidebarLink = styled(NavLink).attrs({ activeClassName: 'active' })`
  font-size: 16px;
  height: 32px;
  border-radius: 4px;
  background: ${props => props.theme.neutral050};
  color: ${props => props.theme.neutral600};
  cursor: pointer;
  padding: 3px 12px;

  &:hover {
    background: ${props => props.theme.neutral075};
  }

  &.active {
    background: ${props => props.theme.neutral075};
    font-weight: 600;
    color: ${props => props.theme.pink700};

    &:hover {
      background: ${props => props.theme.neutral075};
    }
  }
`;

export const GroupHeading = styled.h2`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  color: ${props => props.theme.neutral300};
  margin: 16px 0 8px 0;
`;

export const SidebarGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
