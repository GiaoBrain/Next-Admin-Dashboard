// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'

// Component Imports
import UpgradePlan from '@components/dialogs/upgrade-plan'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const UserPlan = () => {
  // Vars
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Upgrade Plan'
  }

  return (
    <>
      <Card className='border-2 border-primary rounded shadow-primarySm'>
        <CardContent className='flex flex-col gap-6'>
          <div className='flex justify-between'>
            <Chip label='Standard' size='small' color='primary' variant='tonal' />
            <div className='flex justify-center'>
              <Typography variant='h5' component='sup' className='self-start' color='primary'>
                $
              </Typography>
              <Typography component='span' variant='h1' color='primary'>
                99
              </Typography>
              <Typography component='sub' className='self-end' color='text.primary'>
                /month
              </Typography>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <i className='tabler-circle-filled text-[10px] text-secondary' />
              <Typography component='span'>10 Users</Typography>
            </div>
            <div className='flex items-center gap-2'>
              <i className='tabler-circle-filled text-[10px] text-secondary' />
              <Typography component='span'>Up to 10 GB storage</Typography>
            </div>
            <div className='flex items-center gap-2'>
              <i className='tabler-circle-filled text-[10px] text-secondary' />
              <Typography component='span'>Basic Support</Typography>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center justify-between'>
              <Typography className='font-medium' color='text.primary'>
                Days
              </Typography>
              <Typography className='font-medium' color='text.primary'>
                26 of 30 Days
              </Typography>
            </div>
            <LinearProgress variant='determinate' value={65} />
            <Typography variant='body2'>4 days remaining</Typography>
          </div>
          <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={UpgradePlan} />
        </CardContent>
      </Card>
    </>
  )
}

export default UserPlan
