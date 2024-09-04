'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import Chip from '@mui/material/Chip'
import { useColorScheme, useTheme } from '@mui/material/styles'

// Third Party Imports
import classnames from 'classnames'
import type { ApexOptions } from 'apexcharts'

// Types Imports
import type { ThemeColor, SystemMode } from '@core/types'

// Components Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

type DataType = {
  stats: string
  title: string
  progress: number
  avatarIcon: string
  avatarColor?: ThemeColor
  progressColor?: ThemeColor
}

// Vars
const series = [{ data: [37, 76, 65, 41, 99, 53, 70] }]

const data: DataType[] = [
  {
    title: 'Earnings',
    progress: 64,
    stats: '$545.69',
    progressColor: 'primary',
    avatarColor: 'primary',
    avatarIcon: 'tabler-currency-dollar'
  },
  {
    title: 'Profit',
    progress: 59,
    stats: '$256.34',
    progressColor: 'info',
    avatarColor: 'info',
    avatarIcon: 'tabler-chart-pie-2'
  },
  {
    title: 'Expense',
    progress: 22,
    stats: '$74.19',
    progressColor: 'error',
    avatarColor: 'error',
    avatarIcon: 'tabler-brand-paypal'
  }
]

const EarningReports = ({ serverMode }: { serverMode: SystemMode }) => {
  // Hooks
  const theme = useTheme()
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode
  const primaryColorWithOpacity = rgbaToHex(`rgb(${theme.palette.primary.mainChannel} / 0.16)`)

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    tooltip: { enabled: false },
    grid: {
      show: false,
      padding: {
        top: -31,
        left: 0,
        right: 0,
        bottom: -9
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        distributed: true,
        columnWidth: '42%'
      }
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: [
      primaryColorWithOpacity,
      primaryColorWithOpacity,
      primaryColorWithOpacity,
      primaryColorWithOpacity,
      rgbaToHex(`rgb(${theme.palette.primary.mainChannel} / 1)`),
      primaryColorWithOpacity,
      primaryColorWithOpacity
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      axisTicks: { show: false },
      axisBorder: { show: false },
      labels: {
        style: {
          fontSize: '13px',
          colors: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.4)`)
        }
      }
    },
    yaxis: { show: false }
  }

  return (
    <Card>
      <CardHeader
        title='Earning Reports'
        subheader='Weekly Earnings Overview'
        action={<OptionMenu options={['Last Week', 'Last Month', 'Last Year']} />}
        className='pbe-0'
      />
      <CardContent className='flex flex-col gap-5 max-md:gap-5 max-[1015px]:gap-[62px] max-[1051px]:gap-10 max-[1200px]:gap-5 max-[1310px]:gap-10'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-8'>
          <div className='flex flex-col gap-3 is-full sm:is-[unset]'>
            <div className='flex items-center gap-2.5'>
              <Typography variant='h2'>$468</Typography>
              <Chip size='small' variant='tonal' color='success' label='+4.2%' />
            </div>
            <Typography variant='body2' className='text-balance'>
              You informed of this week compared to last week
            </Typography>
          </div>
          <AppReactApexCharts type='bar' height={163} width='100%' series={series} options={options} />
        </div>
        <div className='flex flex-col sm:flex-row gap-6 p-5 border rounded'>
          {data.map((item, index) => (
            <div key={index} className='flex flex-col gap-2 is-full'>
              <div className='flex items-center gap-2'>
                <CustomAvatar skin='light' variant='rounded' color={item.avatarColor} size={26}>
                  <i className={classnames(item.avatarIcon, 'text-lg')} />
                </CustomAvatar>
                <Typography variant='h6' className='leading-6 font-normal'>
                  {item.title}
                </Typography>
              </div>
              <Typography variant='h4'>{item.stats}</Typography>
              <LinearProgress
                value={item.progress}
                variant='determinate'
                color={item.progressColor}
                className='max-bs-1'
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default EarningReports
