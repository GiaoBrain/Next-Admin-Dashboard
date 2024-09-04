'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

// Third-party Imports
import { toast } from 'react-toastify'
import { useForm, Controller } from 'react-hook-form'

// Components Imports
import CustomTextField from '@core/components/mui/TextField'

// Styled Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

type FormValues = {
  firstName: string
  lastName: string
  email: string
  password: string
  dob: Date | null | undefined
  select: string
  textarea: string
  radio: boolean
  checkbox: boolean
}

const FormValidationBasic = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  // Hooks
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      dob: null,
      select: '',
      textarea: '',
      radio: false,
      checkbox: false
    }
  })

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const onSubmit = () => toast.success('Form Submitted')

  return (
    <Card>
      <CardHeader title='Basic' />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <Controller
                name='firstName'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    fullWidth
                    label='First Name'
                    placeholder='John'
                    {...(errors.firstName && { error: true, helperText: 'This field is required.' })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name='lastName'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    fullWidth
                    label='Last Name'
                    placeholder='Doe'
                    {...(errors.lastName && { error: true, helperText: 'This field is required.' })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name='email'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    fullWidth
                    type='email'
                    label='Email'
                    placeholder='johndoe@gmail.com'
                    {...(errors.email && { error: true, helperText: 'This field is required.' })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name='password'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    fullWidth
                    label='Password'
                    placeholder='············'
                    id='form-validation-basic-password'
                    type={isPasswordShown ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={handleClickShowPassword}
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                          >
                            <i className={isPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                    {...(errors.password && { error: true, helperText: 'This field is required.' })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name='dob'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <AppReactDatepicker
                    selected={value}
                    showYearDropdown
                    showMonthDropdown
                    onChange={onChange}
                    placeholderText='MM/DD/YYYY'
                    customInput={
                      <CustomTextField
                        value={value}
                        onChange={onChange}
                        fullWidth
                        label='Date Of Birth'
                        {...(errors.dob && { error: true, helperText: 'This field is required.' })}
                      />
                    }
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name='select'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <CustomTextField select fullWidth label='Country' {...field} error={Boolean(errors.select)}>
                    <MenuItem value=''>Select Country</MenuItem>
                    <MenuItem value='UK'>UK</MenuItem>
                    <MenuItem value='USA'>USA</MenuItem>
                    <MenuItem value='Australia'>Australia</MenuItem>
                    <MenuItem value='Germany'>Germany</MenuItem>
                  </CustomTextField>
                )}
              />
              {errors.select && <FormHelperText error>This field is required.</FormHelperText>}
            </Grid>
            <Grid item xs={12}>
              <Controller
                name='textarea'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    rows={4}
                    fullWidth
                    multiline
                    label='Bio'
                    {...(errors.textarea && { error: true, helperText: 'This field is required.' })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl error={Boolean(errors.radio)}>
                <FormLabel>Gender</FormLabel>
                <Controller
                  name='radio'
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <RadioGroup row {...field} name='radio-buttons-group'>
                      <FormControlLabel value='female' control={<Radio />} label='Female' />
                      <FormControlLabel value='male' control={<Radio />} label='Male' />
                      <FormControlLabel value='other' control={<Radio />} label='Other' />
                    </RadioGroup>
                  )}
                />
                {errors.radio && <FormHelperText error>This field is required.</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl error={Boolean(errors.checkbox)}>
                <Controller
                  name='checkbox'
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormControlLabel control={<Checkbox {...field} />} label='Agree to our terms and conditions' />
                  )}
                />
                {errors.checkbox && <FormHelperText error>This field is required.</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} className='flex gap-4'>
              <Button variant='contained' type='submit'>
                Submit
              </Button>
              <Button variant='tonal' color='secondary' type='reset' onClick={() => reset()}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormValidationBasic
