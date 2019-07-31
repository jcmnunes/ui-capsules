import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarLink = styled(NavLink).attrs({ activeClassName: 'active' })`
  height: 32px;
  border-radius: 4px;
  background: ${props => props.theme.neutral050};
  color: ${props => props.theme.neutral600};
  cursor: pointer;
  padding: 6px 12px;
  transition: background 0.2s ease;

  &:hover {
    background: ${props => props.theme.neutral100};
  }

  &.active {
    background: ${props => props.theme.neutral075};
    font-weight: 600;

    &:hover {
      background: ${props => props.theme.neutral100};
    }
  }
`;

export default SidebarLink;
