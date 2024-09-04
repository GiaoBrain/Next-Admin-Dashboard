// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { UsersType } from '@/types/apps/userTypes'

// Component Imports
import UserListTable from './UserListTable'
import UserListCards from './UserListCards'

const UserList = ({ userData }: { userData?: UsersType[] }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <UserListCards />
      </Grid>
      <Grid item xs={12}>
        <UserListTable tableData={userData} />
      </Grid>
    </Grid>
  )
}

export default UserList
