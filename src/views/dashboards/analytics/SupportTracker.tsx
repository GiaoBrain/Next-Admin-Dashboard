'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
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
  title: string
  subtitle: string
  avatarIcon: string
  avatarColor?: ThemeColor
}

// Vars
const data: DataType[] = [
  {
    title: 'New Tickets',
    subtitle: '142',
    avatarColor: 'primary',
    avatarIcon: 'tabler-ticket'
  },
  {
    title: 'Open Tickets',
    subtitle: '28',
    avatarColor: 'info',
    avatarIcon: 'tabler-check'
  },
  {
    title: 'Response Time',
    subtitle: '1 Day',
    avatarColor: 'warning',
    avatarIcon: 'tabler-clock'
  }
]

const SupportTracker = ({ serverMode }: { serverMode: SystemMode }) => {
  // Hooks
  const theme = useTheme()
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode
  const disabledText = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.4)`)

  const options: ApexOptions = {
    stroke: { dashArray: 10 },
    labels: ['Completed Task'],
    colors: [theme.palette.primary.main],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityTo: 0.5,
        opacityFrom: 1,
        shadeIntensity: 0.5,
        stops: [30, 70, 100],
        inverseColors: false,
        gradientToColors: [theme.palette.primary.main]
      }
    },
    plotOptions: {
      radialBar: {
        endAngle: 130,
        startAngle: -140,
        hollow: { size: '60%' },
        track: { background: 'transparent' },
        dataLabels: {
          name: {
            offsetY: -24,
            color: disabledText,
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.body2.fontSize as string
          },
          value: {
            offsetY: 8,
            fontWeight: 500,
            formatter: value => `${value}%`,
            color: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.9)`),
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.h2.fontSize as string
          }
        }
      }
    },
    grid: {
      padding: {
        top: -18,
        left: 0,
        right: 0,
        bottom: 14
      }
    },
    responsive: [
      {
        breakpoint: 1380,
        options: {
          grid: {
            padding: {
              top: 8,
              left: 12
            }
          }
        }
      },
      {
        breakpoint: 1280,
        options: {
          chart: {
            height: 325
          },
          grid: {
            padding: {
              top: 12,
              left: 12
            }
          }
        }
      },
      {
        breakpoint: 1201,
        options: {
          chart: {
            height: 362
          }
        }
      },
      {
        breakpoint: 1135,
        options: {
          chart: {
            height: 350
          }
        }
      },
      {
        breakpoint: 980,
        options: {
          chart: {
            height: 300
          }
        }
      },
      {
        breakpoint: 900,
        options: {
          chart: {
            height: 350
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader
        title='Support Tracker'
        subheader='Last 7 Days'
        action={<OptionMenu options={['Refresh', 'Edit', 'Share']} />}
      />
      <CardContent className='flex flex-col sm:flex-row items-center justify-between gap-7'>
        <div className='flex flex-col gap-6 is-full sm:is-[unset]'>
          <div className='flex flex-col'>
            <Typography variant='h2'>164</Typography>
            <Typography>Total Tickets</Typography>
          </div>
          <div className='flex flex-col gap-4 is-full'>
            {data.map((item, index) => (
              <div key={index} className='flex items-center gap-4'>
                <CustomAvatar skin='light' variant='rounded' color={item.avatarColor} size={34}>
                  <i className={classnames(item.avatarIcon, 'text-[22px]')} />
                </CustomAvatar>
                <div className='flex flex-col'>
                  <Typography className='font-medium' color='text.primary'>
                    {item.title}
                  </Typography>
                  <Typography variant='body2'>{item.subtitle}</Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
        <AppReactApexCharts type='radialBar' height={350} width='100%' series={[85]} options={options} />
      </CardContent>
    </Card>
  )
}

export default SupportTracker
