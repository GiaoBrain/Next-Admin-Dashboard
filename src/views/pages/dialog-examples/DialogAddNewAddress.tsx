// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import type { ButtonProps } from '@mui/material/Button'

// Component Imports
import AddNewAddress from '@components/dialogs/add-edit-address'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const DialogAddNewAddress = () => {
  // Vars
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Show'
  }

  return (
    <Card>
      <CardContent className='flex flex-col items-center text-center gap-4'>
        <i className='tabler-home text-[34px] text-textPrimary' />
        <Typography variant='h5'>Add New Address</Typography>
        <Typography color='text.primary'>
          Ready to use form to collect user address data with validation and custom input support.
        </Typography>
        <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={AddNewAddress} />
      </CardContent>
    </Card>
  )
}

export default DialogAddNewAddress
