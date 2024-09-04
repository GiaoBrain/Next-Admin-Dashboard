// MUI Imports
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'
import DirectionalIcon from '@components/DirectionalIcon'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}

const StepPriceDetails = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <CustomTextField
          fullWidth
          type='number'
          placeholder='25,000'
          label='Expected Price'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <i className='tabler-currency-dollar' />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomTextField
          fullWidth
          type='number'
          placeholder='500'
          label='Price Per SQFT'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <i className='tabler-currency-dollar' />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomTextField
          fullWidth
          type='number'
          placeholder='50'
          label='Maintenance Charge'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <i className='tabler-currency-dollar' />
              </InputAdornment>
            )
          }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <CustomTextField select fullWidth label='Maintenance Period' defaultValue=''>
          <MenuItem value=''>Select Maintenance Period</MenuItem>
          <MenuItem value='monthly'>Monthly</MenuItem>
          <MenuItem value='quarterly'>Quarterly</MenuItem>
          <MenuItem value='half-yearly'>Half Yearly</MenuItem>
          <MenuItem value='yearly'>Yearly</MenuItem>
          <MenuItem value='one-time'>One-time</MenuItem>
        </CustomTextField>
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomTextField
          fullWidth
          type='number'
          placeholder='250'
          label='Booking/Token Amount'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <i className='tabler-currency-dollar' />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomTextField
          fullWidth
          type='number'
          placeholder='500'
          label='Other Amount'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <i className='tabler-currency-dollar' />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl>
          <FormLabel id='price-radio'>Show Price As</FormLabel>
          <RadioGroup name='price-group' defaultValue='negotiable' aria-labelledby='price-radio'>
            <FormControlLabel value='negotiable' control={<Radio />} label='Negotiable' />
            <FormControlLabel value='call-for-price' control={<Radio />} label='Call For Price' />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl>
          <FormLabel>Price Includes</FormLabel>
          <FormControlLabel control={<Checkbox defaultChecked />} label='Car Parking' />
          <FormControlLabel control={<Checkbox />} label='Club Membership' />
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

export default StepPriceDetails
