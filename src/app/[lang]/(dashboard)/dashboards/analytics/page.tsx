// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import WebsiteAnalyticsSlider from '@views/dashboards/analytics/WebsiteAnalyticsSlider'
import LineAreaDailySalesChart from '@views/dashboards/analytics/LineAreaDailySalesChart'
import SalesOverview from '@views/dashboards/analytics/SalesOverview'
import EarningReports from '@views/dashboards/analytics/EarningReports'
import SupportTracker from '@views/dashboards/analytics/SupportTracker'
import SalesByCountries from '@views/dashboards/analytics/SalesByCountries'
import TotalEarning from '@views/dashboards/analytics/TotalEarning'
import MonthlyCampaignState from '@views/dashboards/analytics/MonthlyCampaignState'
import SourceVisits from '@views/dashboards/analytics/SourceVisits'
import ProjectsTable from '@views/dashboards/analytics/ProjectsTable'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const getData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/pages/profile`)

  if (!res.ok) {
    throw new Error('Failed to fetch profileData')
  }

  return res.json()
}

const DashboardAnalytics = async () => {
  // Vars
  const data = await getData()
  const serverMode = getServerMode()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={6}>
        <WebsiteAnalyticsSlider />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <LineAreaDailySalesChart />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <SalesOverview />
      </Grid>
      <Grid item xs={12} md={6}>
        <EarningReports serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} md={6}>
        <SupportTracker serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SalesByCountries />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TotalEarning serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <MonthlyCampaignState />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SourceVisits />
      </Grid>
      <Grid item xs={12} lg={8}>
        <ProjectsTable projectTable={data?.users.profile.projectTable} />
      </Grid>
    </Grid>
  )
}

export default DashboardAnalytics
