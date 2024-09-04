'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'
import type { ApexOptions } from 'apexcharts'

// Type Imports
import type { CardStatsWithAreaChartProps } from '@/types/pages/widgetTypes'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const CardStatsWithAreaChart = (props: CardStatsWithAreaChartProps) => {
  // Props
  const {
    stats,
    title,
    avatarIcon,
    chartSeries,
    avatarSize,
    chartColor = 'primary',
    avatarColor,
    avatarIconSize,
    avatarSkin
  } = props

  // Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 2.5,
      curve: 'smooth'
    },
    grid: {
      show: false,
      padding: {
        bottom: 17
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
              color: theme.palette[chartColor].main
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
        color: theme.palette[chartColor].main
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
      <CardContent className='flex flex-col gap-2 pb-3'>
        <CustomAvatar variant='rounded' skin={avatarSkin} color={avatarColor} size={avatarSize}>
          <i className={classnames(avatarIcon, `text-[${avatarIconSize}px]`)} />
        </CustomAvatar>
        <div>
          <Typography variant='h5'>{stats}</Typography>
          <Typography variant='body2'>{title}</Typography>
        </div>
      </CardContent>
      <AppReactApexCharts type='area' height={100} options={options} series={chartSeries} />
    </Card>
  )
}

export default CardStatsWithAreaChart
