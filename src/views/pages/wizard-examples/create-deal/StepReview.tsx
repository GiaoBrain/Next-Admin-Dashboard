// MUI Imports
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import DirectionalIcon from '@components/DirectionalIcon'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}

const StepReview = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  // Hooks
  const theme = useTheme()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={6}>
        <Typography variant='h4' className='mb-4'>
          Almost done! 🚀
        </Typography>
        <Typography className='mb-4'>Confirm your deal details information and submit to create it.</Typography>
        <table className='is-full border-collapse'>
          <tbody>
            <tr>
              <td className='pbe-2'>
                <Typography className='font-medium'>Deal Type</Typography>
              </td>
              <td className='pbe-2'>
                <Typography>Percentage</Typography>
              </td>
            </tr>
            <tr>
              <td className='pbe-2'>
                <Typography className='font-medium'>Amount</Typography>
              </td>
              <td className='pbe-2'>
                <Typography>25% </Typography>
              </td>
            </tr>
            <tr>
              <td className='pbe-2'>
                <Typography className='font-medium'>Deal Code</Typography>
              </td>
              <td className='pbe-2'>
                <Chip variant='tonal' label='25PEROFF' color='warning' />
              </td>
            </tr>
            <tr>
              <td className='pbe-2'>
                <Typography className='font-medium'>Deal Title</Typography>
              </td>
              <td className='pbe-2'>
                <Typography>Black friday sale, 25% OFF </Typography>
              </td>
            </tr>
            <tr>
              <td className='pbe-2'>
                <Typography className='font-medium'>Deal Duration</Typography>
              </td>
              <td className='pbe-2'>
                <Typography>2021-07-14 to 2021-07-30 </Typography>
              </td>
            </tr>
          </tbody>
        </table>
        <FormControlLabel control={<Switch />} label='I have confirmed the deal details.' />
      </Grid>
      <Grid item lg={6} xs={12}>
        <div className='flex justify-center items-end border rounded is-full bs-auto pbs-3'>
          <img
            alt='review-illustration'
            src='/images/illustrations/characters/6.png'
            className={classnames({ 'scale-x-[-1]': theme.direction === 'rtl' }, 'bs-[230px] lg:bs-[257px]')}
          />
        </div>
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

export default StepReview
