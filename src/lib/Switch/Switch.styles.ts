import { Icon } from '../Icon/Icon';
import { styled } from 'styled-components';
import { Text } from '../Text/Text';

export const LeftIcon = styled(Icon)({
  position: 'absolute',
  color: '#fff',
  left: 3,
});

export const RightIcon = styled(Icon)({
  position: 'absolute',
  color: '#fff',
  right: 3,
});

interface StyledSwitchProps {
  size?: 'medium' | 'large';
}

export const StyledSwitch = styled.span<StyledSwitchProps>(
  ({ theme }) => ({
    display: 'inline-block',
    background: theme.colors.neutral500,
    borderRadius: theme.radii.full,
    position: 'relative',

    '.darkTheme &': {
      background: theme.colors.neutral400,
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      borderRadius: '100%',
      top: '50%',
      left: '25%',
      background: '#fff',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
      boxShadow: theme.shadows['300'],
      willChange: 'left',
      transition: 'left 0.1s ease',
    },
  }),

  ({ size }) => {
    switch (size) {
      case 'medium': {
        return {
          width: '32px',
          height: '16px',

          '&::after': {
            width: '12px',
            height: '12px',
          },

          [`& ${LeftIcon}`]: {
            left: 3,
          },

          [`& ${RightIcon}`]: {
            right: 3,
          },
        };
      }
      case 'large': {
        return {
          width: '48px',
          height: '24px',

          '&::after': {
            width: '20px',
            height: '20px',
          },

          [`& ${LeftIcon}`]: {
            left: 6,
          },

          [`& ${RightIcon}`]: {
            right: 6,
          },
        };
      }
    }
  },
);

export const Icons = styled.div({
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 1,
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
});

interface StyledToggleProps {
  disabled?: boolean;
}

export const StyledToggle = styled.label<StyledToggleProps>(
  ({ theme }) => ({
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    position: 'relative',
    verticalAlign: 'bottom',

    input: {
      position: 'absolute',
      opacity: 0,
      zIndex: -1,

      '&:disabled': {
        [`& ~ ${StyledSwitch}`]: {
          background: theme.colors.neutral200,

          '&:after': {
            background: theme.colors.neutral400,
          },

          [`& ${Icons}`]: {
            color: theme.colors.neutral400,
          },
        },
      },

      '&:checked:not(:disabled)': {
        [`& ~ ${StyledSwitch}`]: {
          background: theme.colors.primary500,
        },
      },

      '&[data-focus-visible-added]:focus': {
        [`& ~ ${StyledSwitch}`]: {
          boxShadow: theme.shadows.focus,
        },
      },

      '&:checked': {
        [`& ~ ${StyledSwitch}:after`]: {
          left: '75%',
        },

        [`& ~ ${StyledSwitch}`]: {
          [`& ${Icons}`]: {
            '&:before': {
              opacity: 1,
            },

            '&:after': {
              opacity: 0,
            },
          },
        },
      },
    },
  }),

  ({ disabled }) => {
    if (disabled) {
      return {
        cursor: 'initial',

        [`& ${LeftIcon}`]: {
          opacity: 0.3,
        },

        [`& ${RightIcon}`]: {
          opacity: 0.3,
        },
      };
    }
  },
);

interface StyledLabelProps {
  $disabled?: boolean;
}

export const StyledText = styled(Text)<StyledLabelProps>(({ theme, $disabled }) => ({
  color: $disabled ? theme.colors.neutral500 : theme.colors.neutral700,
  fontWeight: 500,
  marginLeft: 8,
}));
