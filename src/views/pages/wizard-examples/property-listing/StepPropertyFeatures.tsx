// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Chip from '@mui/material/Chip'

// Component Imports
import CustomAutocomplete from '@core/components/mui/Autocomplete'
import CustomTextField from '@core/components/mui/TextField'
import DirectionalIcon from '@components/DirectionalIcon'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}

// Vars
const furnishingArray: string[] = [
  'AC',
  'TV',
  'RO',
  'Bed',
  'WiFi',
  'Sofa',
  'Fridge',
  'Cupboard',
  'Microwave',
  'Dining Table',
  'Washing Machine'
]

const StepPropertyFeatures = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  // States
  const [furnishingDetails, setFurnishingDetails] = useState<string[]>(['Fridge', 'AC', 'TV'])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <CustomTextField fullWidth label='Bedrooms' placeholder='3' />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomTextField fullWidth label='Floor No' placeholder='12' />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomTextField fullWidth label='Bathroom' placeholder='4' />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomTextField select fullWidth id='demo-simple-select' label='Furnished Status' defaultValue=''>
          <MenuItem value=''>Select Furnished Status</MenuItem>
          <MenuItem value='fully-furnished'>Fully Furnished</MenuItem>
          <MenuItem value='furnished'>Furnished</MenuItem>
          <MenuItem value='semi-furnished'>Semi Furnished</MenuItem>
          <MenuItem value='unfurnished'>UnFurnished</MenuItem>
        </CustomTextField>
      </Grid>
      <Grid item xs={12}>
        <CustomAutocomplete
          fullWidth
          multiple
          value={furnishingDetails}
          onChange={(event, value) => setFurnishingDetails(value as string[])}
          id='select-furnishing-details'
          options={furnishingArray}
          defaultValue={furnishingDetails}
          getOptionLabel={option => option || ''}
          renderInput={params => <CustomTextField {...params} label='Furnishing Details' />}
          renderTags={(value: string[], getTagProps) =>
            value.map((option: string, index: number) => (
              <Chip label={option} size='small' {...(getTagProps({ index }) as {})} key={index} />
            ))
          }
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl>
          <FormLabel>Is There Any Common Area</FormLabel>
          <RadioGroup defaultValue='yes'>
            <FormControlLabel value='yes' control={<Radio />} label='Yes' />
            <FormControlLabel value='no' control={<Radio />} label='No' />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl>
          <FormLabel>Is There Any Attached Balcony</FormLabel>
          <RadioGroup defaultValue='yes'>
            <FormControlLabel value='yes' control={<Radio />} label='Yes' />
            <FormControlLabel value='no' control={<Radio />} label='No' />
          </RadioGroup>
        </FormControl>
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

export default StepPropertyFeatures
