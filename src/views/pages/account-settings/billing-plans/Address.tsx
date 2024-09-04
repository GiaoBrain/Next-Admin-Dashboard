'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import InputAdornment from '@mui/material/InputAdornment'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const Address = () => {
  // States
  const [state, setState] = useState('')

  return (
    <Card>
      <CardHeader title='Billing Address' />
      <CardContent>
        <form>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <CustomTextField fullWidth label='Company Name' variant='outlined' placeholder='Pixinvent' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField fullWidth label='Billing Email' variant='outlined' placeholder='john.doe@example.com' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField fullWidth label='TAX ID' variant='outlined' placeholder='Enter TAX ID' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField fullWidth label='VAT Number' variant='outlined' placeholder='Enter VAT Number' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                type='number'
                label='Mobile Number'
                placeholder='202 555 0111'
                InputProps={{
                  startAdornment: <InputAdornment position='start'>US (+1)</InputAdornment>
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField select fullWidth label='Country' value={state} onChange={e => setState(e.target.value)}>
                <MenuItem value=''>Select Country</MenuItem>
                <MenuItem value='australia'>Australia</MenuItem>
                <MenuItem value='canada'>Canada</MenuItem>
                <MenuItem value='france'>France</MenuItem>
                <MenuItem value='united-kingdom'>United Kingdom</MenuItem>
                <MenuItem value='united-states'>United States</MenuItem>
              </CustomTextField>
            </Grid>
            <Grid item xs={12}>
              <CustomTextField fullWidth label='Billing Address' variant='outlined' placeholder='Billing Address' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField fullWidth label='State' variant='outlined' placeholder='California' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField fullWidth type='number' label='Zip Code' variant='outlined' placeholder='231465' />
            </Grid>
            <Grid item xs={12} className='flex gap-4 flex-wrap'>
              <Button variant='contained'>Save Changes</Button>
              <Button variant='tonal' type='reset' color='secondary' onClick={() => setState('')}>
                Discard
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default Address
