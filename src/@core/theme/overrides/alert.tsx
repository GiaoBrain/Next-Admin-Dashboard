// React Imports
import React from 'react'

// MUI Imports
import type { Theme } from '@mui/material/styles'

const alerts: Theme['components'] = {
  MuiAlert: {
    defaultProps: {
      iconMapping: {
        error: <i className='tabler-alert-circle' />,
        warning: <i className='tabler-alert-triangle' />,
        info: <i className='tabler-info-circle' />,
        success: <i className='tabler-circle-check' />
      }
    },
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(3, 4),
        gap: theme.spacing(4),
        ...theme.typography.body1,
        '&:not(:has(.MuiAlertTitle-root))': {
          '& .MuiAlert-icon + .MuiAlert-message': {
            alignSelf: 'center'
          }
        }
      }),
      icon: {
        padding: 0,
        margin: 0,
        minInlineSize: 30,
        blockSize: 30,
        borderRadius: 'var(--mui-shape-borderRadius)',
        alignItems: 'center',
        justifyContent: 'center',
        '& i, & svg': {
          fontSize: 'inherit'
        }
      },
      message: {
        padding: 0
      },
      action: {
        padding: 0,
        marginRight: 0
      }
    },
    variants: [
      {
        props: { variant: 'standard', severity: 'error' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-error-main)',
            color: 'var(--mui-palette-error-contrastText)'
          }
        }
      },
      {
        props: { variant: 'standard', severity: 'warning' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-warning-main)',
            color: 'var(--mui-palette-warning-contrastText)'
          }
        }
      },
      {
        props: { variant: 'standard', severity: 'info' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-info-main)',
            color: 'var(--mui-palette-info-contrastText)'
          }
        }
      },
      {
        props: { variant: 'standard', severity: 'success' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-success-main)',
            color: 'var(--mui-palette-success-contrastText)'
          }
        }
      },
      {
        props: { variant: 'outlined', severity: 'error' },
        style: {
          borderColor: 'var(--mui-palette-error-main)',
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-error-lightOpacity)',
            color: 'var(--mui-palette-error-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', severity: 'warning' },
        style: {
          borderColor: 'var(--mui-palette-warning-main)',
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-warning-lightOpacity)',
            color: 'var(--mui-palette-warning-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', severity: 'info' },
        style: {
          borderColor: 'var(--mui-palette-info-main)',
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-info-lightOpacity)',
            color: 'var(--mui-palette-info-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', severity: 'success' },
        style: {
          borderColor: 'var(--mui-palette-success-main)',
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-success-lightOpacity)',
            color: 'var(--mui-palette-success-main)'
          }
        }
      },
      {
        props: { variant: 'filled', severity: 'error' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-common-white)',
            color: 'var(--mui-palette-error-main)',
            boxShadow: 'var(--mui-customShadows-xs)'
          }
        }
      },
      {
        props: { variant: 'filled', severity: 'warning' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-common-white)',
            color: 'var(--mui-palette-warning-main)',
            boxShadow: 'var(--mui-customShadows-xs)'
          }
        }
      },
      {
        props: { variant: 'filled', severity: 'info' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-common-white)',
            color: 'var(--mui-palette-info-main)',
            boxShadow: 'var(--mui-customShadows-xs)'
          }
        }
      },
      {
        props: { variant: 'filled', severity: 'success' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-common-white)',
            color: 'var(--mui-palette-success-main)',
            boxShadow: 'var(--mui-customShadows-xs)'
          }
        }
      }
    ]
  },
  MuiAlertTitle: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: theme.typography.h5.fontSize,
        lineHeight: 1.33333,
        marginTop: 0,
        marginBottom: theme.spacing(1),
        color: 'inherit'
      })
    }
  }
}

export default alerts
