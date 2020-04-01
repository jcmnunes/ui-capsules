import { useMemo } from 'react';
import { ILLUSTRATED_ICONS } from '../../lib/IllustratedIcon/IllustratedIcon.constants';

export const useIconOpts = () =>
  useMemo(
    () =>
      Object.keys(ILLUSTRATED_ICONS)
        .sort()
        .map(icon => ({ value: icon, label: icon })),
    [],
  );
