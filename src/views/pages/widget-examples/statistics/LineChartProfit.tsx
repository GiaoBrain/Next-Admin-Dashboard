'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { useColorScheme, useTheme } from '@mui/material/styles'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

// Types Imports
import type { SystemMode } from '@core/types'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Vars
const series = [{ data: [0, 19, 7, 27, 15, 40] }]

const LineChartProfit = ({ serverMode }: { serverMode: SystemMode }) => {
  // Hooks
  const theme = useTheme()
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode
  const infoColor = theme.palette.info.main

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    tooltip: { enabled: false },
    grid: {
      strokeDashArray: 6,
      borderColor: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.12)`),
      xaxis: {
        lines: { show: true }
      },
      yaxis: {
        lines: { show: false }
      },
      padding: {
        top: -10,
        left: 0,
        right: 13,
        bottom: 8
      }
    },
    stroke: {
      width: 3,
      lineCap: 'butt',
      curve: 'straight'
    },
    colors: [infoColor],
    markers: {
      size: 4,
      strokeWidth: 3,
      colors: infoColor,
      strokeColors: 'transparent',
      discrete: [
        {
          size: 5.5,
          seriesIndex: 0,
          strokeColor: infoColor,
          fillColor: theme.palette.background.paper,
          dataPointIndex: series[0].data.length - 1
        }
      ]
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
      <CardHeader title='Profit' subheader='Last Month' className='pbe-0' />
      <CardContent className='flex flex-col'>
        <AppReactApexCharts type='line' height={98} width='100%' options={options} series={series} />
        <div className='flex items-center justify-between flex-wrap gap-x-4 gap-y-0.5'>
          <Typography variant='h4' color='text.primary'>
            624k
          </Typography>
          <Typography variant='body2' color='success.main'>
            +8.2%
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default LineChartProfit
