'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import Stepper from '@mui/material/Stepper'
import MuiStep from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import type { StepProps } from '@mui/material/Step'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { SystemMode } from '@core/types'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'
import DirectionalIcon from '@components/DirectionalIcon'
import Logo from '@components/layout/shared/Logo'
import StepperWrapper from '@core/styles/stepper'
import StepAccountDetails from './StepAccountDetails'
import StepPersonalInfo from './StepPersonalInfo'
import StepBillingDetails from './StepBillingDetails'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'
import { useSettings } from '@core/hooks/useSettings'

// Styled Custom Components
const RegisterIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxBlockSize: 550,
  marginBlock: theme.spacing(12)
}))

const MaskImg = styled('img')({
  blockSize: 'auto',
  maxBlockSize: 250,
  inlineSize: '100%',
  position: 'absolute',
  insetBlockEnd: 0,
  zIndex: -1
})

// Vars
const steps = [
  {
    title: 'Account',
    icon: 'tabler-file-analytics',
    subtitle: 'Enter your Account Details'
  },
  {
    title: 'Personal',
    icon: 'tabler-user',
    subtitle: 'Setup Information'
  },
  {
    title: 'Billing',
    icon: 'tabler-credit-card',
    subtitle: 'Add Social Links'
  }
]

const Step = styled(MuiStep)<StepProps>(({ theme }) => ({
  paddingInline: theme.spacing(7),
  paddingBlock: theme.spacing(1),
  '& + i': {
    color: theme.palette.text.secondary
  },
  '&:first-of-type': {
    paddingInlineStart: 0
  },
  '&:last-of-type': {
    paddingInlineEnd: 0
  },
  '& .MuiStepLabel-iconContainer': {
    display: 'none'
  },
  '&.Mui-completed .step-title, &.Mui-completed .step-subtitle': {
    color: theme.palette.text.disabled
  },
  '&.Mui-completed + i': {
    color: theme.palette.primary.main
  },
  [theme.breakpoints.down('md')]: {
    padding: 0,
    ':not(:last-of-type)': {
      marginBlockEnd: theme.spacing(6)
    }
  }
}))

const getStepContent = (step: number, handleNext: () => void, handlePrev: () => void) => {
  switch (step) {
    case 0:
      return <StepAccountDetails handleNext={handleNext} />
    case 1:
      return <StepPersonalInfo handleNext={handleNext} handlePrev={handlePrev} />
    case 2:
      return <StepBillingDetails handlePrev={handlePrev} />

    default:
      return null
  }
}

const RegisterMultiSteps = ({ mode }: { mode: SystemMode }) => {
  // States
  const [activeStep, setActiveStep] = useState<number>(0)

  // Vars
  const darkImg = '/images/pages/auth-reg-multi-mask-dark.png'
  const lightImg = '/images/pages/auth-reg-multi-mask-light.png'

  // Hooks
  const { settings } = useSettings()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const authBackground = useImageVariant(mode, lightImg, darkImg)

  // Handle Stepper
  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handlePrev = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <div className='flex bs-full justify-between items-center'>
      <div
        className={classnames(
          'flex bs-full items-center justify-center is-[23.75rem] lg:is-[28.125rem] relative p-6 max-lg:hidden',
          {
            'border-ie': settings.skin === 'bordered'
          }
        )}
      >
        <RegisterIllustration
          src='/images/illustrations/characters/7.png'
          alt='character-illustration'
          className={classnames({ 'scale-x-[-1]': theme.direction === 'rtl' })}
        />
        {!isSmallScreen && (
          <MaskImg
            alt='mask'
            src={authBackground}
            className={classnames({ 'scale-x-[-1]': theme.direction === 'rtl' })}
          />
        )}
      </div>
      <div className='flex flex-1 justify-center items-center bs-full bg-backgroundPaper'>
        <div className='absolute block-start-5 sm:block-start-[33px] inline-start-6 sm:inline-start-[38px]'>
          <Logo />
        </div>
        <StepperWrapper className='p-6 sm:p-8 max-is-[46.25rem] mbs-11 sm:mbs-14 lg:mbs-0'>
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
            className='mbe-6 md:mbe-12'
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
                        <i className={classnames(step.icon, 'text-[22px]')} />
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
          {getStepContent(activeStep, handleNext, handlePrev)}
        </StepperWrapper>
      </div>
    </div>
  )
}

export default RegisterMultiSteps
