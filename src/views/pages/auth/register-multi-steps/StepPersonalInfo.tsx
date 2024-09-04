// MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import InputAdornment from '@mui/material/InputAdornment'

// Component Imports
import DirectionalIcon from '@components/DirectionalIcon'
import CustomTextField from '@core/components/mui/TextField'

const StepPersonalInfo = ({ handleNext, handlePrev }: { handleNext: () => void; handlePrev: () => void }) => {
  return (
    <>
      <div className='mbe-5'>
        <Typography variant='h4'>Personal Information</Typography>
        <Typography>Enter Your Personal Information</Typography>
      </div>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <CustomTextField fullWidth label='First Name' placeholder='John' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField fullWidth label='Last Name' placeholder='Doe' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            fullWidth
            type='number'
            label='Mobile'
            placeholder='202 555 0111'
            InputProps={{
              startAdornment: <InputAdornment position='start'>US (+1)</InputAdornment>
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField fullWidth type='number' label='Pin Code' placeholder='689421' />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField fullWidth label='Address' placeholder='1456, Liberty Street' />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField fullWidth label='Landmark' placeholder='Nr. Wall Street' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField fullWidth label='City' placeholder='Miami' />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField select fullWidth label='State' defaultValue='new-york'>
            <MenuItem value='new-york'>New York</MenuItem>
            <MenuItem value='california'>California</MenuItem>
            <MenuItem value='texas'>Texas</MenuItem>
            <MenuItem value='florida'>Florida</MenuItem>
            <MenuItem value='washington'>Washington</MenuItem>
          </CustomTextField>
        </Grid>
        <Grid item xs={12} className='flex justify-between'>
          <Button
            variant='tonal'
            color='secondary'
            onClick={handlePrev}
            startIcon={<DirectionalIcon ltrIconClass='tabler-arrow-left' rtlIconClass='tabler-arrow-right' />}
          >
            Previous
          </Button>
          <Button
            variant='contained'
            onClick={handleNext}
            endIcon={<DirectionalIcon ltrIconClass='tabler-arrow-right' rtlIconClass='tabler-arrow-left' />}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default StepPersonalInfo
