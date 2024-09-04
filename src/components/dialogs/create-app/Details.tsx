// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Radio from '@mui/material/Radio'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'
import CustomTextField from '@core/components/mui/TextField'
import DirectionalIcon from '@components/DirectionalIcon'

// Config Imports
import themeConfig from '@configs/themeConfig'

type Props = {
  activeStep: number
  isLastStep: boolean
  handleNext: () => void
  handlePrev: () => void
}

const Details = ({ activeStep, isLastStep, handleNext, handlePrev }: Props) => {
  // States
  const [value, setValue] = useState<string>('crm')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className='flex flex-col gap-6'>
      <CustomTextField fullWidth label='Application Name' placeholder={`${themeConfig.templateName}`} />
      <div className='flex flex-col gap-4'>
        <Typography variant='h5'>Category</Typography>
        <div onClick={() => setValue('crm')} className='flex items-center justify-between cursor-pointer gap-4'>
          <div className='flex items-center gap-3'>
            <CustomAvatar skin='light' color='info' variant='rounded' size={46}>
              <i className='tabler-file-text text-3xl' />
            </CustomAvatar>
            <div className='flex flex-col gap-1'>
              <Typography color='text.primary' className='font-medium'>
                CRM Application
              </Typography>
              <Typography variant='body2'>Scales with any business</Typography>
            </div>
          </div>
          <Radio value='crm' onChange={handleChange} checked={value === 'crm'} />
        </div>
        <div onClick={() => setValue('eCommerce')} className='flex items-center justify-between cursor-pointer gap-4'>
          <div className='flex items-center gap-3'>
            <CustomAvatar skin='light' color='success' variant='rounded' size={46}>
              <i className='tabler-shopping-cart text-3xl' />
            </CustomAvatar>
            <div className='flex flex-col gap-1'>
              <Typography color='text.primary' className='font-medium'>
                eCommerce Platforms
              </Typography>
              <Typography variant='body2'>Grow Your Business With App</Typography>
            </div>
          </div>
          <Radio value='eCommerce' onChange={handleChange} checked={value === 'eCommerce'} />
        </div>
        <div onClick={() => setValue('learning')} className='flex items-center justify-between cursor-pointer gap-4'>
          <div className='flex items-center gap-3'>
            <CustomAvatar skin='light' color='error' variant='rounded' size={46}>
              <i className='tabler-device-laptop text-3xl' />
            </CustomAvatar>
            <div className='flex flex-col gap-1'>
              <Typography color='text.primary' className='font-medium'>
                Online Learning platform
              </Typography>
              <Typography variant='body2'>Start learning today</Typography>
            </div>
          </div>
          <Radio value='learning' onChange={handleChange} checked={value === 'learning'} />
        </div>
      </div>
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
          color={isLastStep ? 'success' : 'primary'}
          onClick={handleNext}
          endIcon={
            isLastStep ? (
              <i className='tabler-check' />
            ) : (
              <DirectionalIcon ltrIconClass='tabler-arrow-right' rtlIconClass='tabler-arrow-left' />
            )
          }
        >
          {isLastStep ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  )
}

export default Details
