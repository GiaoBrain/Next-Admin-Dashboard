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
const series = [{ data: [40, 10, 65, 45] }]

const LineAreaYearlySalesChart = () => {
  // Hooks
  const theme = useTheme()

  // Vars
  const successColor = theme.palette.success.main

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    grid: {
      show: false,
      padding: {
        top: 10,
        bottom: 20
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityTo: 0,
        opacityFrom: 1,
        shadeIntensity: 1,
        stops: [0, 100],
        colorStops: [
          [
            {
              offset: 0,
              opacity: 0.4,
              color: successColor
            },
            {
              opacity: 0,
              offset: 100,
              color: theme.palette.background.paper
            }
          ]
        ]
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 1,
        color: successColor
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: { show: false }
  }

  return (
    <Card>
      <CardHeader title='Sales' subheader='Last Year' className='pbe-0' />
      <AppReactApexCharts type='area' height={98} width='100%' options={options} series={series} />
      <CardContent className='flex flex-col pbs-0'>
        <div className='flex items-center justify-between flex-wrap gap-x-4 gap-y-0.5'>
          <Typography variant='h4' color='text.primary'>
            175k
          </Typography>
          <Typography variant='body2' color='error.main'>
            -16.2%
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default LineAreaYearlySalesChart
