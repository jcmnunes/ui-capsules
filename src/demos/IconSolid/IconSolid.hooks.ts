import { useMemo } from 'react';
import { IconSolidType, SelectOption } from '../../lib';
import { solidIcons } from '../../lib/IconSolid/IconSolid.constants';

export const useIconSolidOpts = () =>
  useMemo(
    () =>
      Object.keys(solidIcons)
        .sort()
        .map(icon => ({ value: icon, label: icon })) as SelectOption<IconSolidType>[],
    [],
  );
