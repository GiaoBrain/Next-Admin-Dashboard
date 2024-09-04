// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import DistributedBarChartOrder from '@views/dashboards/crm/DistributedBarChartOrder'
import LineAreaYearlySalesChart from '@views/dashboards/crm/LineAreaYearlySalesChart'
import CardStatVertical from '@/components/card-statistics/Vertical'
import BarChartRevenueGrowth from '@views/dashboards/crm/BarChartRevenueGrowth'
import EarningReportsWithTabs from '@views/dashboards/crm/EarningReportsWithTabs'
import RadarSalesChart from '@views/dashboards/crm/RadarSalesChart'
import SalesByCountries from '@views/dashboards/crm/SalesByCountries'
import ProjectStatus from '@views/dashboards/crm/ProjectStatus'
import ActiveProjects from '@views/dashboards/crm/ActiveProjects'
import LastTransaction from '@views/dashboards/crm/LastTransaction'
import ActivityTimeline from '@views/dashboards/crm/ActivityTimeline'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const DashboardCRM = () => {
  // Vars
  const serverMode = getServerMode()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <DistributedBarChartOrder />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <LineAreaYearlySalesChart />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <CardStatVertical
          title='Total Profit'
          subtitle='Last Week'
          stats='1.28k'
          avatarColor='error'
          avatarIcon='tabler-credit-card'
          avatarSkin='light'
          avatarSize={44}
          avatarIconSize={28}
          chipText='-12.2%'
          chipColor='error'
          chipVariant='tonal'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <CardStatVertical
          title='Total Sales'
          subtitle='Last Week'
          stats='24.67k'
          avatarColor='success'
          avatarIcon='tabler-currency-dollar'
          avatarSkin='light'
          avatarSize={44}
          avatarIconSize={28}
          chipText='+24.67%'
          chipColor='success'
          chipVariant='tonal'
        />
      </Grid>
      <Grid item xs={12} md={8} lg={4}>
        <BarChartRevenueGrowth serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} lg={8}>
        <EarningReportsWithTabs serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <RadarSalesChart serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SalesByCountries />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ProjectStatus />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ActiveProjects />
      </Grid>
      <Grid item xs={12} md={6}>
        <LastTransaction serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} md={6}>
        <ActivityTimeline />
      </Grid>
    </Grid>
  )
}

export default DashboardCRM
