// React Imports
import { useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

type Props = {
  open: boolean
  handleClose: () => void
}

type FormDataType = {
  fullName: string
  username: string
  email: string
  company: string
  country: string
  contact: string
  role: string
  plan: string
  status: string
}

// Vars
const initialData = {
  fullName: '',
  username: '',
  email: '',
  company: '',
  country: '',
  contact: '',
  role: '',
  plan: '',
  status: ''
}

const AddUserDrawer = ({ open, handleClose }: Props) => {
  // States
  const [formData, setFormData] = useState<FormDataType>(initialData)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleClose()
    setFormData(initialData)
  }

  const handleReset = () => {
    handleClose()
    setFormData({
      fullName: '',
      username: '',
      email: '',
      company: '',
      country: '',
      contact: '',
      role: '',
      plan: '',
      status: ''
    })
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleReset}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <div className='flex items-center justify-between plb-5 pli-6'>
        <Typography variant='h5'>Add New User</Typography>
        <IconButton onClick={handleReset}>
          <i className='tabler-x text-textPrimary' />
        </IconButton>
      </div>
      <Divider />
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-6'>
          <CustomTextField
            label='Full Name'
            fullWidth
            placeholder='John Doe'
            value={formData.fullName}
            onChange={e => setFormData({ ...formData, fullName: e.target.value })}
          />
          <CustomTextField
            label='Username'
            fullWidth
            placeholder='johndoe'
            value={formData.username}
            onChange={e => setFormData({ ...formData, username: e.target.value })}
          />
          <CustomTextField
            label='Email'
            fullWidth
            placeholder='johndoe@gmail.com'
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
          <CustomTextField
            label='Company'
            fullWidth
            placeholder='Company PVT LTD'
            value={formData.company}
            onChange={e => setFormData({ ...formData, company: e.target.value })}
          />
          <CustomTextField
            select
            fullWidth
            id='country'
            value={formData.country}
            onChange={e => setFormData({ ...formData, country: e.target.value })}
            label='Select Country'
            inputProps={{ placeholder: 'Country' }}
          >
            <MenuItem value='UK'>UK</MenuItem>
            <MenuItem value='USA'>USA</MenuItem>
            <MenuItem value='Australia'>Australia</MenuItem>
            <MenuItem value='Germany'>Germany</MenuItem>
          </CustomTextField>
          <CustomTextField
            label='Contact'
            type='number'
            fullWidth
            placeholder='(397) 294-5153'
            value={formData.contact}
            onChange={e => setFormData({ ...formData, contact: e.target.value })}
          />
          <CustomTextField
            select
            fullWidth
            id='select-role'
            value={formData.role}
            onChange={e => setFormData({ ...formData, role: e.target.value })}
            label='Select Role'
          >
            <MenuItem value='admin'>Admin</MenuItem>
            <MenuItem value='author'>Author</MenuItem>
            <MenuItem value='editor'>Editor</MenuItem>
            <MenuItem value='maintainer'>Maintainer</MenuItem>
            <MenuItem value='subscriber'>Subscriber</MenuItem>
          </CustomTextField>
          <CustomTextField
            select
            fullWidth
            id='select-plan'
            value={formData.plan}
            onChange={e => setFormData({ ...formData, plan: e.target.value })}
            label='Select Plan'
            inputProps={{ placeholder: 'Select Plan' }}
          >
            <MenuItem value='basic'>Basic</MenuItem>
            <MenuItem value='company'>Company</MenuItem>
            <MenuItem value='enterprise'>Enterprise</MenuItem>
            <MenuItem value='team'>Team</MenuItem>
          </CustomTextField>
          <CustomTextField
            select
            fullWidth
            id='select-status'
            value={formData.status}
            onChange={e => setFormData({ ...formData, status: e.target.value })}
            label='Select Status'
          >
            <MenuItem value='pending'>Pending</MenuItem>
            <MenuItem value='active'>Active</MenuItem>
            <MenuItem value='inactive'>Inactive</MenuItem>
          </CustomTextField>
          <div className='flex items-center gap-4'>
            <Button variant='contained' type='submit'>
              Submit
            </Button>
            <Button variant='tonal' color='error' type='reset' onClick={() => handleReset()}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default AddUserDrawer
