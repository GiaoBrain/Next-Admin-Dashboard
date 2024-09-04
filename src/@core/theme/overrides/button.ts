// MUI Imports
import type { Theme } from '@mui/material/styles'

// Config Imports
import themeConfig from '@configs/themeConfig'

const iconStyles = (size?: string) => ({
  '& > *:nth-of-type(1)': {
    ...(size === 'small'
      ? {
          fontSize: '14px'
        }
      : {
          ...(size === 'medium'
            ? {
                fontSize: '16px'
              }
            : {
                fontSize: '20px'
              })
        })
  }
})

const button: Theme['components'] = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: themeConfig.disableRipple
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        '&.Mui-disabled': {
          opacity: 0.45
        },
        transform: 'scale(1.001)',
        transition: theme.transitions.create('all', {
          duration: theme.transitions.duration.short
        }),
        '&:not(.Mui-disabled):active': {
          transform: 'scale(0.98)'
        },
        ...(ownerState.variant === 'text'
          ? {
              ...(ownerState.size === 'small' && {
                padding: theme.spacing(1.5, 2.25)
              }),
              ...(ownerState.size === 'medium' && {
                padding: theme.spacing(2, 3)
              }),
              ...(ownerState.size === 'large' && {
                padding: theme.spacing(2.75, 4)
              })
            }
          : {
              ...(ownerState.variant === 'outlined'
                ? {
                    ...(ownerState.size === 'small' && {
                      padding: theme.spacing(1.25, 3.25)
                    }),
                    ...(ownerState.size === 'medium' && {
                      padding: theme.spacing(1.75, 4.75)
                    }),
                    ...(ownerState.size === 'large' && {
                      padding: theme.spacing(2.5, 6.25)
                    })
                  }
                : {
                    ...(ownerState.size === 'small' && {
                      padding: theme.spacing(1.5, 3.5)
                    }),
                    ...(ownerState.size === 'medium' && {
                      padding: theme.spacing(2, 5)
                    }),
                    ...(ownerState.size === 'large' && {
                      padding: theme.spacing(2.75, 6.5)
                    })
                  })
            })
      }),
      sizeSmall: ({ theme }) => ({
        lineHeight: 1.38462,
        fontSize: theme.typography.body2.fontSize,
        borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
      }),
      sizeLarge: {
        fontSize: '1.0625rem',
        lineHeight: 1.529412,
        borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
      },
      startIcon: ({ theme, ownerState }) => ({
        ...(ownerState.size === 'small'
          ? {
              marginInlineEnd: theme.spacing(1.5)
            }
          : {
              ...(ownerState.size === 'medium'
                ? {
                    marginInlineEnd: theme.spacing(2)
                  }
                : {
                    marginInlineEnd: theme.spacing(2.5)
                  })
            }),
        ...iconStyles(ownerState.size)
      }),
      endIcon: ({ theme, ownerState }) => ({
        ...(ownerState.size === 'small'
          ? {
              marginInlineStart: theme.spacing(1.5)
            }
          : {
              ...(ownerState.size === 'medium'
                ? {
                    marginInlineStart: theme.spacing(2)
                  }
                : {
                    marginInlineStart: theme.spacing(2.5)
                  })
            }),
        ...iconStyles(ownerState.size)
      })
    },
    variants: [
      {
        props: { variant: 'text', color: 'primary' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-primary-lighterOpacity)'
            },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-primary-main)'
          }
        }
      },
      {
        props: { variant: 'text', color: 'secondary' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-secondary-lighterOpacity)'
            },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-secondary-main)'
          }
        }
      },
      {
        props: { variant: 'text', color: 'error' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-error-lighterOpacity)'
            },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-error-main)'
          }
        }
      },
      {
        props: { variant: 'text', color: 'warning' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-warning-lighterOpacity)'
            },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-warning-main)'
          }
        }
      },
      {
        props: { variant: 'text', color: 'info' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-info-lighterOpacity)'
            },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-info-main)'
          }
        }
      },
      {
        props: { variant: 'text', color: 'success' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-success-lighterOpacity)'
            },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-success-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', color: 'primary' },
        style: {
          borderColor: 'var(--mui-palette-primary-main)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-primary-lighterOpacity)'
            },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-primary-main)',
            borderColor: 'var(--mui-palette-primary-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', color: 'secondary' },
        style: {
          borderColor: 'var(--mui-palette-secondary-main)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-secondary-lighterOpacity)'
            },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-secondary-main)',
            borderColor: 'var(--mui-palette-secondary-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', color: 'error' },
        style: {
          borderColor: 'var(--mui-palette-error-main)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-error-lighterOpacity)'
            },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-error-main)',
            borderColor: 'var(--mui-palette-error-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', color: 'warning' },
        style: {
          borderColor: 'var(--mui-palette-warning-main)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-warning-lighterOpacity)'
            },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-warning-main)',
            borderColor: 'var(--mui-palette-warning-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', color: 'info' },
        style: {
          borderColor: 'var(--mui-palette-info-main)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-info-lighterOpacity)'
            },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-info-main)',
            borderColor: 'var(--mui-palette-info-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', color: 'success' },
        style: {
          borderColor: 'var(--mui-palette-success-main)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-success-lighterOpacity)'
            },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-success-main)',
            borderColor: 'var(--mui-palette-success-main)'
          }
        }
      },
      {
        props: { variant: 'contained', color: 'primary' },
        style: {
          '&:not(.Mui-disabled)': {
            boxShadow: 'var(--mui-customShadows-primary-sm)'
          },
          '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
            backgroundColor: 'var(--mui-palette-primary-dark)'
          },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-primary-contrastText)',
            backgroundColor: 'var(--mui-palette-primary-main)'
          }
        }
      },
      {
        props: { variant: 'contained', color: 'secondary' },
        style: {
          '&:not(.Mui-disabled)': {
            boxShadow: 'var(--mui-customShadows-secondary-sm)'
          },
          '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
            backgroundColor: 'var(--mui-palette-secondary-dark)'
          },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-secondary-contrastText)',
            backgroundColor: 'var(--mui-palette-secondary-main)'
          }
        }
      },
      {
        props: { variant: 'contained', color: 'error' },
        style: {
          '&:not(.Mui-disabled)': {
            boxShadow: 'var(--mui-customShadows-error-sm)'
          },
          '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
            backgroundColor: 'var(--mui-palette-error-dark)'
          },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-error-contrastText)',
            backgroundColor: 'var(--mui-palette-error-main)'
          }
        }
      },
      {
        props: { variant: 'contained', color: 'warning' },
        style: {
          '&:not(.Mui-disabled)': {
            boxShadow: 'var(--mui-customShadows-warning-sm)'
          },
          '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
            backgroundColor: 'var(--mui-palette-warning-dark)'
          },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-warning-contrastText)',
            backgroundColor: 'var(--mui-palette-warning-main)'
          }
        }
      },
      {
        props: { variant: 'contained', color: 'info' },
        style: {
          '&:not(.Mui-disabled)': {
            boxShadow: 'var(--mui-customShadows-info-sm)'
          },
          '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
            backgroundColor: 'var(--mui-palette-info-dark)'
          },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-info-contrastText)',
            backgroundColor: 'var(--mui-palette-info-main)'
          }
        }
      },
      {
        props: { variant: 'contained', color: 'success' },
        style: {
          '&:not(.Mui-disabled)': {
            boxShadow: 'var(--mui-customShadows-success-sm)'
          },
          '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
            backgroundColor: 'var(--mui-palette-success-dark)'
          },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-success-contrastText)',
            backgroundColor: 'var(--mui-palette-success-main)'
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'primary' },
        style: {
          backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
          color: 'var(--mui-palette-primary-main)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-primary-mainOpacity)'
            },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-primary-main)'
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'secondary' },
        style: {
          backgroundColor: 'var(--mui-palette-secondary-lightOpacity)',
          color: 'var(--mui-palette-secondary-main)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-secondary-mainOpacity)'
            },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-secondary-main)'
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'error' },
        style: {
          backgroundColor: 'var(--mui-palette-error-lightOpacity)',
          color: 'var(--mui-palette-error-main)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-error-mainOpacity)'
            },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-error-main)'
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'warning' },
        style: {
          backgroundColor: 'var(--mui-palette-warning-lightOpacity)',
          color: 'var(--mui-palette-warning-main)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-warning-mainOpacity)'
            },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-warning-main)'
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'info' },
        style: {
          backgroundColor: 'var(--mui-palette-info-lightOpacity)',
          color: 'var(--mui-palette-info-main)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-info-mainOpacity)'
            },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-info-main)'
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'success' },
        style: {
          backgroundColor: 'var(--mui-palette-success-lightOpacity)',
          color: 'var(--mui-palette-success-main)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-success-mainOpacity)'
            },
          '&.Mui-disabled': {
            color: 'var(--mui-palette-success-main)'
          }
        }
      }
    ]
  }
}

export default button
