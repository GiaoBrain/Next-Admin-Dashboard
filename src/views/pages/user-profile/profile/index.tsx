// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { ProfileTabType } from '@/types/pages/profileTypes'

// Component Imports
import AboutOverview from './AboutOverview'
import ActivityTimeline from './ActivityTimeline'
import ConnectionsTeams from './ConnectionsTeams'
import ProjectsTable from './ProjectsTables'

const ProfileTab = ({ data }: { data?: ProfileTabType }) => {
  return (
    <Grid container spacing={6}>
      <Grid item lg={4} md={5} xs={12}>
        <AboutOverview data={data} />
      </Grid>
      <Grid item lg={8} md={7} xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <ActivityTimeline />
          </Grid>
          <ConnectionsTeams connections={data?.connections} teamsTech={data?.teamsTech} />
          <Grid item xs={12}>
            <ProjectsTable projectTable={data?.projectTable} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProfileTab
