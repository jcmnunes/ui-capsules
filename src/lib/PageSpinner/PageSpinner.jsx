import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spinner from '../Spinner/Spinner';
import theme from '../theme';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${theme.neutral050};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const StyledSpinner = styled(Spinner)`
  margin: 18px 0;
`;

const LargeText = styled.div`
  color: ${theme.neutral400};
  font-size: 32px;
  font-weight: 700;
`;

const PageSpinner = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'initial';
    };
  }, []);
  return (
    <Container>
      {typeof children === 'string' ? <LargeText>{children}</LargeText> : children}
      <StyledSpinner size="large" />
    </Container>
  );
};
PageSpinner.displayName = 'PageSpinner';

PageSpinner.defaultProps = {
  children: null,
};

PageSpinner.propTypes = {
  children: PropTypes.node,
};

export default PageSpinner;
