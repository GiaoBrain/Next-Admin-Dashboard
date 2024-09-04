'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Step from '@mui/material/Step'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import StepContent from '@mui/material/StepContent'

// Third-party Imports
import { toast } from 'react-toastify'
import classNames from 'classnames'

// Component Imports
import StepperWrapper from '@core/styles/stepper'
import StepperCustomDot from '@components/stepper-dot'

// Vars
const steps = [
  {
    title: 'Account Details',
    subtitle: 'Enter your Account Details',
    description:
      'Chocolate cookie lollipop toffee candy canes marzipan liquorice chocolate. Cake gummi bears dessert lollipop apple pie candy. Candy pie sesame snaps lollipop biscuit chocolate cake fruitcake apple pie. Toffee carrot cake biscuit oat cake jujubes fruitcake biscuit gummi bears. Cake carrot cake jujubes sugar plum pastry gummi bears gingerbread icing. Lemon drops pie cake. Halvah marzipan bonbon gingerbread cupcake pastry gummi bears cake jujubes.'
  },
  {
    title: 'Personal Info',
    subtitle: 'Setup Information',
    description:
      'Lemon drops ice cream danish macaroon bear claw cookie. Liquorice ice cream chocolate bar pastry chocolate bar candy. Caramels candy canes marshmallow soufflé biscuit tart fruitcake tiramisu. Gummi bears icing gingerbread pastry bonbon gummies candy canes pastry. Candy canes chocolate chupa chups cake cheesecake apple pie halvah dessert. Chupa chups wafer tootsie roll fruitcake lemon drops cookie donut topping powder.'
  },
  {
    title: 'Social Links',
    subtitle: 'Add Social Links',
    description:
      'Jelly lollipop halvah bear claw jujubes macaroon candy canes. Soufflé halvah lollipop liquorice macaroon powder. Cookie topping pastry oat cake caramels bonbon. Sesame snaps sweet cookie macaroon soufflé pudding. Chocolate donut macaroon muffin donut biscuit marzipan halvah. Bear claw biscuit chocolate cake chupa chups oat cake bear claw cupcake tiramisu apple pie. Carrot cake bear claw marshmallow sweet pudding toffee.'
  }
]

const StepperVerticalWithNumbers = () => {
  // States
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)

    if (activeStep === steps.length - 1) {
      toast.success('Completed All Steps!!')
    }
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Card>
      <CardHeader title='Vertical Stepper with Numbers' />
      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep} orientation='vertical'>
            {steps.map((step, index) => (
              <Step key={index} className={classNames({ active: activeStep === index })}>
                <StepLabel StepIconComponent={StepperCustomDot}>
                  <div className='step-label'>
                    <Typography className='step-number'>{`0${index + 1}`}</Typography>
                    <div>
                      <Typography className='step-title'>{step.title}</Typography>
                      <Typography className='step-subtitle'>{step.subtitle}</Typography>
                    </div>
                  </div>
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <div className='flex gap-4 mt-4'>
                    <Button variant='contained' onClick={handleNext} size='small'>
                      {index === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                    <Button size='small' color='secondary' variant='tonal' onClick={handleBack} disabled={index === 0}>
                      Back
                    </Button>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </StepperWrapper>
        {activeStep === steps.length && (
          <div className='mt-2'>
            <Typography>All steps are completed!</Typography>
            <Button variant='contained' onClick={handleReset} size='small' className='mt-2'>
              Reset
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default StepperVerticalWithNumbers
