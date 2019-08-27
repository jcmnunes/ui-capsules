import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import theme from '../theme';

const getColors = props => {
  switch (props.appearance) {
    case 'primary':
    case 'success':
    case 'warning':
    case 'error':
      return {
        border: '#FFFFFF32',
        accent: '#FFF',
      };
    default:
      return {
        border: theme.neutral100,
        accent: theme.neutral200,
      };
  }
};

const spin = keyframes`
  100% { 
    transform: rotate(360deg); 
  } 
`;

const Spinner = styled.span`
  display: inline-block;
  box-sizing: border-box;
  width: ${props =>
    (props.size === 'small' && '14px') ||
    (props.size === 'medium' && '18px') ||
    (props.size === 'large' && '24px')};
  height: ${props =>
    (props.size === 'small' && '14px') ||
    (props.size === 'medium' && '18px') ||
    (props.size === 'large' && '24px')};
  border-radius: 100%;
  border: ${props => `3px solid ${getColors(props).border}`};
  border-top-color: ${props => getColors(props).accent};
  animation: ${spin} 500ms infinite linear;
`;
Spinner.displayName = 'Spinner';

Spinner.defaultProps = {
  size: 'small',
  appearance: 'neutral',
};

Spinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  appearance: PropTypes.oneOf([
    'primary',
    'success',
    'warning',
    'error',
    'secondary',
    'neutral',
    'minimal',
  ]),
};

export default Spinner;
