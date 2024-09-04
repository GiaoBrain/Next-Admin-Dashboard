'use client'

// React Imports
import { useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import InputLabel from '@mui/material/InputLabel'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { InvoiceType } from '@/types/apps/invoiceTypes'
import type { FormDataType } from './AddCustomerDrawer'

// Component Imports
import AddCustomerDrawer, { initialFormData } from './AddCustomerDrawer'
import Logo from '@components/layout/shared/Logo'
import CustomTextField from '@core/components/mui/TextField'

// Styled Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

const AddAction = ({ invoiceData }: { invoiceData: InvoiceType[] }) => {
  // States
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(1)
  const [selectData, setSelectData] = useState<InvoiceType | null>(null)
  const [issuedDate, setIssuedDate] = useState<Date | null | undefined>(null)
  const [dueDate, setDueDate] = useState<Date | null | undefined>(null)
  const [formData, setFormData] = useState<FormDataType>(initialFormData)

  // Hooks
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const onFormSubmit = (data: FormDataType) => {
    setFormData(data)
  }

  const deleteForm = (e: SyntheticEvent) => {
    e.preventDefault()

    // @ts-ignore
    e.target.closest('.repeater-item').remove()
  }

  return (
    <>
      <Card>
        <CardContent className='sm:!p-12'>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <div className='p-6 bg-actionHover rounded'>
                <div className='flex justify-between gap-4 flex-col sm:flex-row'>
                  <div className='flex flex-col gap-6'>
                    <div className='flex items-center gap-2.5'>
                      <Logo />
                    </div>
                    <div>
                      <Typography color='text.primary'>Office 149, 450 South Brand Brooklyn</Typography>
                      <Typography color='text.primary'>San Diego County, CA 91905, USA</Typography>
                      <Typography color='text.primary'>+1 (123) 456 7891, +44 (876) 543 2198</Typography>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-4'>
                      <Typography variant='h5' className='min-is-[95px]'>
                        Invoice
                      </Typography>
                      <CustomTextField
                        fullWidth
                        value={invoiceData[0].id}
                        InputProps={{
                          disabled: true,
                          startAdornment: <InputAdornment position='start'>#</InputAdornment>
                        }}
                      />
                    </div>
                    <div className='flex items-center'>
                      <Typography className='min-is-[95px] mie-4' color='text.primary'>
                        Date Issued:
                      </Typography>
                      <AppReactDatepicker
                        boxProps={{ className: 'is-full' }}
                        selected={issuedDate}
                        placeholderText='YYYY-MM-DD'
                        dateFormat={'yyyy-MM-dd'}
                        onChange={(date: Date) => setIssuedDate(date)}
                        customInput={<CustomTextField fullWidth />}
                      />
                    </div>
                    <div className='flex items-center'>
                      <Typography className='min-is-[95px] mie-4' color='text.primary'>
                        Date Due:
                      </Typography>
                      <AppReactDatepicker
                        boxProps={{ className: 'is-full' }}
                        selected={dueDate}
                        placeholderText='YYYY-MM-DD'
                        dateFormat={'yyyy-MM-dd'}
                        onChange={(date: Date) => setDueDate(date)}
                        customInput={<CustomTextField fullWidth />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className='flex justify-between flex-col gap-4 flex-wrap sm:flex-row'>
                <div className='flex flex-col gap-4'>
                  <Typography className='font-medium' color='text.primary'>
                    Invoice To:
                  </Typography>
                  <CustomTextField
                    select
                    className={classnames('min-is-[220px]', { 'is-1/2': isBelowSmScreen })}
                    value={selectData?.id || ''}
                    onChange={e => {
                      setFormData({} as FormDataType)
                      setSelectData(invoiceData.slice(0, 5).filter(item => item.id === e.target.value)[0])
                    }}
                  >
                    <MenuItem
                      className='flex items-center gap-2 !text-success !bg-transparent hover:text-success hover:!bg-[var(--mui-palette-success-lightOpacity)]'
                      value=''
                      onClick={() => {
                        setSelectData(null)
                        setOpen(true)
                      }}
                    >
                      <i className='tabler-plus text-base' />
                      Add New Customer
                    </MenuItem>
                    {invoiceData.slice(0, 5).map((invoice: InvoiceType, index) => (
                      <MenuItem key={index} value={invoice.id}>
                        {invoice.name}
                      </MenuItem>
                    ))}
                  </CustomTextField>
                  {selectData?.id ? (
                    <div>
                      <Typography>{selectData?.name}</Typography>
                      <Typography>{selectData?.company}</Typography>
                      <Typography>{selectData?.address}</Typography>
                      <Typography>{selectData?.contact}</Typography>
                      <Typography>{selectData?.companyEmail}</Typography>
                    </div>
                  ) : (
                    <div>
                      <Typography>{formData?.name}</Typography>
                      <Typography>{formData?.company}</Typography>
                      <Typography>{formData?.address}</Typography>
                      <Typography>{formData?.contactNumber}</Typography>
                      <Typography>{formData?.email}</Typography>
                    </div>
                  )}
                </div>
                <div className='flex flex-col gap-4'>
                  <Typography className='font-medium' color='text.primary'>
                    Bill To:
                  </Typography>
                  <div>
                    <div className='flex items-center gap-4'>
                      <Typography className='min-is-[100px]'>Total Due:</Typography>
                      <Typography>$12,110.55</Typography>
                    </div>
                    <div className='flex items-center gap-4'>
                      <Typography className='min-is-[100px]'>Bank name:</Typography>
                      <Typography>American Bank</Typography>
                    </div>
                    <div className='flex items-center gap-4'>
                      <Typography className='min-is-[100px]'>Country:</Typography>
                      <Typography>United States</Typography>
                    </div>
                    <div className='flex items-center gap-4'>
                      <Typography className='min-is-[100px]'>IBAN:</Typography>
                      <Typography>ETD95476213874685</Typography>
                    </div>
                    <div className='flex items-center gap-4'>
                      <Typography className='min-is-[100px]'>SWIFT code:</Typography>
                      <Typography>BR91905</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <Divider className='border-dashed' />
            </Grid>
            <Grid item xs={12}>
              {Array.from(Array(count).keys()).map((item, index) => (
                <div
                  key={index}
                  className={classnames('repeater-item flex relative mbe-4 border rounded', {
                    'mbs-8': !isBelowMdScreen,
                    '!mbs-14': index !== 0 && !isBelowMdScreen,
                    'gap-5': isBelowMdScreen
                  })}
                >
                  <Grid container spacing={5} className='m-0 pbe-5'>
                    <Grid item lg={6} md={5} xs={12}>
                      <Typography className='font-medium md:absolute md:-top-8' color='text.primary'>
                        Item
                      </Typography>
                      <CustomTextField select fullWidth defaultValue='App Design' className='mbe-5'>
                        <MenuItem value='App Design'>App Design</MenuItem>
                        <MenuItem value='App Customization'>App Customization</MenuItem>
                        <MenuItem value='ABC Template'>ABC Template</MenuItem>
                        <MenuItem value='App Development'>App Development</MenuItem>
                      </CustomTextField>
                      <CustomTextField rows={2} fullWidth multiline defaultValue='Customization & Bug Fixes' />
                    </Grid>
                    <Grid item lg={2} md={3} xs={12}>
                      <Typography className='font-medium md:absolute md:-top-8'>Cost</Typography>
                      <CustomTextField
                        {...(isBelowMdScreen && { fullWidth: true })}
                        type='number'
                        placeholder='24'
                        defaultValue='24'
                        className='mbe-5'
                        InputProps={{ inputProps: { min: 0 } }}
                      />
                      <div className='flex flex-col'>
                        <Typography component='span' color='text.primary'>
                          Discount:
                        </Typography>
                        <div className='flex gap-2'>
                          <Typography component='span' color='text.primary'>
                            0%
                          </Typography>
                          <Tooltip title='Tax 1' placement='top'>
                            <Typography component='span' color='text.primary'>
                              0%
                            </Typography>
                          </Tooltip>
                          <Tooltip title='Tax 2' placement='top'>
                            <Typography component='span' color='text.primary'>
                              0%
                            </Typography>
                          </Tooltip>
                        </div>
                      </div>
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <Typography className='font-medium md:absolute md:-top-8'>Hours</Typography>
                      <CustomTextField
                        {...(isBelowMdScreen && { fullWidth: true })}
                        type='number'
                        placeholder='1'
                        defaultValue='1'
                        InputProps={{ inputProps: { min: 0 } }}
                      />
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <Typography className='font-medium md:absolute md:-top-8'>Price</Typography>
                      <Typography>$24.00</Typography>
                    </Grid>
                  </Grid>
                  <div className='flex flex-col justify-start border-is'>
                    <IconButton size='small' onClick={deleteForm}>
                      <i className='tabler-x text-actionActive' />
                    </IconButton>
                  </div>
                </div>
              ))}
              <Grid item xs={12}>
                <Button
                  size='small'
                  variant='contained'
                  onClick={() => setCount(count + 1)}
                  startIcon={<i className='tabler-plus' />}
                >
                  Add Item
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider className='border-dashed' />
            </Grid>
            <Grid item xs={12}>
              <div className='flex justify-between flex-col gap-4 sm:flex-row'>
                <div className='flex flex-col gap-4 order-2 sm:order-[unset]'>
                  <div className='flex items-center gap-2'>
                    <Typography className='font-medium' color='text.primary'>
                      Salesperson:
                    </Typography>
                    <CustomTextField defaultValue='Tommy Shelby' />
                  </div>
                  <CustomTextField placeholder='Thanks for your business' />
                </div>
                <div className='min-is-[200px]'>
                  <div className='flex items-center justify-between'>
                    <Typography>Subtotal:</Typography>
                    <Typography className='font-medium' color='text.primary'>
                      $1800
                    </Typography>
                  </div>
                  <div className='flex items-center justify-between'>
                    <Typography>Discount:</Typography>
                    <Typography className='font-medium' color='text.primary'>
                      $28
                    </Typography>
                  </div>
                  <div className='flex items-center justify-between'>
                    <Typography>Tax:</Typography>
                    <Typography className='font-medium' color='text.primary'>
                      21%
                    </Typography>
                  </div>
                  <Divider className='mlb-2' />
                  <div className='flex items-center justify-between'>
                    <Typography>Total:</Typography>
                    <Typography className='font-medium' color='text.primary'>
                      $1690
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Divider className='border-dashed' />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor='invoice-note' className='inline-flex mbe-1 text-textPrimary'>
                Note:
              </InputLabel>
              <CustomTextField
                id='invoice-note'
                rows={2}
                fullWidth
                multiline
                className='border rounded'
                defaultValue='It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance
              projects. Thank You!'
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <AddCustomerDrawer open={open} setOpen={setOpen} onFormSubmit={onFormSubmit} />
    </>
  )
}

export default AddAction
