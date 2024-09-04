'use client'

// React Imports
import { useState } from 'react'
import type { MouseEvent } from 'react'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { useColorScheme, useTheme } from '@mui/material/styles'

// Third Party Imports
import type { ApexOptions } from 'apexcharts'

// Types Imports
import type { SystemMode } from '@core/types'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Vars
const yearOptions = [new Date().getFullYear() - 1, new Date().getFullYear() - 2, new Date().getFullYear() - 3]

const barSeries = [
  { name: 'Earning', data: [252, 203, 152, 173, 235, 299, 235, 252, 106] },
  { name: 'Expense', data: [-128, -157, -190, -163, -89, -51, -89, -136, -190] }
]

const lineSeries = [
  { name: 'Last Month', data: [20, 10, 30, 16, 24, 5, 30, 23, 28, 5, 30] },
  { name: 'This Month', data: [50, 40, 60, 46, 54, 35, 70, 53, 58, 35, 60] }
]

const RevenueReport = ({ serverMode }: { serverMode: SystemMode }) => {
  // States
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // Hooks
  const theme = useTheme()
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode
  const disabledText = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.4)`)

  const barOptions: ApexOptions = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 6,
      colors: [theme.palette.background.paper]
    },
    colors: [
      rgbaToHex(`rgb(${theme.palette.primary.mainChannel} / 1)`),
      rgbaToHex(`rgb(${theme.palette.warning.mainChannel} / 1)`)
    ],
    legend: {
      offsetY: -4,
      offsetX: -35,
      position: 'top',
      horizontalAlign: 'left',
      fontSize: '13px',
      fontFamily: theme.typography.fontFamily,
      labels: { colors: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.7)`) },
      itemMargin: {
        horizontal: 9
      },
      markers: {
        width: 12,
        height: 12,
        radius: 10,
        offsetY: 1,
        offsetX: theme.direction === 'rtl' ? 7 : -4
      }
    },
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
        borderRadius: 7,
        columnWidth: '40%',
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'all'
      }
    },
    grid: {
      borderColor: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.12)`),
      yaxis: {
        lines: { show: false }
      },
      padding: {
        left: -6,
        right: -11,
        bottom: -11
      }
    },
    xaxis: {
      axisTicks: { show: false },
      crosshairs: { opacity: 0 },
      axisBorder: { show: false },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      labels: {
        style: {
          colors: disabledText,
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.body2.fontSize as string
        }
      }
    },
    yaxis: {
      labels: {
        offsetX: -14,
        style: {
          colors: disabledText,
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.body2.fontSize as string
        }
      }
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        options: {
          plotOptions: {
            bar: { columnWidth: '48%' }
          }
        }
      },
      {
        breakpoint: 1380,
        options: {
          plotOptions: {
            bar: { columnWidth: '55%' }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          plotOptions: {
            bar: { borderRadius: 7 }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          plotOptions: {
            bar: { columnWidth: '50%' }
          }
        }
      },
      {
        breakpoint: 680,
        options: {
          plotOptions: {
            bar: { columnWidth: '60%' }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: { columnWidth: '55%' }
          }
        }
      },
      {
        breakpoint: 450,
        options: {
          plotOptions: {
            bar: { borderRadius: 6, columnWidth: '65%' }
          }
        }
      }
    ]
  }

  const lineOptions: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      zoom: {
        enabled: false
      }
    },
    stroke: {
      width: [1, 2],
      curve: 'smooth',
      dashArray: [5, 0]
    },
    colors: [
      rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.12)`),
      rgbaToHex(`rgb(${theme.palette.primary.mainChannel} / 1)`)
    ],
    legend: {
      show: false
    },
    grid: {
      padding: {
        top: -28,
        left: -11,
        right: 0,
        bottom: -15
      },
      yaxis: {
        lines: { show: false }
      }
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
      <Grid container>
        <Grid item xs={12} sm={8} className='border-r'>
          <CardHeader title='Revenue Report' />
          <CardContent>
            <AppReactApexCharts type='bar' height={320} width='100%' series={barSeries} options={barOptions} />
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardContent className='flex flex-col items-center justify-center min-bs-full gap-8'>
            <Button
              size='small'
              variant='tonal'
              onClick={handleClick}
              endIcon={<i className='tabler-chevron-down text-xl' />}
            >
              {new Date().getFullYear()}
            </Button>
            <Menu
              keepMounted
              anchorEl={anchorEl}
              onClose={handleClose}
              open={Boolean(anchorEl)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              {yearOptions.map((year: number) => (
                <MenuItem key={year} onClick={handleClose}>
                  {year}
                </MenuItem>
              ))}
            </Menu>
            <div className='flex flex-col items-center'>
              <Typography variant='h3'>$25,825</Typography>
              <Typography>
                <span className='font-medium text-textPrimary'>Budget: </span>56,800
              </Typography>
            </div>
            <AppReactApexCharts type='line' height={80} series={lineSeries} options={lineOptions} />
            <Button variant='contained'>Increase Budget</Button>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default RevenueReport
