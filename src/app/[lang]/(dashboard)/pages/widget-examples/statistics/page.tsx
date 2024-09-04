// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { CardStatsType } from '@/types/pages/widgetTypes'

// Component Imports
import StatisticsCard from '@views/pages/widget-examples/statistics/StatisticsCard'
import Square from '@views/pages/widget-examples/statistics/Square'
import DistributedBarChartOrder from '@/views/pages/widget-examples/statistics/DistributedBarChartOrder'
import LineAreaYearlySalesChart from '@views/pages/widget-examples/statistics/LineAreaYearlySalesChart'
import LineChartProfit from '@views/pages/widget-examples/statistics/LineChartProfit'
import BarChartSessionsWithNegativeValues from '@views/pages/widget-examples/statistics/BarChartSessionsWithNegativeValues'
import RadialBarChart from '@views/pages/widget-examples/statistics/RadialBarChart'
import LineChartImpression from '@views/pages/widget-examples/statistics/LineChartImpression'
import Horizontal from '@views/pages/widget-examples/statistics/Horizontal'
import CardStatsLineAreaCharts from '@views/pages/widget-examples/statistics/CardStatsLineAreaCharts'
import LineAreaDailySalesChart from '@views/pages/widget-examples/statistics/LineAreaDailySalesChart'
import SalesOverview from '@views/pages/widget-examples/statistics/SalesOverview'
import BarChartDailyTraffic from '@views/pages/widget-examples/statistics/BarChartDailyTraffic'
import SubscribersOrders from '@views/pages/widget-examples/statistics/SubscribersOrders'
import Vertical from '@views/pages/widget-examples/statistics/Vertical'
import BarChartRevenueGrowth from '@views/pages/widget-examples/statistics/BarChartRevenueGrowth'
import DonutChartGeneratedLeads from '@views/pages/widget-examples/statistics/DonutChartGeneratedLeads'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const getData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/pages/widget-examples`)

  if (!res.ok) {
    throw new Error('Failed to fetch permissions data')
  }

  return res.json()
}

const Statistics = async () => {
  // Vars
  const data: CardStatsType = await getData()
  const serverMode = getServerMode()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={8}>
        <StatisticsCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <Square data={data.statsSquare} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <DistributedBarChartOrder />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <LineAreaYearlySalesChart />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <LineChartProfit serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <BarChartSessionsWithNegativeValues />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <RadialBarChart serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <LineChartImpression />
      </Grid>
      <Grid item xs={12}>
        <Horizontal data={data.statsHorizontal} />
      </Grid>
      <Grid item xs={12}>
        <CardStatsLineAreaCharts data={data.statsWithAreaChart} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <LineAreaDailySalesChart />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <SalesOverview />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <BarChartDailyTraffic serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <SubscribersOrders />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Vertical data={data.statsVertical} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BarChartRevenueGrowth serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <DonutChartGeneratedLeads serverMode={serverMode} />
      </Grid>
    </Grid>
  )
}

export default Statistics
