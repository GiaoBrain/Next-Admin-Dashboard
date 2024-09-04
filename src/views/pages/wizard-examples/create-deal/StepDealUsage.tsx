// MUI Imports
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'
import DirectionalIcon from '@components/DirectionalIcon'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}

const StepDealUsage = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6}>
        <CustomTextField select fullWidth label='User Type' defaultValue=''>
          <MenuItem value=''>Select User Type</MenuItem>
          <MenuItem value='all'>All</MenuItem>
          <MenuItem value='registered'>Registered</MenuItem>
          <MenuItem value='unregistered'>Unregistered</MenuItem>
          <MenuItem value='prime-members'>Prime Members</MenuItem>
        </CustomTextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField fullWidth type='number' label='Max Users' placeholder='500' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField fullWidth type='number' label='Minimum Cart Amount' placeholder='$99' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField fullWidth type='number' label='Promotional Fee' placeholder='$9' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField select fullWidth label='Payment Method' defaultValue=''>
          <MenuItem value=''>Select Payment Method</MenuItem>
          <MenuItem value='any'>Any</MenuItem>
          <MenuItem value='credit-card'>Credit Card</MenuItem>
          <MenuItem value='net-banking'>Net Banking</MenuItem>
          <MenuItem value='wallet'>Wallet</MenuItem>
        </CustomTextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField select fullWidth label='Deal Status' defaultValue=''>
          <MenuItem value=''>Select Deal Status</MenuItem>
          <MenuItem value='active'>Active</MenuItem>
          <MenuItem value='inactive'>Inactive</MenuItem>
          <MenuItem value='suspended'>Suspended</MenuItem>
          <MenuItem value='abandoned'>Abandoned</MenuItem>
        </CustomTextField>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel control={<Switch />} label='Limit this discount to a single-use per customer?' />
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

export default StepDealUsage
