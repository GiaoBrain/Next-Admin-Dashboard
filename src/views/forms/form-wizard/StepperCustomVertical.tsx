'use client'

// React Imports
import type { ChangeEvent } from 'react'
import { Fragment, useState } from 'react'

// MUI Imports
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stepper from '@mui/material/Stepper'
import MenuItem from '@mui/material/MenuItem'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import CardContent from '@mui/material/CardContent'
import MuiStep from '@mui/material/Step'
import type { StepProps } from '@mui/material/Step'
import type { SelectChangeEvent } from '@mui/material/Select'
import type { CardContentProps } from '@mui/material/CardContent'

// Third Party Imports
import { toast } from 'react-toastify'
import classnames from 'classnames'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'
import CustomTextField from '@core/components/mui/TextField'
import DirectionalIcon from '@components/DirectionalIcon'

// Styled Component Imports
import StepperWrapper from '@core/styles/stepper'

interface State {
  password: string
  password2: string
  showPassword: boolean
  showPassword2: boolean
}

const steps = [
  {
    icon: 'tabler-file-analytics',
    title: 'Account Details',
    subtitle: 'Enter your Account Details'
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

const StepperHeaderContainer = styled(CardContent)<CardContentProps>(({ theme }) => ({
  borderRight: `1px solid 'var(--mui-palette-divider)'`,
  [theme.breakpoints.down('md')]: {
    borderRight: 0,
    borderBottom: `1px solid 'var(--mui-palette-divider)'`
  }
}))

const Step = styled(MuiStep)<StepProps>(({ theme }) => ({
  '& .MuiStepLabel-root': {
    paddingTop: 0
  },
  '&:first-of-type .MuiStepLabel-root': {
    paddingTop: theme.spacing(1)
  },
  '&:not(:last-of-type) .MuiStepLabel-root': {
    paddingBottom: theme.spacing(6)
  },
  '&:last-of-type .MuiStepLabel-root': {
    paddingBottom: theme.spacing(1)
  },
  '& .MuiStepLabel-iconContainer': {
    display: 'none'
  },
  '&.Mui-completed .step-title , &.Mui-completed .step-subtitle': {
    color: 'var(--mui-palette-text-disabled)'
  }
}))

const StepperCustomVertical = () => {
  // States
  const [email, setEmail] = useState<string>('')
  const [google, setGoogle] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [twitter, setTwitter] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [facebook, setFacebook] = useState<string>('')
  const [linkedIn, setLinkedIn] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [activeStep, setActiveStep] = useState<number>(0)
  const [language, setLanguage] = useState<string[]>([])

  const [state, setState] = useState<State>({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })

  // Handle Stepper
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)

    if (activeStep === steps.length - 1) {
      toast.success('Form Submitted')
    }
  }

  const handleReset = () => {
    setEmail('')
    setGoogle('')
    setCountry('')
    setTwitter('')
    setUsername('')
    setLastName('')
    setFacebook('')
    setLinkedIn('')
    setLanguage([])
    setFirstName('')
    setActiveStep(0)
    setState({ ...state, password: '', password2: '' })
  }

  // Handle Password
  const handlePasswordChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword })
  }

  // Handle Confirm Password
  const handleConfirmChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [prop]: event.target.value })
  }

  const handleClickShowConfirmPassword = () => {
    setState({ ...state, showPassword2: !state.showPassword2 })
  }

  // Handle Language
  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    setLanguage(event.target.value as string[])
  }

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Fragment>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Username'
                value={username}
                placeholder='JohnDoe'
                onChange={e => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                type='email'
                label='Email'
                value={email}
                placeholder='johndoe@gmail.com'
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Password'
                placeholder='············'
                value={state.password}
                id='stepper-custom-vertical-account-password'
                onChange={handlePasswordChange('password')}
                type={state.showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle password visibility'
                      >
                        <i className={state.showPassword ? 'tabler-eye' : 'tabler-eye-off'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                value={state.password2}
                label='Confirm Password'
                placeholder='············'
                id='stepper-custom-vertical-account-password-2'
                onChange={handleConfirmChange('password2')}
                type={state.showPassword2 ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle password visibility'
                        onClick={handleClickShowConfirmPassword}
                      >
                        <i className={state.showPassword2 ? 'tabler-eye' : 'tabler-eye-off'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Fragment>
        )
      case 1:
        return (
          <Fragment key={step}>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                value={firstName}
                label='First Name'
                placeholder='John'
                onChange={e => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                value={lastName}
                label='Last Name'
                placeholder='Doe'
                onChange={e => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                select
                fullWidth
                label='Country'
                value={country}
                onChange={e => setCountry(e.target.value)}
                id='stepper-custom-vertical-personal-select'
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
                id='stepper-custom-vertical-personal-multiple-select'
                SelectProps={{
                  multiple: true,
                  value: language,
                  onChange: e => handleSelectChange(e as SelectChangeEvent<string[]>)
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
          </Fragment>
        )
      case 2:
        return (
          <Fragment key={step}>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Twitter'
                value={twitter}
                onChange={e => setTwitter(e.target.value)}
                placeholder='https://twitter.com/johndoe'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Facebook'
                value={facebook}
                onChange={e => setFacebook(e.target.value)}
                placeholder='https://facebook.com/johndoe'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Google+'
                value={google}
                onChange={e => setGoogle(e.target.value)}
                placeholder='https://plus.google.com/johndoe'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='LinkedIn'
                value={linkedIn}
                onChange={e => setLinkedIn(e.target.value)}
                placeholder='https://linkedin.com/johndoe'
              />
            </Grid>
          </Fragment>
        )
      default:
        return 'Unknown Step'
    }
  }

  const renderContent = () => {
    if (activeStep === steps.length) {
      return (
        <>
          <Typography>All steps are completed!</Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant='contained' onClick={handleReset}>
              Reset
            </Button>
          </Box>
        </>
      )
    } else {
      return (
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                {steps[activeStep].title}
              </Typography>
              <Typography variant='caption' component='p'>
                {steps[activeStep].subtitle}
              </Typography>
            </Grid>
            {getStepContent(activeStep)}
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant='tonal'
                color='secondary'
                disabled={activeStep === 0}
                onClick={handleBack}
                startIcon={<DirectionalIcon ltrIconClass='tabler-arrow-left' rtlIconClass='tabler-arrow-right' />}
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
      )
    }
  }

  return (
    <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <StepperHeaderContainer>
        <StepperWrapper sx={{ height: '100%' }}>
          <Stepper
            activeStep={activeStep}
            orientation='vertical'
            connector={<></>}
            sx={{ height: '100%', minWidth: '15rem' }}
          >
            {steps.map((step, index) => {
              // const RenderAvatar = activeStep >= index ? CustomAvatar : Avatar

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
      </StepperHeaderContainer>
      <Divider sx={{ m: '0 !important' }} />
      <CardContent sx={{ width: '100%' }}>{renderContent()}</CardContent>
    </Card>
  )
}

export default StepperCustomVertical
