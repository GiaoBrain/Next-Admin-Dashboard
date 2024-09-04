'use client'

// React Imports
import { useState } from 'react'
import type { FormEvent } from 'react'

// MUI Import
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

// Styled Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

type Props = {
  open: boolean
  handleClose: () => void
}

type FormDataType = {
  paymentDate: Date
  paymentMethod: string
  paymentAmount: number
  paymentNote: string
}

// Vars
const initialData: FormDataType = {
  paymentDate: new Date(),
  paymentMethod: 'select-method',
  paymentAmount: 500,
  paymentNote: ''
}

const AddPaymentDrawer = ({ open, handleClose }: Props) => {
  // States
  const [formData, setFormData] = useState<FormDataType>(initialData)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleClose()
    setFormData(initialData)
  }

  const handleReset = () => {
    handleClose()
    setFormData(initialData)
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleReset}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <div className='flex items-center justify-between plb-5 pli-6'>
        <Typography variant='h5'>Add New User</Typography>
        <IconButton onClick={handleReset}>
          <i className='tabler-x text-textPrimary' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-6'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          <CustomTextField
            fullWidth
            id='invoice-balance'
            label='Invoice Balance'
            InputProps={{ disabled: true }}
            defaultValue='5000.00'
          />
          <CustomTextField
            fullWidth
            id='payment-amount'
            label='Payment Amount'
            type='number'
            InputProps={{
              startAdornment: <InputAdornment position='start'>$</InputAdornment>
            }}
            value={formData.paymentAmount}
            onChange={e => setFormData({ ...formData, paymentAmount: +e.target.value })}
          />
          <AppReactDatepicker
            selected={formData.paymentDate}
            id='payment-date'
            onChange={(date: Date) => setFormData({ ...formData, paymentDate: date })}
            customInput={<CustomTextField fullWidth label='Payment Date' />}
          />
          <CustomTextField
            select
            label='Payment Method'
            id='payment-method-select'
            value={formData.paymentMethod}
            onChange={e => setFormData({ ...formData, paymentMethod: e.target.value as string })}
          >
            <MenuItem value='select-method' disabled>
              Select Payment Method
            </MenuItem>
            <MenuItem value='cash'>Cash</MenuItem>
            <MenuItem value='bank-transfer'>Bank Transfer</MenuItem>
            <MenuItem value='credit'>Credit</MenuItem>
            <MenuItem value='debit'>Debit</MenuItem>
            <MenuItem value='paypal'>Paypal</MenuItem>
          </CustomTextField>
          <CustomTextField
            rows={6}
            multiline
            fullWidth
            label='Internal Payment Note'
            placeholder='Internal Payment Note'
            value={formData.paymentNote}
            onChange={e => setFormData({ ...formData, paymentNote: e.target.value })}
          />
          <div className='flex items-center gap-4'>
            <Button variant='contained' type='submit'>
              Send
            </Button>
            <Button variant='tonal' color='error' type='reset' onClick={handleReset}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default AddPaymentDrawer
