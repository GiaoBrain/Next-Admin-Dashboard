'use client'

// MUI Imports
import { styled } from '@mui/material/styles'

// Styled Component
const AuthIllustrationWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 450,
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    '&:before': {
      zIndex: -1,
      position: 'absolute',
      height: '234px',
      width: '238px',
      content: '""',
      top: '-80px',
      left: '-45px',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='238' height='234' viewBox='0 0 238 234' fill='none'%3E%3Crect x='87.9395' y='0.5' width='149' height='149' rx='19.5' stroke='%23${theme.palette.primary.main.slice(
        1
      )}' stroke-opacity='0.16'/%3E%3Crect y='33.5608' width='200' height='200' rx='10' fill='%23${theme.palette.primary.main.slice(
        1
      )}' fill-opacity='0.08'/%3E%3C/svg%3E")`
    },
    '&:after': {
      zIndex: -1,
      position: 'absolute',
      height: '180px',
      width: '180px',
      content: '""',
      right: '-57px',
      bottom: '-64px',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180' fill='none'%3E%3Crect x='1' y='1' width='178' height='178' rx='19' stroke='%23${theme.palette.primary.main.slice(
        1
      )}' stroke-opacity='0.16' stroke-width='2' stroke-dasharray='8 8'/%3E%3Crect x='22.5' y='22.5' width='135' height='135' rx='10' fill='%23${theme.palette.primary.main.slice(
        1
      )}' fill-opacity='0.08'/%3E%3C/svg%3E")`
    }
  }
}))

export default AuthIllustrationWrapper
