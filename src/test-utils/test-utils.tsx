import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

const AllTheProviders: FC = ({ children }) => {
  return <>{children}</>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
