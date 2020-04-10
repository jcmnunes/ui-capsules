import { useMemo } from 'react';
import { icons } from '../../lib/Icon/Icon.constants';

export const useIconOpts = () =>
  useMemo(
    () =>
      Object.keys(icons)
        .sort()
        .map(icon => ({ value: icon, label: icon })),
    [],
  );
