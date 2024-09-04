'use client'

//Mui Imports
import { styled } from '@mui/material'
import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'

const DialogCloseButton = styled(Button)<ButtonProps>({
  top: 0,
  right: 0,
  color: 'var(--mui-palette-text-disabled)',
  position: 'absolute',
  boxShadow: 'var(--mui-customShadows-xs)',
  transform: 'translate(9px, -10px)',
  borderRadius: 'var(--mui-shape-customBorderRadius-sm)',
  backgroundColor: 'var(--mui-palette-background-paper) !important',
  transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
  blockSize: 30,
  inlineSize: 30,
  minInlineSize: 0,
  padding: 0,
  '&:hover, &:active': {
    transform: 'translate(7px, -5px) !important'
  },
  '& i, & svg': {
    fontSize: '1.25rem'
  }
})

export default DialogCloseButton
