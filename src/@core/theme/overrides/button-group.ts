// MUI Imports
import type { Theme } from '@mui/material/styles'

// Config Imports
import themeConfig from '@configs/themeConfig'

const buttonGroup: Theme['components'] = {
  MuiButtonGroup: {
    defaultProps: {
      disableRipple: themeConfig.disableRipple
    },
    variants: [
      {
        props: { variant: 'text', color: 'primary' },
        style: {
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderColor: 'var(--mui-palette-primary-main)'
            }
          }
        }
      },
      {
        props: { variant: 'text', color: 'secondary' },
        style: {
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderColor: 'var(--mui-palette-secondary-main)'
            }
          }
        }
      },
      {
        props: { variant: 'text', color: 'error' },
        style: {
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderColor: 'var(--mui-palette-error-main)'
            }
          }
        }
      },
      {
        props: { variant: 'text', color: 'warning' },
        style: {
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderColor: 'var(--mui-palette-warning-main)'
            }
          }
        }
      },
      {
        props: { variant: 'text', color: 'info' },
        style: {
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderColor: 'var(--mui-palette-info-main)'
            }
          }
        }
      },
      {
        props: { variant: 'text', color: 'success' },
        style: {
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderColor: 'var(--mui-palette-success-main)'
            }
          }
        }
      },
      {
        props: { variant: 'contained', color: 'primary' },
        style: {
          '&:not(.Mui-disabled)': {
            boxShadow: 'var(--mui-customShadows-primary-sm)'
          },
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderColor: 'var(--mui-palette-primary-dark)'
            }
          }
        }
      },
      {
        props: { variant: 'contained', color: 'secondary' },
        style: {
          '&:not(.Mui-disabled)': {
            boxShadow: 'var(--mui-customShadows-secondary-sm)'
          },
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderColor: 'var(--mui-palette-secondary-dark)'
            }
          }
        }
      },
      {
        props: { variant: 'contained', color: 'error' },
        style: {
          '&:not(.Mui-disabled)': {
            boxShadow: 'var(--mui-customShadows-error-sm)'
          },
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderColor: 'var(--mui-palette-error-dark)'
            }
          }
        }
      },
      {
        props: { variant: 'contained', color: 'warning' },
        style: {
          '&:not(.Mui-disabled)': {
            boxShadow: 'var(--mui-customShadows-warning-sm)'
          },
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderColor: 'var(--mui-palette-warning-dark)'
            }
          }
        }
      },
      {
        props: { variant: 'contained', color: 'info' },
        style: {
          '&:not(.Mui-disabled)': {
            boxShadow: 'var(--mui-customShadows-info-sm)'
          },
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderColor: 'var(--mui-palette-info-dark)'
            }
          }
        }
      },
      {
        props: { variant: 'contained', color: 'success' },
        style: {
          '&:not(.Mui-disabled)': {
            boxShadow: 'var(--mui-customShadows-success-sm)'
          },
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderColor: 'var(--mui-palette-success-dark)'
            }
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'primary', orientation: 'horizontal' },
        style: {
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderRight: '1px solid var(--mui-palette-primary-darkOpacity)'
            }
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'secondary', orientation: 'horizontal' },
        style: {
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderRight: '1px solid var(--mui-palette-secondary-darkOpacity)'
            }
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'error', orientation: 'horizontal' },
        style: {
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderRight: '1px solid var(--mui-palette-error-darkOpacity)'
            }
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'warning', orientation: 'horizontal' },
        style: {
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderRight: '1px solid var(--mui-palette-warning-darkOpacity)'
            }
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'info', orientation: 'horizontal' },
        style: {
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderRight: '1px solid var(--mui-palette-info-darkOpacity)'
            }
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'success', orientation: 'horizontal' },
        style: {
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderRight: '1px solid var(--mui-palette-success-darkOpacity)'
            }
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'primary', orientation: 'vertical' },
        style: {
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderBottom: '1px solid var(--mui-palette-primary-darkOpacity)'
            }
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'secondary', orientation: 'vertical' },
        style: {
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderBottom: '1px solid var(--mui-palette-secondary-darkOpacity)'
            }
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'error', orientation: 'vertical' },
        style: {
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderBottom: '1px solid var(--mui-palette-error-darkOpacity)'
            }
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'warning', orientation: 'vertical' },
        style: {
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderBottom: '1px solid var(--mui-palette-warning-darkOpacity)'
            }
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'info', orientation: 'vertical' },
        style: {
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderBottom: '1px solid var(--mui-palette-info-darkOpacity)'
            }
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'success', orientation: 'vertical' },
        style: {
          '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
            '&, &.Mui-disabled': {
              borderBottom: '1px solid var(--mui-palette-success-darkOpacity)'
            }
          }
        }
      }
    ]
  }
}

export default buttonGroup
