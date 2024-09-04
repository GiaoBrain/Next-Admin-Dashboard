// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'
import DirectionalIcon from '@components/DirectionalIcon'

type Props = {
  activeStep: number
  isLastStep: boolean
  handleNext: () => void
  handlePrev: () => void
}

const Billing = ({ activeStep, isLastStep, handleNext, handlePrev }: Props) => {
  // States
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  })

  return (
    <div className='flex flex-col gap-6'>
      <Typography variant='h5'>Payment Details</Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <CustomTextField
            fullWidth
            name='number'
            autoComplete='off'
            label='Card Number'
            placeholder='0000 0000 0000 0000'
            value={cardData.number}
            onChange={e => setCardData({ ...cardData, number: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            fullWidth
            name='name'
            label='Name on Card'
            autoComplete='off'
            placeholder='John Doe'
            value={cardData.name}
            onChange={e => setCardData({ ...cardData, name: e.target.value })}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <CustomTextField
            fullWidth
            name='expiry'
            autoComplete='off'
            label='Expiry'
            placeholder='MM/YY'
            value={cardData.expiry}
            onChange={e => setCardData({ ...cardData, expiry: e.target.value })}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <CustomTextField
            fullWidth
            name='cvv'
            label='CVV'
            autoComplete='off'
            placeholder='123'
            value={cardData.cvv}
            onChange={e => setCardData({ ...cardData, cvv: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel control={<Switch defaultChecked />} label='Save Card for future billing?' />
        </Grid>
        <Grid item xs={12} className='flex items-center justify-between'>
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
        </Grid>
      </Grid>
    </div>
  )
}

export default Billing
