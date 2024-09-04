// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// Component Imports
import StepperLinearWithValidation from '@views/forms/form-wizard/StepperLinearWithValidation'
import StepperAlternativeLabel from '@views/forms/form-wizard/StepperAlternativeLabel'
import StepperVerticalWithNumbers from '@views/forms/form-wizard/StepperVerticalWithNumbers'
import StepperVerticalWithoutNumbers from '@views/forms/form-wizard/StepperVerticalWithoutNumbers'
import StepperCustomHorizontal from '@views/forms/form-wizard/StepperCustomHorizontal'
import StepperCustomVertical from '@views/forms/form-wizard/StepperCustomVertical'

const FormWizard = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h4'>Stepper</Typography>
        <Typography>
          Please refer to MUI&#39;s official docs for more details on component&#39;s{' '}
          <Link
            href='https://mui.com/material-ui/react-stepper'
            target='_blank'
            rel='noopener noreferrer'
            className='no-underline text-primary'
          >
            usage guide
          </Link>{' '}
          and{' '}
          <Link
            href='https://mui.com/material-ui/react-stepper/#api'
            target='_blank'
            rel='noopener noreferrer'
            className='no-underline text-primary'
          >
            API documentation
          </Link>
          .
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Linear Stepper with Validation</Typography>
      </Grid>
      <Grid item xs={12}>
        <StepperLinearWithValidation />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Alternative Label</Typography>
      </Grid>
      <Grid item xs={12}>
        <StepperAlternativeLabel />
      </Grid>
      <Grid item xs={12}>
        <StepperVerticalWithNumbers />
      </Grid>
      <Grid item xs={12}>
        <StepperVerticalWithoutNumbers />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Custom Horizontal Stepper</Typography>
      </Grid>
      <Grid item xs={12}>
        <StepperCustomHorizontal />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Custom Vertical Stepper</Typography>
      </Grid>
      <Grid item xs={12}>
        <StepperCustomVertical />
      </Grid>
    </Grid>
  )
}

export default FormWizard
