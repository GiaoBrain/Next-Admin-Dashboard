// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// Component Imports
import RechartsBarChart from '@views/charts/recharts/RechartsBarChart'
import RechartsPieChart from '@views/charts/recharts/RechartsPieChart'
import RechartsLineChart from '@views/charts/recharts/RechartsLineChart'
import RechartsAreaChart from '@views/charts/recharts/RechartsAreaChart'
import RechartsRadarChart from '@views/charts/recharts/RechartsRadarChart'
import RechartsScatterChart from '@views/charts/recharts/RechartsScatterChart'

const Recharts = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h4'>Recharts</Typography>
        <Typography>
          <code>recharts</code> is a third-party library. Please refer to its{' '}
          <Link
            href='https://recharts.org'
            target='_blank'
            rel='noopener noreferrer'
            className='no-underline text-primary'
          >
            official documentation
          </Link>{' '}
          for more details.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <RechartsLineChart />
      </Grid>
      <Grid item xs={12}>
        <RechartsAreaChart />
      </Grid>
      <Grid item xs={12}>
        <RechartsScatterChart />
      </Grid>
      <Grid item xs={12}>
        <RechartsBarChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <RechartsRadarChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <RechartsPieChart />
      </Grid>
    </Grid>
  )
}

export default Recharts
