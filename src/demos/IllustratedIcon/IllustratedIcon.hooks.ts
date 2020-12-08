import { useMemo } from 'react';
import { IllustratedIconType, SelectOption } from '../../lib';
import { illustratedIcons } from '../../lib/IllustratedIcon/IllustratedIcon.constants';

export const useIconOpts = () =>
  useMemo(
    () =>
      Object.keys(illustratedIcons)
        .sort()
        .map(icon => ({ value: icon, label: icon })) as SelectOption<IllustratedIconType>[],
    [],
  );
