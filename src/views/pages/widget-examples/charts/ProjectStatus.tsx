'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Third Party Imports
import type { ApexOptions } from 'apexcharts'

// Components Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

type DataType = {
  title: string
  amount: string
  trendDiff: number
  trend?: 'positive' | 'negative'
}

// Vars
const series = [
  { data: [2000, 2000, 4000, 4000, 3050, 3050, 2050, 2050, 3050, 3050, 4700, 4700, 2750, 2750, 5700, 5700] }
]

const data: DataType[] = [
  {
    title: 'Donates',
    trend: 'negative',
    amount: '$756.26',
    trendDiff: 139.34
  },
  {
    title: 'Podcasts',
    trendDiff: 576.24,
    amount: '$2,207.03'
  }
]

const ProjectStatus = () => {
  // Hooks
  const theme = useTheme()

  // Vars
  const primaryColor = theme.palette.primary.main

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      zoom: {
        enabled: false
      }
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 4,
      curve: 'straight'
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
              color: primaryColor
            },
            {
              offset: 100,
              opacity: 0.1,
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
        color: primaryColor
      }
    },
    grid: {
      show: false,
      padding: {
        top: -42,
        left: 0,
        right: 0,
        bottom: 30
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
      <CardHeader title='Project Status' action={<OptionMenu options={['Share', 'Refresh', 'Update']} />} />
      <CardContent className='flex flex-col gap-6'>
        <div className='flex items-center gap-4'>
          <CustomAvatar skin='light' variant='rounded' color='primary'>
            <i className='tabler-currency-dollar' />
          </CustomAvatar>
          <div className='flex justify-between items-center is-full'>
            <div className='flex flex-col'>
              <Typography className='font-medium' color='text.primary'>
                $4,3742
              </Typography>
              <Typography variant='body2'>Your Earnings</Typography>
            </div>
            <Typography className='font-medium' color='success.main'>
              +10.2%
            </Typography>
          </div>
        </div>
        <AppReactApexCharts type='area' height={234} series={series} options={options} />
        <div className='flex flex-col gap-4'>
          {data.map((item: DataType, index: number) => (
            <div key={index} className='flex items-center justify-between gap-4'>
              <Typography className='font-medium' color='text.primary'>
                {item.title}
              </Typography>
              <div className='flex items-center gap-4'>
                <Typography>{item.amount}</Typography>
                <Typography color={`${item.trend === 'negative' ? 'error' : 'success'}.main`}>
                  {`${item.trend === 'negative' ? '-' : '+'}${item.trendDiff}`}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectStatus
