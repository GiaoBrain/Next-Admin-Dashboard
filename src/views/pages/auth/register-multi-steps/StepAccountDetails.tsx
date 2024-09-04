// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'

// Component Imports
import DirectionalIcon from '@components/DirectionalIcon'
import CustomTextField from '@core/components/mui/TextField'

const StepAccountDetails = ({ handleNext }: { handleNext: () => void }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false)
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState<boolean>(false)

  const handleClickShowPassword = () => {
    setIsPasswordShown(!isPasswordShown)
  }

  const handleClickShowConfirmPassword = () => {
    setIsConfirmPasswordShown(!isConfirmPasswordShown)
  }

  return (
    <>
      <div className='mbe-5'>
        <Typography variant='h4'>Account Information</Typography>
        <Typography>Enter Your Account Details</Typography>
      </div>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <CustomTextField fullWidth label='Username' placeholder='johnDoe' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField fullWidth type='email' label='Email' placeholder='john.deo@gmail.com' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            fullWidth
            label='Password'
            placeholder='············'
            id='outlined-adornment-password'
            type={isPasswordShown ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    onClick={handleClickShowPassword}
                    onMouseDown={e => e.preventDefault()}
                    aria-label='toggle password visibility'
                  >
                    <i className={isPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            fullWidth
            label='Confirm Password'
            placeholder='············'
            id='outlined-confirm-password'
            type={isConfirmPasswordShown ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={e => e.preventDefault()}
                    aria-label='toggle confirm password visibility'
                  >
                    <i className={isConfirmPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField fullWidth label='Profile Link' placeholder='johndoe/profile' />
        </Grid>
        <Grid item xs={12} className='flex justify-between'>
          <Button
            disabled
            variant='tonal'
            color='secondary'
            startIcon={<DirectionalIcon ltrIconClass='tabler-arrow-left' rtlIconClass='tabler-arrow-right' />}
          >
            Previous
          </Button>
          <Button
            variant='contained'
            onClick={handleNext}
            endIcon={<DirectionalIcon ltrIconClass='tabler-arrow-right' rtlIconClass='tabler-arrow-left' />}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default StepAccountDetails
