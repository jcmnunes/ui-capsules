import { useMemo } from 'react';
import { illustratedIcons } from '../../lib/IllustratedIcon/IllustratedIcon.constants';

export const useIconOpts = () =>
  useMemo(
    () =>
      Object.keys(illustratedIcons)
        .sort()
        .map(icon => ({ value: icon, label: icon })),
    [],
  );
