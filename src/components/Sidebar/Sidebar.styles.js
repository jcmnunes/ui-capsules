import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSidebar = styled.div`
  width: 256px;
  height: 100vh;
  padding: 48px 24px;
`;

export const SidebarLink = styled(NavLink).attrs({ activeClassName: 'active' })`
  font-size: 14px;
  font-weight: 500;
  height: 32px;
  border-radius: 4px;
  background: ${props => props.theme.neutral050};
  color: ${props => props.theme.neutral600};
  cursor: pointer;
  padding: 4px 12px;

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
  font-size: 12px;
  color: ${props => props.theme.colors.neutral['300']};
  margin-top: 16px;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  margin-left: 12px;
`;

export const SidebarGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -12px;
  padding-top: 24px;
`;
