import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledSidebar = styled.div`
  width: 256px;
  height: 100vh;
  padding: 48px 24px;
`;

export const StyledSidebarLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  height: 32px;
  border-radius: 4px;
  background: ${props => props.theme.colors.neutral['50']};
  color: ${props => props.theme.colors.neutral['600']};
  cursor: pointer;
  padding: 4px 12px;

  &:hover {
    background: ${props => props.theme.colors.neutral['100']};
  }

  &.active {
    background: ${props => props.theme.colors.neutral['100']};
    font-weight: 600;
    color: ${props => props.theme.colors.pink['700']};

    &:hover {
      background: ${props => props.theme.colors.neutral['100']};
    }
  }
`;

export const SidebarLink = props => <StyledSidebarLink activeClassName="active" {...props} />;

export const SidebarGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -12px;
  padding-top: 24px;
`;
