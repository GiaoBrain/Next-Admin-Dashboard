'use client'

// React Imports
import { useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import MenuItem from '@mui/material/MenuItem'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Divider from '@mui/material/Divider'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

// Components Imports
import CustomTextField from '@core/components/mui/TextField'

// Styled Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

type FormDataType = {
  firstName: string
  lastName: string
  country: string
  language: string[]
  date: Date | null
  phoneNumber: string
  username: string
  email: string
  password: string
  isPasswordShown: boolean
  confirmPassword: string
  setIsConfirmPasswordShown: boolean
  twitter: string
  facebook: string
  google: string
  linkedin: string
  instagram: string
  quora: string
}

const FormLayoutsWithTabs = () => {
  // States
  const [value, setValue] = useState('personal_info')

  const [formData, setFormData] = useState<FormDataType>({
    firstName: '',
    lastName: '',
    country: '',
    language: [],
    date: null,
    phoneNumber: '',
    username: '',
    email: '',
    password: '',
    isPasswordShown: false,
    confirmPassword: '',
    setIsConfirmPasswordShown: false,
    twitter: '',
    facebook: '',
    google: '',
    linkedin: '',
    instagram: '',
    quora: ''
  })

  const handleClickShowPassword = () => setFormData(show => ({ ...show, isPasswordShown: !show.isPasswordShown }))

  const handleClickShowConfirmPassword = () =>
    setFormData(show => ({ ...show, setIsConfirmPasswordShown: !show.setIsConfirmPasswordShown }))

  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      country: '',
      language: [],
      date: null,
      phoneNumber: '',
      username: '',
      email: '',
      password: '',
      isPasswordShown: false,
      confirmPassword: '',
      setIsConfirmPasswordShown: false,
      twitter: '',
      facebook: '',
      google: '',
      linkedin: '',
      instagram: '',
      quora: ''
    })
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList variant='scrollable' onChange={handleTabChange} className='border-be'>
          <Tab label='Personal Info' value='personal_info' />
          <Tab label='Account Details' value='account_details' />
          <Tab label='Social Links' value='social_links' />
        </TabList>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent>
            <TabPanel value='personal_info'>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='First Name'
                    placeholder='John'
                    value={formData.firstName}
                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Last Name'
                    placeholder='Doe'
                    value={formData.lastName}
                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    select
                    fullWidth
                    label='Country'
                    value={formData.country}
                    onChange={e => setFormData({ ...formData, country: e.target.value })}
                  >
                    <MenuItem value=''>Select Country</MenuItem>
                    <MenuItem value='UK'>UK</MenuItem>
                    <MenuItem value='USA'>USA</MenuItem>
                    <MenuItem value='Australia'>Australia</MenuItem>
                    <MenuItem value='Germany'>Germany</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    select
                    fullWidth
                    label='Language'
                    value={formData.language}
                    SelectProps={{
                      multiple: true,
                      onChange: e => setFormData({ ...formData, language: e.target.value as string[] })
                    }}
                  >
                    <MenuItem value='English'>English</MenuItem>
                    <MenuItem value='French'>French</MenuItem>
                    <MenuItem value='Spanish'>Spanish</MenuItem>
                    <MenuItem value='Portuguese'>Portuguese</MenuItem>
                    <MenuItem value='Italian'>Italian</MenuItem>
                    <MenuItem value='German'>German</MenuItem>
                    <MenuItem value='Arabic'>Arabic</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <AppReactDatepicker
                    selected={formData.date}
                    showYearDropdown
                    showMonthDropdown
                    onChange={(date: Date) => setFormData({ ...formData, date })}
                    placeholderText='MM/DD/YYYY'
                    customInput={<CustomTextField fullWidth label='Birth Date' placeholder='MM-DD-YYYY' />}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Phone Number'
                    type='number'
                    placeholder='123-456-7890'
                    value={formData.phoneNumber}
                    onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                  />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value='account_details'>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Username'
                    placeholder='johnDoe'
                    value={formData.username}
                    onChange={e => setFormData({ ...formData, username: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    type='email'
                    label='Email'
                    placeholder='johndoe@gmail.com'
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Password'
                    placeholder='············'
                    id='form-layout-tabs-password'
                    type={formData.isPasswordShown ? 'text' : 'password'}
                    value={formData.password}
                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={handleClickShowPassword}
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                          >
                            <i className={formData.isPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Confirm Password'
                    placeholder='············'
                    id='form-layout-tabs-confirm-password'
                    type={formData.setIsConfirmPasswordShown ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                          >
                            <i className={formData.setIsConfirmPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value='social_links'>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Twitter'
                    placeholder='https://twitter.com/johndoe'
                    value={formData.twitter}
                    onChange={e => setFormData({ ...formData, twitter: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Facebook'
                    placeholder='https://facebook.com/johndoe'
                    value={formData.facebook}
                    onChange={e => setFormData({ ...formData, facebook: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Google+'
                    placeholder='https://plus.google.com/johndoe'
                    value={formData.google}
                    onChange={e => setFormData({ ...formData, google: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='LinkedIn'
                    placeholder='https://linkedin.com/johndoe'
                    value={formData.linkedin}
                    onChange={e => setFormData({ ...formData, linkedin: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Instagram'
                    placeholder='https://instagram.com/johndoe'
                    value={formData.instagram}
                    onChange={e => setFormData({ ...formData, instagram: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Quora'
                    placeholder='https://quora.com/johndoe'
                    value={formData.quora}
                    onChange={e => setFormData({ ...formData, quora: e.target.value })}
                  />
                </Grid>
              </Grid>
            </TabPanel>
          </CardContent>
          <Divider />
          <CardActions>
            <Button type='submit' variant='contained' className='mie-2'>
              Submit
            </Button>
            <Button type='reset' variant='tonal' color='secondary' onClick={() => handleReset()}>
              Reset
            </Button>
          </CardActions>
        </form>
      </TabContext>
    </Card>
  )
}

export default FormLayoutsWithTabs
