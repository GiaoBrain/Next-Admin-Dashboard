'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import MuiStep from '@mui/material/Step'
import type { StepProps } from '@mui/material/Step'

// Third-party Imports
import { toast } from 'react-toastify'
import classnames from 'classnames'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'
import DirectionalIcon from '@components/DirectionalIcon'
import CustomTextField from '@core/components/mui/TextField'

// Styles Component Imports
import StepperWrapper from '@core/styles/stepper'

type FormDataType = {
  username: string
  email: string
  password: string
  isPasswordShown: boolean
  confirmPassword: string
  isConfirmPasswordShown: boolean
  firstName: string
  lastName: string
  country: string
  language: string[]
  twitter: string
  facebook: string
  instagram: string
  github: string
}

// Vars
const steps = [
  {
    icon: 'tabler-file-analytics',
    title: 'Account Details',
    subtitle: 'Enter your account details'
  },
  {
    icon: 'tabler-user',
    title: 'Personal Info',
    subtitle: 'Setup Information'
  },
  {
    icon: 'tabler-brand-instagram',
    title: 'Social Links',
    subtitle: 'Add Social Links'
  }
]

const Step = styled(MuiStep)<StepProps>(({ theme }) => ({
  paddingInline: theme.spacing(7),
  '&:first-of-type': {
    paddingLeft: 0
  },
  '&:last-of-type': {
    paddingRight: 0
  },
  '& .MuiStepLabel-iconContainer': {
    display: 'none'
  },
  '&.Mui-completed .step-title , &.Mui-completed .step-subtitle': {
    color: 'var(--mui-palette-text-disabled)'
  },

  [theme.breakpoints.down('md')]: {
    padding: 0,
    ':not(:last-of-type)': {
      marginBlockEnd: theme.spacing(6)
    }
  }
}))

const StepperCustomHorizontal = () => {
  // States
  const [activeStep, setActiveStep] = useState(0)

  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

  const [formData, setFormData] = useState<FormDataType>({
    username: '',
    email: '',
    password: '',
    isPasswordShown: false,
    confirmPassword: '',
    isConfirmPasswordShown: false,
    firstName: '',
    lastName: '',
    country: '',
    language: [],
    twitter: '',
    facebook: '',
    instagram: '',
    github: ''
  })

  const handleClickShowPassword = () => setFormData(show => ({ ...show, isPasswordShown: !show.isPasswordShown }))

  const handleClickShowConfirmPassword = () =>
    setFormData(show => ({ ...show, isConfirmPasswordShown: !show.isConfirmPasswordShown }))

  const handleReset = () => {
    setActiveStep(0)
    setFormData({
      username: '',
      email: '',
      password: '',
      isPasswordShown: false,
      confirmPassword: '',
      isConfirmPasswordShown: false,
      firstName: '',
      lastName: '',
      country: '',
      language: [],
      twitter: '',
      facebook: '',
      instagram: '',
      github: ''
    })
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)

    if (activeStep === steps.length - 1) {
      toast.success('Form Submitted')
    }
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const renderStepContent = (activeStep: number) => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Username'
                placeholder='johnDoe'
                value={formData.username}
                onChange={e => setFormData({ ...formData, username: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                type='email'
                label='Email'
                placeholder='johndoe@gmail.com'
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Password'
                placeholder='············'
                id='stepper-customHorizontal-password'
                type={formData.isPasswordShown ? 'text' : 'password'}
                value={formData.password}
                onChange={e => setFormData({ ...formData, password: e.target.value })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle password visibility'
                      >
                        <i className={formData.isPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
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
                id='stepper-customHorizontal-confirm-password'
                type={formData.isConfirmPasswordShown ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle confirm password visibility'
                      >
                        <i className={formData.isConfirmPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </>
        )
      case 1:
        return (
          <>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='First Name'
                placeholder='John'
                value={formData.firstName}
                onChange={e => setFormData({ ...formData, firstName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Last Name'
                placeholder='Doe'
                value={formData.lastName}
                onChange={e => setFormData({ ...formData, lastName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                select
                fullWidth
                label='Country'
                value={formData.country}
                onChange={e => setFormData({ ...formData, country: e.target.value as string })}
              >
                <MenuItem value=''>Select Country</MenuItem>
                <MenuItem value='UK'>UK</MenuItem>
                <MenuItem value='USA'>USA</MenuItem>
                <MenuItem value='Australia'>Australia</MenuItem>
                <MenuItem value='Germany'>Germany</MenuItem>
              </CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                select
                fullWidth
                label='Language'
                value={formData.language}
                SelectProps={{
                  multiple: true,
                  onChange: e => setFormData({ ...formData, language: e.target.value as string[] })
                }}
              >
                <MenuItem value='English'>English</MenuItem>
                <MenuItem value='French'>French</MenuItem>
                <MenuItem value='Spanish'>Spanish</MenuItem>
                <MenuItem value='Portuguese'>Portuguese</MenuItem>
                <MenuItem value='Italian'>Italian</MenuItem>
                <MenuItem value='German'>German</MenuItem>
                <MenuItem value='Arabic'>Arabic</MenuItem>
              </CustomTextField>
            </Grid>
          </>
        )
      case 2:
        return (
          <>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Facebook'
                placeholder='https://www.facebook.com/johndoe'
                value={formData.facebook}
                onChange={e => setFormData({ ...formData, facebook: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Twitter'
                placeholder='https://www.twitter.com/johndoe'
                value={formData.twitter}
                onChange={e => setFormData({ ...formData, twitter: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Instagram'
                placeholder='https://www.instagram.com/johndoe'
                value={formData.instagram}
                onChange={e => setFormData({ ...formData, instagram: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Github'
                placeholder='https://www.github.com/johndoe'
                value={formData.github}
                onChange={e => setFormData({ ...formData, github: e.target.value })}
              />
            </Grid>
          </>
        )
      default:
        return 'Unknown step'
    }
  }

  return (
    <>
      <Card>
        <CardContent>
          <StepperWrapper>
            <Stepper
              activeStep={activeStep}
              connector={
                !isSmallScreen ? (
                  <DirectionalIcon
                    ltrIconClass='tabler-chevron-right'
                    rtlIconClass='tabler-chevron-left'
                    className='text-xl'
                  />
                ) : null
              }
            >
              {steps.map((step, index) => {
                return (
                  <Step key={index}>
                    <StepLabel>
                      <div className='step-label'>
                        <CustomAvatar
                          variant='rounded'
                          skin={activeStep === index ? 'filled' : 'light'}
                          {...(activeStep >= index && { color: 'primary' })}
                          {...(activeStep === index && { className: 'shadow-primarySm' })}
                          size={38}
                        >
                          <i className={classnames(step.icon)} />
                        </CustomAvatar>
                        <div>
                          <Typography className='step-title'>{step.title}</Typography>
                          <Typography className='step-subtitle'>{step.subtitle}</Typography>
                        </div>
                      </div>
                    </StepLabel>
                  </Step>
                )
              })}
            </Stepper>
          </StepperWrapper>
        </CardContent>
        <Divider sx={{ m: '0 !important' }} />
        <CardContent>
          {activeStep === steps.length ? (
            <>
              <Typography className='mlb-2 mli-1'>All steps are completed!</Typography>
              <div className='flex justify-end mt-4'>
                <Button variant='contained' onClick={handleReset}>
                  Reset
                </Button>
              </div>
            </>
          ) : (
            <>
              <form onSubmit={e => e.preventDefault()}>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <Typography className='font-medium' color='text.primary'>
                      {steps[activeStep].title}
                    </Typography>
                    <Typography variant='body2'>{steps[activeStep].subtitle}</Typography>
                  </Grid>
                  {renderStepContent(activeStep)}
                  <Grid item xs={12} className='flex justify-between'>
                    <Button
                      variant='tonal'
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      startIcon={<DirectionalIcon ltrIconClass='tabler-arrow-left' rtlIconClass='tabler-arrow-right' />}
                      color='secondary'
                    >
                      Back
                    </Button>
                    <Button
                      variant='contained'
                      onClick={handleNext}
                      endIcon={
                        activeStep === steps.length - 1 ? (
                          <i className='tabler-check' />
                        ) : (
                          <DirectionalIcon ltrIconClass='tabler-arrow-right' rtlIconClass='tabler-arrow-left' />
                        )
                      }
                    >
                      {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </>
          )}
        </CardContent>
      </Card>
    </>
  )
}

export default StepperCustomHorizontal
