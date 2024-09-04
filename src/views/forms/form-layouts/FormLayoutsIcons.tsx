'use client'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// Components Imports
import CustomTextField from '@core/components/mui/TextField'

const FormLayoutsWithIcon = () => {
  return (
    <Card>
      <CardHeader title='Basic with Icons' />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <CustomTextField
                fullWidth
                label='Name'
                placeholder='John Doe'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='tabler-user' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                fullWidth
                type='email'
                label='Email'
                placeholder='johndoe@gmail.com'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='tabler-mail' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                fullWidth
                label='Phone No.'
                placeholder='123-456-7890'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='tabler-phone' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                fullWidth
                rows={4}
                multiline
                label='Message'
                placeholder='Bio...'
                sx={{ '& .MuiInputBase-root.MuiFilledInput-root': { alignItems: 'baseline' } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='tabler-message' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' type='submit'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsWithIcon
