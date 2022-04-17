import React from 'react';
import { axe } from 'jest-axe';
import { renderWithAct } from './render-with-act';

const config = {
  rules: {
    region: {
      enabled: false,
    },

    'autocomplete-valid': {
      enabled: false,
    },
  },
};

export const checkAccessibility = (element: React.ReactElement) => {
  it('has no accessibility violations', async () => {
    const { container } = await renderWithAct(element);

    const result = await axe(container, config);

    expect(result).toHaveNoViolations();
  }, 30000);
};
