// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import type { ButtonProps } from '@mui/material/Button'

// Component Imports
import ShareProject from '@components/dialogs/share-project'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const DialogShareProject = () => {
  // Vars
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Show'
  }

  return (
    <Card>
      <CardContent className='flex flex-col items-center text-center gap-4'>
        <i className='tabler-file-description text-[34px] text-textPrimary' />
        <Typography variant='h5'>Share Project</Typography>
        <Typography color='text.primary'>
          Elegant Share Project options modal popup example, easy to use in any page.
        </Typography>
        <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={ShareProject} />
      </CardContent>
    </Card>
  )
}

export default DialogShareProject
