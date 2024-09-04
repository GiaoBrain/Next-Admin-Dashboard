// MUI Imports
import Grid from '@mui/material/Grid'

// Types Imports
import type { CardStatsHorizontalProps } from '@/types/pages/widgetTypes'

// Component Imports
import CardStatHorizontal from '@/components/card-statistics/Horizontal'

const Horizontal = ({ data }: { data: CardStatsHorizontalProps[] }) => {
  if (data) {
    return (
      <Grid container spacing={6}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <CardStatHorizontal {...item} />
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default Horizontal
