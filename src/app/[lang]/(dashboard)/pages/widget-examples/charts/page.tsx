// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import EarningReports from '@views/pages/widget-examples/charts/EarningReports'
import SupportTracker from '@views/pages/widget-examples/charts/SupportTracker'
import Sales from '@views/pages/widget-examples/charts/Sales'
import RevenueReport from '@views/pages/widget-examples/charts/RevenueReport'
import ProjectStatus from '@views/pages/widget-examples/charts/ProjectStatus'
import EarningReportsWithTabs from '@views/pages/widget-examples/charts/EarningReportsWithTabs'
import TotalEarning from '@views/pages/widget-examples/charts/TotalEarning'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const Charts = () => {
  // Vars
  const serverMode = getServerMode()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <EarningReports serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} md={6}>
        <SupportTracker serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Sales serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} md={8}>
        <RevenueReport serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} md={4}>
        <ProjectStatus />
      </Grid>
      <Grid item xs={12} md={8}>
        <EarningReportsWithTabs serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TotalEarning serverMode={serverMode} />
      </Grid>
    </Grid>
  )
}

export default Charts
