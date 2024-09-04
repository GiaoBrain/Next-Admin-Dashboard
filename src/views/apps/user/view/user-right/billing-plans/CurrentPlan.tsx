'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import LinearProgress from '@mui/material/LinearProgress'
import type { ButtonProps } from '@mui/material/Button'

// Type Imports
import type { ThemeColor } from '@core/types'
import type { PricingPlanType } from '@/types/pages/pricingTypes'

// Component Imports
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'
import UpgradePlan from '@components/dialogs/upgrade-plan'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const CurrentPlan = ({ data }: { data: PricingPlanType[] }) => {
  const buttonProps = (children: string, variant: ButtonProps['variant'], color: ThemeColor): ButtonProps => ({
    children,
    variant,
    color
  })

  return (
    <Card>
      <CardHeader title='Current Plan' />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} className='flex flex-col gap-4'>
            <div>
              <Typography className='font-medium text-textPrimary'>Your Current Plan is Basic</Typography>
              <Typography>A simple start for everyone</Typography>
            </div>
            <div>
              <Typography className='font-medium' color='text.primary'>
                Active until Dec 09, 2021
              </Typography>
              <Typography>We will send you a notification upon Subscription expiration</Typography>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='flex items-center gap-2'>
                <Typography className='font-medium' color='text.primary'>
                  $99 Per Month
                </Typography>
                <Chip color='primary' label='Popular' size='small' variant='tonal' />
              </div>
              <Typography>Standard plan for small to medium businesses</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Alert icon={false} severity='warning' className='mbe-4'>
              <AlertTitle>We need your attention!</AlertTitle>
              Your plan requires update
            </Alert>
            <div className='flex items-center justify-between'>
              <Typography className='font-medium' color='text.primary'>
                Days
              </Typography>
              <Typography className='font-medium' color='text.primary'>
                26 of 30 Days
              </Typography>
            </div>
            <LinearProgress variant='determinate' value={80} className='mlb-1 bs-2.5' />
            <Typography variant='body2'>Your plan requires update</Typography>
          </Grid>
          <Grid item xs={12} className='flex gap-4 flex-wrap'>
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps('Upgrade plan', 'contained', 'primary')}
              dialog={UpgradePlan}
              dialogProps={{ data: data }}
            />
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps('Cancel Subscription', 'tonal', 'error')}
              dialog={ConfirmationDialog}
              dialogProps={{ type: 'unsubscribe' }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CurrentPlan
