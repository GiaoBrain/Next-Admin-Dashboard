'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import MuiStep from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import type { StepProps } from '@mui/material/Step'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import Billing from './Billing'
import CustomAvatar from '@core/components/mui/Avatar'
import Details from './Details'
import DialogCloseButton from '../DialogCloseButton'
import Database from './Database'
import FrameWork from './FrameWork'
import Submit from './Submit'

// Styled Component Imports
import StepperWrapper from '@core/styles/stepper'

type CreateAppProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

type stepperProps = {
  icon: string
  title: string
  subtitle: string
  active?: boolean
}

const steps: stepperProps[] = [
  {
    icon: 'tabler-file-text',
    title: 'Details',
    subtitle: 'Enter Details'
  },
  {
    icon: 'tabler-id',
    title: 'FrameWorks',
    subtitle: 'Select Framework',
    active: true
  },
  {
    icon: 'tabler-database',
    title: 'Database',
    subtitle: 'Select Database'
  },
  {
    icon: 'tabler-credit-card',
    title: 'Billing',
    subtitle: 'Payment Details'
  },
  {
    icon: 'tabler-check',
    title: 'Submit',
    subtitle: 'Submit'
  }
]

const Step = styled(MuiStep)<StepProps>({
  '&.Mui-completed .step-title , &.Mui-completed .step-subtitle': {
    color: 'var(--mui-palette-text-disabled)'
  }
})

const renderStepCount = (activeStep: number, isLastStep: boolean, handleNext: () => void, handlePrev: () => void) => {
  const Tag =
    activeStep === 0
      ? Details
      : activeStep === 1
        ? FrameWork
        : activeStep === 2
          ? Database
          : activeStep === 3
            ? Billing
            : Submit

  return <Tag activeStep={activeStep} handleNext={handleNext} handlePrev={handlePrev} isLastStep={isLastStep} />
}

const CreateApp = ({ open, setOpen }: CreateAppProps) => {
  // States
  const [activeStep, setActiveStep] = useState(0)

  const handleClose = () => {
    setOpen(false)
    setActiveStep(0)
  }

  const handleStep = (step: number) => () => {
    setActiveStep(step)
  }

  // Vars
  const isLastStep = activeStep === steps.length - 1

  const handleNext = () => {
    if (!isLastStep) {
      setActiveStep(prevActiveStep => prevActiveStep + 1)
    } else {
      handleClose()
    }
  }

  const handlePrev = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <Dialog
      fullWidth
      maxWidth='md'
      open={open}
      onClose={handleClose}
      scroll='body'
      sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
    >
      <DialogCloseButton onClick={() => setOpen(false)} disableRipple>
        <i className='tabler-x' />
      </DialogCloseButton>
      <DialogTitle variant='h4' className='flex gap-2 flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16'>
        Create App
        <Typography component='span' className='flex flex-col text-center'>
          Provide data with this form to create your app.
        </Typography>
      </DialogTitle>
      <DialogContent className='pbs-0 sm:pli-16 sm:pbe-16'>
        <div className='flex gap-y-6 flex-col md:flex-row md:gap-5'>
          <StepperWrapper>
            <Stepper
              activeStep={activeStep}
              orientation='vertical'
              connector={<></>}
              className='flex flex-col gap-4 min-is-[220px]'
            >
              {steps.map((label, index) => {
                return (
                  <Step key={index} onClick={handleStep(index)}>
                    <StepLabel icon={<></>} className='p-1 cursor-pointer'>
                      <div className='step-label'>
                        <CustomAvatar
                          variant='rounded'
                          skin={activeStep === index ? 'filled' : 'light'}
                          {...(activeStep >= index && { color: 'primary' })}
                          {...(activeStep === index && { className: 'shadow-primarySm' })}
                          size={38}
                        >
                          <i className={classnames(label.icon as string, 'text-[22px]')} />
                        </CustomAvatar>
                        <div className='flex flex-col'>
                          <Typography className='uppercase step-title'>{label.title}</Typography>
                          <Typography className='step-subtitle'>{label.subtitle}</Typography>
                        </div>
                      </div>
                    </StepLabel>
                  </Step>
                )
              })}
            </Stepper>
          </StepperWrapper>
          <div className='flex-1'>{renderStepCount(activeStep, isLastStep, handleNext, handlePrev)}</div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CreateApp
