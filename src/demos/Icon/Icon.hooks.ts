import { useMemo } from 'react';
import { IconType, SelectOption } from '../../lib';
import { solidIcons } from '../../lib/Icon/Icon.constants';

export const useIconOpts = () =>
  useMemo(
    () =>
      Object.keys(solidIcons)
        .sort()
        .map(icon => ({ value: icon, label: icon })) as SelectOption<IconType>[],
    [],
  );
