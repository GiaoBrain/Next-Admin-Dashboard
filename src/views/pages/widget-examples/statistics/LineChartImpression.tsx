'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Vars
const series = [{ name: 'Income', data: [3350, 3350, 5000, 5000, 2950, 2950, 1500, 1500, 3750, 3750, 5700, 5700] }]

const LineChartImpression = () => {
  // Hooks
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    stroke: {
      width: 3,
      curve: 'straight',
      lineCap: 'round'
    },
    colors: [theme.palette.error.main],
    grid: {
      padding: {
        top: 10,
        bottom: 20,
        left: 5,
        right: 5
      },
      yaxis: {
        lines: { show: false }
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      labels: { show: false }
    }
  }

  return (
    <Card>
      <CardHeader title='Impression' subheader='Expenses' className='pbe-0' />
      <CardContent className='flex flex-col'>
        <AppReactApexCharts type='line' height={98} width='100%' options={options} series={series} />
        <div className='flex items-center justify-between flex-wrap gap-x-4 gap-y-0.5'>
          <Typography variant='h4' color='text.primary'>
            26.1k
          </Typography>
          <Typography variant='body2' color='error.main'>
            -24.5%
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default LineChartImpression
