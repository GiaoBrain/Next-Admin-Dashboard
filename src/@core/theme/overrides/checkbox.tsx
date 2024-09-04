// React Imports
import React from 'react'

// MUI Imports
import type { Theme } from '@mui/material/styles'

const Icon = () => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#a)'>
        <path
          d='M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7Z'
          stroke='var(--mui-palette-text-disabled)'
          strokeWidth='2'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='var(--mui-palette-common-white)' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}

const IndeterminateIcon = () => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7Z' fill='currentColor' />
      <path
        d='M8.5 12h7'
        stroke='var(--mui-palette-common-white)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const CheckedIcon = () => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7Z' fill='currentColor' />
      <path
        d='m8.5 12 2.5 2.5 5-5'
        stroke='var(--mui-palette-common-white)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const checkbox: Theme['components'] = {
  MuiCheckbox: {
    defaultProps: {
      icon: <Icon />,
      indeterminateIcon: <IndeterminateIcon />,
      checkedIcon: <CheckedIcon />
    },
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        ...(ownerState.size === 'small'
          ? {
              padding: theme.spacing(1),
              '& svg': {
                fontSize: '1.25rem'
              }
            }
          : {
              padding: theme.spacing(1.5),
              '& svg': {
                fontSize: '1.5rem'
              }
            }),
        '&:not(.Mui-checked):not(.Mui-disabled):not(.MuiCheckbox-indeterminate) svg, &:not(.Mui-checked):not(.Mui-disabled):not(.MuiCheckbox-indeterminate) i':
          {
            color: 'var(--mui-palette-text-disabled)'
          },
        '&.Mui-checked:not(.Mui-disabled) svg, &.MuiCheckbox-indeterminate:not(.Mui-disabled) svg': {
          filter: `drop-shadow(var(--mui-customShadows-${ownerState.color}-sm))`
        },
        '&.Mui-disabled': {
          opacity: 0.45,
          '&:not(.Mui-checked)': {
            color: 'var(--mui-palette-text-disabled)'
          },
          '&.Mui-checked.MuiCheckbox-colorPrimary': {
            color: 'var(--mui-palette-primary-main)'
          },
          '&.Mui-checked.MuiCheckbox-colorSecondary': {
            color: 'var(--mui-palette-secondary-main)'
          },
          '&.Mui-checked.MuiCheckbox-colorError': {
            color: 'var(--mui-palette-error-main)'
          },
          '&.Mui-checked.MuiCheckbox-colorWarning': {
            color: 'var(--mui-palette-warning-main)'
          },
          '&.Mui-checked.MuiCheckbox-colorInfo': {
            color: 'var(--mui-palette-info-main)'
          },
          '&.Mui-checked.MuiCheckbox-colorSuccess': {
            color: 'var(--mui-palette-success-main)'
          }
        }
      })
    }
  }
}

export default checkbox
