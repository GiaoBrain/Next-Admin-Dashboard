// MUI Imports
import Grid from '@mui/material/Grid'

// Types Imports
import type { CardStatsWithAreaChartProps } from '@/types/pages/widgetTypes'

// Component Imports
import CardStatsWithAreaChart from '@components/card-statistics/StatsWithAreaChart'

const CardStatsLineAreaCharts = ({ data }: { data: CardStatsWithAreaChartProps[] }) => {
  const renderData = data
    ? data.map((item: CardStatsWithAreaChartProps, index: number) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <CardStatsWithAreaChart {...item} />
        </Grid>
      ))
    : null

  return (
    <Grid container spacing={6}>
      {renderData}
    </Grid>
  )
}

export default CardStatsLineAreaCharts
