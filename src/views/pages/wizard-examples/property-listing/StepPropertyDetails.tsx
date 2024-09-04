// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI IMports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import type { TypographyProps } from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { CustomInputVerticalData } from '@core/components/custom-inputs/types'

// Component Imports
import CustomInputVertical from '@core/components/custom-inputs/Vertical'
import CustomTextField from '@core/components/mui/TextField'
import DirectionalIcon from '@components/DirectionalIcon'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}

// Styled Components
const Content = styled(Typography, {
  name: 'MuiCustomInputVertical',
  slot: 'content'
})<TypographyProps>(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center'
}))

// Vars
const data: CustomInputVerticalData[] = [
  {
    value: 'sale',
    title: 'Sell the property',
    content: (
      <Content>
        Post your property for sale.
        <br />
        Unlimited free listing.
      </Content>
    ),
    asset: 'tabler-home',
    isSelected: true
  },
  {
    value: 'rent',
    title: 'Rent the property',
    content: (
      <Content>
        Post your property for sale.
        <br />
        Unlimited free listing.
      </Content>
    ),
    asset: 'tabler-wallet'
  }
]

const StepPropertyDetails = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  // Vars
  const initialSelectedOption: string = data.filter(item => item.isSelected)[
    data.filter(item => item.isSelected).length - 1
  ].value

  // States
  const [selectedOption, setSelectedOption] = useState<string>(initialSelectedOption)

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
            gridProps={{ sm: 6, xs: 12 }}
            selected={selectedOption}
            name='custom-radios-basic'
            handleChange={handleOptionChange}
            data={typeof item.asset === 'string' ? { ...item, asset } : item}
          />
        )
      })}
      <Grid item xs={12} md={6}>
        <CustomTextField select fullWidth label='Property Type' id='validation-property-select' defaultValue=''>
          <MenuItem value=''>Select Property Type</MenuItem>
          <MenuItem value='residential'>Residential</MenuItem>
          <MenuItem value='commercial'>Commercial</MenuItem>
        </CustomTextField>
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomTextField fullWidth type='number' label='Zip Code' placeholder='99950' />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomTextField
          select
          fullWidth
          label='Country'
          id='country-select'
          aria-describedby='country-select'
          defaultValue=''
        >
          <MenuItem value=''>Select Country</MenuItem>
          <MenuItem value='UK'>UK</MenuItem>
          <MenuItem value='USA'>USA</MenuItem>
          <MenuItem value='India'>India</MenuItem>
          <MenuItem value='Australia'>Australia</MenuItem>
          <MenuItem value='Germany'>Germany</MenuItem>
        </CustomTextField>
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomTextField fullWidth label='Landmark' placeholder='Nr. Hard Rock Cafe' />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomTextField fullWidth label='City' placeholder='Los Angeles' />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomTextField fullWidth label='State' placeholder='California' />
      </Grid>
      <Grid item xs={12}>
        <CustomTextField fullWidth multiline minRows={2} label='Address' placeholder='12, Business Park' />
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

export default StepPropertyDetails
