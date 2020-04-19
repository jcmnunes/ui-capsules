import { useMemo } from 'react';
import { icons } from '../../lib/Icon/Icon.constants';
import { IconType, SelectOption } from '../../lib/types';

export const useIconOpts = () =>
  useMemo(
    () =>
      Object.keys(icons)
        .sort()
        .map(icon => ({ value: icon, label: icon })) as SelectOption<IconType>[],
    [],
  );
