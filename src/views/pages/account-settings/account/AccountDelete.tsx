'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'

// Third-party Imports
import { useForm, Controller } from 'react-hook-form'

// Component Imports
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'

const AccountDelete = () => {
  // States
  const [open, setOpen] = useState(false)

  // Hooks
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { checkbox: false } })

  // Vars
  const checkboxValue = watch('checkbox')

  const onSubmit = () => {
    setOpen(true)
  }

  return (
    <Card>
      <CardHeader title='Delete Account' />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl error={Boolean(errors.checkbox)} className='is-full mbe-6'>
            <Controller
              name='checkbox'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <FormControlLabel control={<Checkbox {...field} />} label='I confirm my account deactivation' />
              )}
            />
            {errors.checkbox && <FormHelperText error>Please confirm you want to delete account</FormHelperText>}
          </FormControl>
          <Button variant='contained' color='error' type='submit' disabled={!checkboxValue}>
            Deactivate Account
          </Button>
          <ConfirmationDialog open={open} setOpen={setOpen} type='delete-account' />
        </form>
      </CardContent>
    </Card>
  )
}

export default AccountDelete
