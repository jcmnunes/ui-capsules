import { useMemo } from 'react';
import { solidIcons } from '../../lib/IconSolid/IconSolid.constants';
import { IconSolidType, SelectOption } from '../../lib/types';

export const useIconSolidOpts = () =>
  useMemo(
    () =>
      Object.keys(solidIcons)
        .sort()
        .map(icon => ({ value: icon, label: icon })) as SelectOption<IconSolidType>[],
    [],
  );
