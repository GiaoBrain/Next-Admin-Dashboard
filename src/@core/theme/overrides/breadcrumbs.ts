// MUI Imports
import type { Theme } from '@mui/material/styles'

const breadcrumbs: Theme['components'] = {
  MuiBreadcrumbs: {
    styleOverrides: {
      root: {
        '& svg, & i': {
          fontSize: '1.25rem'
        },
        '& a': {
          textDecoration: 'none',
          color: 'var(--mui-palette-primary-main)'
        }
      },
      li: ({ theme }) => ({
        lineHeight: theme.typography.body1.lineHeight,
        color: 'var(--mui-palette-text-primary)'
      })
    }
  }
}

export default breadcrumbs
