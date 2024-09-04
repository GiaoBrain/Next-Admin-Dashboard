'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const CreateApiKey = () => {
  return (
    <Card>
      <CardHeader title='Create an API Key' />
      <CardContent className='!pb-0'>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <form className='flex justify-end items-end bs-full flex-col gap-5 pbe-6'>
              <CustomTextField select fullWidth label='Choose the API key type you want to create' defaultValue=''>
                <MenuItem value='full-control'>Full Control</MenuItem>
                <MenuItem value='modify'>Modify</MenuItem>
                <MenuItem value='read-execute'>Read & Execute</MenuItem>
                <MenuItem value='list-folder-contents'>List Folder Contents</MenuItem>
                <MenuItem value='read-only'>Read Only</MenuItem>
                <MenuItem value='read-write'>Read & Write</MenuItem>
              </CustomTextField>
              <CustomTextField label='Name the API key' placeholder='Server key 1' fullWidth />
              <Button variant='contained' fullWidth>
                Create Key
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6} className='flex items-end justify-center '>
            <img src='/images/illustrations/characters/4.png' width={197} height={224} alt='api illustration' />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CreateApiKey
