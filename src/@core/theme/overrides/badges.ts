// MUI Imports
import type { Theme } from '@mui/material/styles'

const badges: Theme['components'] = {
  MuiBadge: {
    styleOverrides: {
      standard: ({ theme }) => ({
        height: 24,
        minWidth: 24,
        borderRadius: 20,
        fontSize: theme.typography.subtitle2.fontSize,
        lineHeight: 1.23077,
        padding: theme.spacing(1, 2)
      })
    }
  }
}

export default badges
