import { useMemo } from 'react';
import { ICONS } from '../../lib/Icon20/Icon20.constants';

// eslint-disable-next-line import/prefer-default-export
export const useIconOpts = () =>
  useMemo(
    () =>
      Object.keys(ICONS)
        .sort()
        .map(icon => ({ value: icon, label: icon })),
    [],
  );
