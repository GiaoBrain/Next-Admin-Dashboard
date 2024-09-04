// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// Component Imports
import FormValidationBasic from '@views/forms/form-validation/FormValidationBasic'
import FormValidationOnSchema from '@views/forms/form-validation/FormValidationSchema'
import FormValidationAsyncSubmit from '@views/forms/form-validation/FormValidationAsyncSubmit'

const FormValidation = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h4'>React Hook Form</Typography>
        <Typography>
          <code>react-hook-form</code> is a third-party library. Please refer to its{' '}
          <Link
            href='https://react-hook-form.com'
            target='_blank'
            rel='noopener noreferrer'
            className='no-underline text-primary'
          >
            official documentation
          </Link>{' '}
          for more details.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormValidationBasic />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormValidationOnSchema />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormValidationAsyncSubmit />
      </Grid>
    </Grid>
  )
}

export default FormValidation
