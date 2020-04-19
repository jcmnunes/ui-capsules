import { useMemo } from 'react';
import { illustratedIcons } from '../../lib/IllustratedIcon/IllustratedIcon.constants';
import { IllustratedIconType, SelectOption } from '../../lib/types';

export const useIconOpts = () =>
  useMemo(
    () =>
      Object.keys(illustratedIcons)
        .sort()
        .map(icon => ({ value: icon, label: icon })) as SelectOption<IllustratedIconType>[],
    [],
  );
