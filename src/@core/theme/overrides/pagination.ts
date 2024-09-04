// MUI Imports
import type { Theme } from '@mui/material/styles'

const pagination: Theme['components'] = {
  MuiPagination: {
    styleOverrides: {
      ul: {
        rowGap: 6
      }
    },
    variants: [
      {
        props: { variant: 'text', color: 'primary' },
        style: {
          '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
            backgroundColor: 'var(--mui-palette-primary-main)',
            color: 'var(--mui-palette-primary-contrastText)'
          }
        }
      },
      {
        props: { variant: 'text', color: 'secondary' },
        style: {
          '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
            backgroundColor: 'var(--mui-palette-secondary-main)',
            color: 'var(--mui-palette-secondary-contrastText)'
          }
        }
      },
      {
        props: { variant: 'outlined' },
        style: {
          '& .MuiPaginationItem-root': {
            borderColor: 'var(--mui-palette-customColors-inputBorder)'
          }
        }
      },
      {
        props: { variant: 'outlined', color: 'primary' },
        style: {
          '& .MuiPaginationItem-root.Mui-selected': {
            color: 'var(--mui-palette-primary-main)',
            backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
            borderColor: 'rgb(var(--mui-palette-primary-mainChannel))'
          }
        }
      },
      {
        props: { variant: 'outlined', color: 'secondary' },
        style: {
          '& .MuiPaginationItem-root.Mui-selected': {
            color: 'var(--mui-palette-secondary-main)',
            backgroundColor: 'var(--mui-palette-secondary-lightOpacity)',
            borderColor: 'rgb(var(--mui-palette-secondary-mainChannel))'
          }
        }
      },
      {
        props: { variant: 'tonal' },
        style: {
          '& .MuiPaginationItem-root:not(.MuiPaginationItem-ellipsis)': {
            backgroundColor: 'var(--mui-palette-action-selected)'
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'standard' },
        style: {
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
            color: 'var(--mui-palette-primary-main)',
            '&:hover': {
              backgroundColor: 'var(--mui-palette-primary-mainOpacity)'
            }
          },
          '& .MuiPaginationItem-root:hover:not(.Mui-selected):not(.MuiPaginationItem-ellipsis)': {
            backgroundColor: 'var(--mui-palette-action-disabledBackground)'
          },
          '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
            backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
            color: 'var(--mui-palette-primary-main)'
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'primary' },
        style: {
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: 'var(--mui-palette-primary-main)',
            color: 'var(--mui-palette-primary-contrastText)',
            '&:not(.Mui-disabled)': {
              boxShadow: 'var(--mui-customShadows-primary-sm)'
            },
            '&:hover': {
              backgroundColor: 'var(--mui-palette-primary-dark)'
            }
          },
          '& .MuiPaginationItem-root:hover:not(.Mui-selected):not(.MuiPaginationItem-ellipsis)': {
            backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
            color: 'var(--mui-palette-primary-main)'
          },
          '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
            backgroundColor: 'var(--mui-palette-primary-main)',
            color: 'var(--mui-palette-primary-contrastText)'
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'secondary' },
        style: {
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: 'var(--mui-palette-secondary-main)',
            color: 'var(--mui-palette-secondary-contrastText)',
            '&:not(.Mui-disabled)': {
              boxShadow: 'var(--mui-customShadows-secondary-sm)'
            },
            '&:hover': {
              backgroundColor: 'var(--mui-palette-secondary-dark)'
            }
          },
          '& .MuiPaginationItem-root:hover:not(.Mui-selected):not(.MuiPaginationItem-ellipsis)': {
            backgroundColor: 'var(--mui-palette-secondary-mainOpacity)'
          },
          '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
            backgroundColor: 'var(--mui-palette-secondary-main)',
            color: 'var(--mui-palette-secondary-contrastText)'
          }
        }
      }
    ]
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...(ownerState.size === 'medium' && {
          height: '2.375rem',
          minWidth: '2.375rem'
        }),
        ...(ownerState.shape !== 'rounded' && {
          borderRadius: '50px'
        }),
        '&.Mui-selected.Mui-disabled': {
          color: 'var(--mui-palette-text-primary)',
          opacity: 0.45
        },
        '&.Mui-disabled': {
          opacity: 0.45
        },
        ...(ownerState.shape === 'rounded' &&
          ownerState.size === 'small' && {
            borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
          }),
        ...(ownerState.shape === 'rounded' &&
          ownerState.size === 'large' && {
            borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
          })
      }),
      ellipsis: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      sizeSmall: {
        height: '1.875rem',
        minWidth: '1.875rem'
      },
      sizeLarge: {
        height: '3rem',
        minWidth: '3rem'
      }
    }
  }
}

export default pagination
