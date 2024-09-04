// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { CustomInputVerticalData } from '@core/components/custom-inputs/types'

// Component Imports
import CustomInputVertical from '@core/components/custom-inputs/Vertical'
import DirectionalIcon from '@components/DirectionalIcon'
import CustomTextField from '@core/components/mui/TextField'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}

// Vars
const data: CustomInputVerticalData[] = [
  {
    title: 'I am the Builder',
    value: 'builder',
    content: 'List property as Builder, list your project and get highest reach very fast.',
    asset: 'tabler-building',
    isSelected: true
  },
  {
    title: 'I am the Owner',
    value: 'owner',
    content: 'Submit property as an Individual. Lease, Rent or Sell at the best price.',
    asset: 'tabler-diamond'
  },
  {
    title: 'I am the broker',
    value: 'broker',
    content: 'Earn highest commission by listing your clients properties at the best price.',
    asset: 'tabler-briefcase'
  }
]

const StepPersonalDetails = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  // Vars
  const initialSelectedOption: string = data.filter(item => item.isSelected)[
    data.filter(item => item.isSelected).length - 1
  ].value

  // States
  const [selectedOption, setSelectedOption] = useState<string>(initialSelectedOption)
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false)

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleOptionChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelectedOption(prop)
    } else {
      setSelectedOption((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <Grid container spacing={6}>
      {data.map((item, index) => {
        let asset

        if (item.asset && typeof item.asset === 'string') {
          asset = <i className={classnames(item.asset, 'text-[28px]')} />
        }

        return (
          <CustomInputVertical
            type='radio'
            key={index}
            gridProps={{ sm: 4, xs: 12 }}
            selected={selectedOption}
            name='custom-radios-basic'
            handleChange={handleOptionChange}
            data={typeof item.asset === 'string' ? { ...item, asset } : item}
          />
        )
      })}
      <Grid item xs={12} md={6}>
        <CustomTextField fullWidth label='First Name' placeholder='John' />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomTextField fullWidth label='Last Name' placeholder='Doe' />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomTextField fullWidth label='Username' placeholder='john.doe' />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomTextField
          fullWidth
          label='Password'
          placeholder='············'
          id='personal-details-password'
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
      <Grid item xs={12} md={6}>
        <CustomTextField fullWidth label='Email' placeholder='john.doe@gmail.com' />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomTextField fullWidth label='Contact' placeholder='202 555 0111' />
      </Grid>
      <Grid item xs={12}>
        <div className='flex items-center justify-between'>
          <Button
            variant='tonal'
            color='secondary'
            disabled={activeStep === 0}
            onClick={handlePrev}
            startIcon={<DirectionalIcon ltrIconClass='tabler-arrow-left' rtlIconClass='tabler-arrow-right' />}
          >
            Previous
          </Button>
          <Button
            variant='contained'
            color={activeStep === steps.length - 1 ? 'success' : 'primary'}
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
        </div>
      </Grid>
    </Grid>
  )
}

export default StepPersonalDetails
