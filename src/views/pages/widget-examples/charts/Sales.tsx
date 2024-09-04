'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { useColorScheme, useTheme } from '@mui/material/styles'

// Third Party Imports
import type { ApexOptions } from 'apexcharts'

// Types Imports
import type { SystemMode } from '@core/types'

// Components Imports
import OptionMenu from '@core/components/option-menu'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Vars
const series = [
  { name: 'Sales', data: [32, 27, 27, 30, 25, 25] },
  { name: 'Visits', data: [25, 35, 20, 20, 20, 20] }
]

const Sales = ({ serverMode }: { serverMode: SystemMode }) => {
  // Hooks
  const theme = useTheme()
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode
  const textDisabled = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.4)`)
  const divider = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.12)`)

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    colors: [theme.palette.primary.main, theme.palette.info.main],
    plotOptions: {
      radar: {
        polygons: {
          connectorColors: divider,
          strokeColors: divider
        }
      }
    },
    stroke: { width: 0 },
    fill: {
      opacity: [1, 0.85]
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    markers: { size: 0 },
    legend: {
      fontSize: '13px',
      labels: { colors: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.7)`) },
      markers: { offsetY: -1, offsetX: theme.direction === 'rtl' ? 7 : -4 },
      itemMargin: { horizontal: 9 }
    },
    grid: { show: false },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontSize: '13px',
          colors: [textDisabled, textDisabled, textDisabled, textDisabled, textDisabled, textDisabled]
        }
      }
    },
    yaxis: { show: false }
  }

  return (
    <Card>
      <CardHeader
        title='Sales'
        subheader='Last 6 Months'
        action={<OptionMenu options={['Last Month', 'Last 6 months', 'Last Year']} />}
      />
      <CardContent>
        <AppReactApexCharts type='radar' height={299} width='100%' series={series} options={options} />
      </CardContent>
    </Card>
  )
}

export default Sales
