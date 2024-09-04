'use client'

// MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import type { BoxProps } from '@mui/material/Box'

// Third-party Imports
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import type { ToastContainerProps } from 'react-toastify'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

type Props = ToastContainerProps & {
  boxProps?: BoxProps
}

// Styled Components
const ToastifyWrapper = styled(Box)<BoxProps>(({ theme }) => {
  // Hooks
  const { settings } = useSettings()

  return {
    '& .Toastify__toast': {
      minBlockSize: 46,
      borderRadius: 'var(--mui-shape-borderRadius)',
      padding: theme.spacing(1.5, 2.5),
      backgroundColor: 'var(--mui-palette-background-paper)',
      boxShadow: settings.skin === 'bordered' ? 'none' : 'var(--mui-customShadows-md)',
      border: settings.skin === 'bordered' && `1px solid ${theme.palette.divider}`,
      '&:not(.custom-toast)': {
        '& .Toastify__toast-body': {
          color: 'var(--mui-palette-text-primary)'
        },
        '&.Toastify__toast--success': {
          '& .Toastify__toast-icon svg': {
            fill: 'var(--mui-palette-success-main)'
          }
        },
        '&.Toastify__toast--error': {
          '& .Toastify__toast-icon svg': {
            fill: 'var(--mui-palette-error-main)'
          }
        },
        '&.Toastify__toast--warning': {
          '& .Toastify__toast-icon svg': {
            fill: 'var(--mui-palette-warning-main)'
          }
        },
        '&.Toastify__toast--info': {
          '& .Toastify__toast-icon svg': {
            fill: 'var(--mui-palette-info-main)'
          }
        }
      }
    },
    '& .Toastify__toast-body': {
      margin: 0,
      lineHeight: 1.46667,
      fontSize: theme.typography.body1.fontSize
    },
    '& .Toastify__toast-icon': {
      marginRight: theme.spacing(3),
      height: 20,
      width: 20,
      '& .Toastify__spinner': {
        margin: 3,
        height: 14,
        width: 14
      }
    },
    '& .Toastify__close-button': {
      color: 'var(--mui-palette-text-primary)'
    }
  }
})

const AppReactToastify = (props: Props) => {
  const { boxProps, ...rest } = props

  return (
    <ToastifyWrapper {...boxProps}>
      <ToastContainer {...rest} />
    </ToastifyWrapper>
  )
}

export default AppReactToastify
