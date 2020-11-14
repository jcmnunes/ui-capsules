import styled from '@emotion/styled/macro';
import { margin } from 'styled-system';
import React from 'react';
import { MarginProps } from '../styledProps';

export interface WrapperProps extends MarginProps, React.ComponentPropsWithoutRef<'div'> {}

/**
 * Use this component as a wrapper that accepts margin props
 */
export const Wrapper = styled.div<WrapperProps>(margin);
