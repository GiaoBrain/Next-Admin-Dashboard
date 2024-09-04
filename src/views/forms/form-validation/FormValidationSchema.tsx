'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

// Third-party Imports
import { toast } from 'react-toastify'
import { Controller, useForm } from 'react-hook-form'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { email, object, minLength, string } from 'valibot'
import type { Input } from 'valibot'

// Components Imports
import CustomTextField from '@core/components/mui/TextField'

type FormData = Input<typeof schema>

const schema = object({
  firstName: string([
    minLength(1, 'This field is required'),
    minLength(3, 'First Name must be at least 3 characters long')
  ]),
  lastName: string([
    minLength(1, 'This field is required'),
    minLength(3, 'Last Name must be at least 3 characters long')
  ]),
  email: string([minLength(1, 'This field is required'), email('Please enter a valid email address')]),
  password: string([
    minLength(1, 'This field is required'),
    minLength(8, 'Password must be at least 8 characters long')
  ])
})

const FormValidationOnScheme = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  // Hooks
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: valibotResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  })

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const onSubmit = () => toast.success('Form Submitted')

  return (
    <Card>
      <CardHeader title='Validation Schema With OnChange' />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
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
                    {...(errors.firstName && { error: true, helperText: errors.firstName.message })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
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
                    {...(errors.lastName && { error: true, helperText: errors.lastName.message })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
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
                    {...(errors.email && { error: true, helperText: errors.email.message })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
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
                    id='form-validation-scheme-password'
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
                    {...(errors.password && { error: true, helperText: errors.password.message })}
                  />
                )}
              />
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

export default FormValidationOnScheme
