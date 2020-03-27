import { useMemo } from 'react';
import { ICONS } from '../../lib/Icon/Icon.constants';

export const useIconOpts = () =>
  useMemo(
    () =>
      Object.keys(ICONS)
        .sort()
        .map(icon => ({ value: icon, label: icon })),
    [],
  );
