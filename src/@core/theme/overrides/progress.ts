// MUI Imports
import type { Theme } from '@mui/material/styles'

const progress: Theme['components'] = {
  MuiLinearProgress: {
    styleOverrides: {
      root: ({ theme }) => ({
        blockSize: 6,
        borderRadius: 'var(--mui-shape-borderRadius)',
        backgroundColor: 'var(--mui-palette-customColors-trackBg)',
        '& .MuiLinearProgress-bar': {
          borderRadius: 'var(--mui-shape-borderRadius)'
        },
        '& .MuiLinearProgress-dashed': {
          marginTop: theme.spacing(0.2)
        }
      })
    }
  }
}

export default progress
