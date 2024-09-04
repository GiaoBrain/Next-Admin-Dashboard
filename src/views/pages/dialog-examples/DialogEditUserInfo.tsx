// MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import type { ButtonProps } from '@mui/material/Button'

// Component Imports
import EditUserInfo from '@components/dialogs/edit-user-info'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const DialogEditUserInfo = () => {
  // Vars
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Show'
  }

  return (
    <>
      <Card>
        <CardContent className='flex flex-col items-center text-center gap-4'>
          <i className='tabler-user text-[34px] text-textPrimary' />
          <Typography variant='h5'>Edit User Info</Typography>
          <Typography color='text.primary'>
            Use this modal to modify the existing user&#39;s current information.
          </Typography>
          <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={EditUserInfo} />
        </CardContent>
      </Card>
    </>
  )
}

export default DialogEditUserInfo
