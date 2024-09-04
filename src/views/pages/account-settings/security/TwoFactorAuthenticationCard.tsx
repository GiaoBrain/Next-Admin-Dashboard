// MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import type { ButtonProps } from '@mui/material/Button'

// Type Imports
import Link from '@components/Link'

// Component Imports
import TwoFactorAuth from '@components/dialogs/two-factor-auth'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const TwoFactorAuthenticationCard = () => {
  // Vars
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Enable two-factor authentication'
  }

  return (
    <>
      <Card>
        <CardHeader title='Two-steps verification' />
        <CardContent className='flex flex-col items-start gap-6'>
          <div className='flex flex-col gap-4'>
            <Typography variant='h5' color='text.secondary'>
              Two factor authentication is not enabled yet.
            </Typography>
            <Typography>
              Two-factor authentication adds an additional layer of security to your account by requiring more than just
              a password to log in.
              <Link className='text-primary'>Learn more.</Link>
            </Typography>
          </div>
          <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={TwoFactorAuth} />
        </CardContent>
      </Card>
    </>
  )
}

export default TwoFactorAuthenticationCard
