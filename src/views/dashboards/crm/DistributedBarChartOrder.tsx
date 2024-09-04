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
const series = [{ data: [77, 55, 23, 43, 77, 55, 89] }]

const DistributedBarChartOrder = () => {
  // Hooks
  const theme = useTheme()

  // Vars
  const actionSelectedColor = theme.palette.action.selected

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      stacked: false,
      parentHeightOffset: 0,
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    tooltip: { enabled: false },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: [theme.palette.primary.main],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 3,
        horizontal: false,
        columnWidth: '32%',
        colors: {
          backgroundBarRadius: 5,
          backgroundBarColors: [
            actionSelectedColor,
            actionSelectedColor,
            actionSelectedColor,
            actionSelectedColor,
            actionSelectedColor
          ]
        }
      }
    },
    grid: {
      show: false,
      padding: {
        left: -3,
        right: 5,
        top: 15,
        bottom: 18
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: { show: false },
    responsive: [
      {
        breakpoint: 1350,
        options: {
          plotOptions: {
            bar: { columnWidth: '45%' }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          plotOptions: {
            bar: { columnWidth: '20%' }
          }
        }
      },
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: { columnWidth: '15%' }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader title='Order' subheader='Last Week' className='pbe-0' />
      <CardContent className='flex flex-col'>
        <AppReactApexCharts type='bar' height={84} width='100%' options={options} series={series} />
        <div className='flex items-center justify-between flex-wrap gap-x-4 gap-y-0.5'>
          <Typography variant='h4' color='text.primary'>
            124k
          </Typography>
          <Typography variant='body2' color='success.main'>
            +12.6%
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default DistributedBarChartOrder
