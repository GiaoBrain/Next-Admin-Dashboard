//MUI Imports
import type { Theme } from '@mui/material/styles'

//Type Imports
import type { Skin } from '@core/types'

const dialog = (skin: Skin): Theme['components'] => ({
  MuiDialog: {
    styleOverrides: {
      paper: ({ theme }) => ({
        borderRadius: 'var(--mui-shape-customBorderRadius-lg)',
        ...(skin !== 'bordered'
          ? {
              boxShadow: 'var(--mui-customShadows-lg)'
            }
          : {
              boxShadow: 'none'
            }),
        [theme.breakpoints.down('sm')]: {
          margin: theme.spacing(6)
        }
      }),
      paperFullScreen: {
        borderRadius: 0
      }
    }
  },
  MuiDialogTitle: {
    defaultProps: {
      variant: 'h5'
    },
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(6),
        '& + .MuiDialogActions-root': {
          paddingTop: 0
        }
      })
    }
  },
  MuiDialogContent: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(6),
        '& + .MuiDialogContent-root, & + .MuiDialogActions-root': {
          paddingTop: 0
        }
      })
    }
  },
  MuiDialogActions: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(6),
        '& .MuiButtonBase-root:not(:first-of-type)': {
          marginInlineStart: theme.spacing(4)
        },
        '&:where(.dialog-actions-dense)': {
          padding: theme.spacing(3),
          '& .MuiButton-text': {
            paddingInline: theme.spacing(3)
          }
        }
      })
    }
  }
})

export default dialog
