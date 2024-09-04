'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import { useColorScheme, useTheme } from '@mui/material/styles'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

// Types Imports
import type { SystemMode } from '@core/types'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const series = [{ data: [40, 53, 66, 79, 92, 105, 118] }]

const BarChartDailyTraffic = ({ serverMode }: { serverMode: SystemMode }) => {
  // Hook
  const theme = useTheme()
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: '28%'
      }
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [theme.palette.warning.main],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      show: false,
      padding: {
        top: -10,
        left: 5,
        right: 8,
        bottom: 5
      }
    },
    xaxis: {
      categories: ['01', '02', '03', '04', '05', '06', '07'],
      axisTicks: { show: false },
      axisBorder: { show: false },
      tickPlacement: 'on',
      labels: {
        style: {
          colors: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.4)`),
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.body2.fontSize as string
        }
      }
    },
    yaxis: { show: false },
    responsive: [
      {
        breakpoint: 1459,
        options: {
          plotOptions: {
            bar: { columnWidth: '35%' }
          }
        }
      },
      {
        breakpoint: 1200,
        options: {
          plotOptions: {
            bar: { columnWidth: '20%' }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardContent>
        <div className='flex items-start justify-between'>
          <div className='flex flex-col items-start'>
            <Typography variant='h4'>2.84k</Typography>
            <Typography variant='subtitle2' color='text.secondary'>
              Avg Daily Traffic
            </Typography>
          </div>
          <Chip variant='tonal' color='success' label='+15%' size='small' />
        </div>
        <AppReactApexCharts type='bar' height={156} series={series} options={options} />
      </CardContent>
    </Card>
  )
}

export default BarChartDailyTraffic
