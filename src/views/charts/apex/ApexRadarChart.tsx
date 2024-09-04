'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import { useColorScheme, useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

// Type Imports
import type { SystemMode } from '@core/types'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Vars
const radarColors = {
  series1: '#9b88fa',
  series2: '#ffa1a1'
}

const series = [
  {
    name: 'iPhone 12',
    data: [41, 64, 81, 60, 42, 42, 33, 23]
  },
  {
    name: 'Samsung s20',
    data: [65, 46, 42, 25, 58, 63, 76, 43]
  }
]

const ApexRadarChart = ({ serverMode }: { serverMode: SystemMode }) => {
  // Hooks
  const theme = useTheme()
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode
  const divider = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.12)`)
  const textDisabled = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.4)`)

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 1,
        blur: 8,
        left: 1,
        opacity: 0.2,
        enabled: false
      }
    },
    markers: { size: 0 },
    fill: { opacity: [1, 0.8] },
    colors: [radarColors.series1, radarColors.series2],
    stroke: {
      width: 0,
      show: false
    },
    legend: {
      fontSize: '13px',
      labels: {
        colors: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.7)`)
      },
      markers: {
        offsetX: theme.direction === 'rtl' ? 7 : -4
      },
      itemMargin: {
        horizontal: 9
      }
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: divider,
          connectorColors: divider
        }
      }
    },
    grid: {
      show: false,
      padding: {
        top: -20,
        bottom: -20
      }
    },
    yaxis: { show: false },
    xaxis: {
      categories: ['Battery', 'Brand', 'Camera', 'Memory', 'Storage', 'Display', 'OS', 'Price'],
      labels: {
        style: {
          fontSize: '13px',
          colors: [
            textDisabled,
            textDisabled,
            textDisabled,
            textDisabled,
            textDisabled,
            textDisabled,
            textDisabled,
            textDisabled
          ]
        }
      }
    }
  }

  return (
    <Card>
      <CardHeader title='Mobile Comparison' />
      <CardContent>
        <AppReactApexCharts type='radar' width='100%' height={400} options={options} series={series} />
      </CardContent>
    </Card>
  )
}

export default ApexRadarChart
