// React Imports
import { useState, useEffect } from 'react'

// MUI Imports
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'

// Type Imports
import type { UsersType } from '@/types/apps/userTypes'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const TableFilters = ({ setData, tableData }: { setData: any; tableData?: UsersType[] }) => {
  // States
  const [role, setRole] = useState<UsersType['role']>('')
  const [plan, setPlan] = useState<UsersType['currentPlan']>('')
  const [status, setStatus] = useState<UsersType['status']>('')

  useEffect(() => {
    const filteredData = tableData?.filter(user => {
      if (role && user.role !== role) return false
      if (plan && user.currentPlan !== plan) return false
      if (status && user.status !== status) return false

      return true
    })

    setData(filteredData)
  }, [role, plan, status, tableData, setData])

  return (
    <CardContent>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            select
            fullWidth
            id='select-role'
            value={role}
            onChange={e => setRole(e.target.value)}
            SelectProps={{ displayEmpty: true }}
          >
            <MenuItem value=''>Select Role</MenuItem>
            <MenuItem value='admin'>Admin</MenuItem>
            <MenuItem value='author'>Author</MenuItem>
            <MenuItem value='editor'>Editor</MenuItem>
            <MenuItem value='maintainer'>Maintainer</MenuItem>
            <MenuItem value='subscriber'>Subscriber</MenuItem>
          </CustomTextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            select
            fullWidth
            id='select-plan'
            value={plan}
            onChange={e => setPlan(e.target.value)}
            SelectProps={{ displayEmpty: true }}
          >
            <MenuItem value=''>Select Plan</MenuItem>
            <MenuItem value='basic'>Basic</MenuItem>
            <MenuItem value='company'>Company</MenuItem>
            <MenuItem value='enterprise'>Enterprise</MenuItem>
            <MenuItem value='team'>Team</MenuItem>
          </CustomTextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            select
            fullWidth
            id='select-status'
            value={status}
            onChange={e => setStatus(e.target.value)}
            SelectProps={{ displayEmpty: true }}
          >
            <MenuItem value=''>Select Status</MenuItem>
            <MenuItem value='pending'>Pending</MenuItem>
            <MenuItem value='active'>Active</MenuItem>
            <MenuItem value='inactive'>Inactive</MenuItem>
          </CustomTextField>
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default TableFilters
