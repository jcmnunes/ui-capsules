import { useMemo } from 'react';
import { ICONIS } from '../../lib/Iconis/Iconis.constants';

export const useIconOpts = () =>
  useMemo(
    () =>
      Object.keys(ICONIS)
        .sort()
        .map(icon => ({ value: icon, label: icon })),
    [],
  );
