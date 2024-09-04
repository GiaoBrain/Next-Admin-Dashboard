// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Skin } from '@core/types'

const accordion = (skin: Skin): Theme['components'] => ({
  MuiAccordion: {
    defaultProps: {
      ...(skin === 'bordered' && {
        variant: 'outlined'
      })
    },
    styleOverrides: {
      root: ({ theme }) => ({
        transition: theme.transitions.create(['margin', 'border-radius', 'box-shadow']),
        '&:not(:last-child)': {
          marginBlockEnd: theme.spacing(2)
        },
        borderRadius: 'var(--mui-shape-borderRadius)',
        ...(skin !== 'bordered' && {
          boxShadow: 'var(--mui-customShadows-xs)'
        }),
        '&:before': {
          content: 'none'
        },
        '&.Mui-expanded': {
          ...(skin !== 'bordered' && {
            boxShadow: 'var(--mui-customShadows-md)'
          }),
          marginBlockStart: 0
        }
      })
    }
  },
  MuiAccordionSummary: {
    defaultProps: {
      expandIcon: <i className='tabler-chevron-right' />
    },
    styleOverrides: {
      root: ({ theme }) => ({
        minHeight: 46,
        padding: theme.spacing(3, 5),
        paddingInlineStart: theme.spacing(6),
        gap: theme.spacing(2),
        color: 'var(--mui-palette-text-primary)',
        '&.Mui-expanded': {
          minHeight: 46,
          '& .MuiAccordionSummary-expandIconWrapper': {
            transform: 'rotate(90deg)'
          }
        },
        '& .MuiAccordionSummary-expandIconWrapper': {
          transform: theme.direction === 'rtl' && 'rotate(180deg)'
        },
        '& .MuiTypography-root': {
          color: 'inherit',
          fontWeight: theme.typography.fontWeightMedium
        }
      }),
      content: {
        margin: '0 !important'
      },
      expandIconWrapper: {
        color: 'var(--mui-palette-text-primary)',
        fontSize: '1.25rem',
        '& i, & svg': {
          fontSize: 'inherit'
        }
      }
    }
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(6),
        paddingTop: theme.spacing(0),
        '& .MuiTypography-root': {
          color: 'var(--mui-palette-text-secondary)'
        }
      })
    }
  }
})

export default accordion
