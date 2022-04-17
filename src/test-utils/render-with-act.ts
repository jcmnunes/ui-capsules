import React from 'react';
import { render, act, RenderResult } from './test-utils';

export const renderWithAct = async (element: React.ReactElement) => {
  let result: RenderResult | null = null;

  await act(async () => {
    result = render(element);
  });

  if (!result) {
    throw new Error('renderWithAct: result is null');
  }

  return result;
};

export async function actAsync(callback: () => void) {
  await act(async () => callback());
}
