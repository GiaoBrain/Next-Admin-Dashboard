// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import type { ButtonProps } from '@mui/material/Button'

// Component Imports
import CreateApp from '@components/dialogs/create-app'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const DialogCreateApp = () => {
  // Vars
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Show'
  }

  return (
    <>
      <Card>
        <CardContent className='flex flex-col items-center text-center gap-4'>
          <i className='tabler-box text-[34px] text-textPrimary' />
          <Typography variant='h5'>Create App</Typography>
          <Typography color='text.primary'>
            Provide application data with this form to create the app dialog popup example, easy to use in any page.
          </Typography>
          <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={CreateApp} />
        </CardContent>
      </Card>
    </>
  )
}

export default DialogCreateApp
