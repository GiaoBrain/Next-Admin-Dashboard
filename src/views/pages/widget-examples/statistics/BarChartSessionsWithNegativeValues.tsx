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
const series = [
  {
    name: 'Earning',
    data: [180, 120, 284, 180, 102]
  },
  {
    name: 'Expense',
    data: [-100, -130, -105, -85, -125]
  }
]

const BarChartSessionsWithNegativeValues = () => {
  // Hooks
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    grid: {
      padding: {
        top: -20,
        left: -5,
        right: -5,
        bottom: -15
      },
      yaxis: {
        lines: { show: false }
      },
      xaxis: {
        lines: { show: false }
      }
    },
    legend: { show: false },
    stroke: {
      lineCap: 'round',
      width: 3,
      colors: [theme.palette.background.paper]
    },
    dataLabels: { enabled: false },
    colors: [theme.palette.primary.main, theme.palette.success.main],
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: '46%',
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'all'
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
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    },
    yaxis: {
      labels: { show: false }
    },
    responsive: [
      {
        breakpoint: 1520,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '55%'
            }
          }
        }
      },
      {
        breakpoint: 1370,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '62%'
            }
          }
        }
      },
      {
        breakpoint: 1298,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '68%'
            }
          }
        }
      },
      {
        breakpoint: 1200,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '28%'
            }
          }
        }
      },
      {
        breakpoint: 935,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '30%'
            }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '18%'
            }
          }
        }
      },
      {
        breakpoint: 470,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '24%'
            }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader title='Sessions' subheader='This Month' className='pbe-0' />
      <CardContent className='flex flex-col'>
        <AppReactApexCharts type='bar' height={98} width='100%' options={options} series={series} />
        <div className='flex items-center justify-between flex-wrap gap-x-4 gap-y-0.5'>
          <Typography variant='h4' color='text.primary'>
            45.1k
          </Typography>
          <Typography variant='body2' color='success.main'>
            +12.6%
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarChartSessionsWithNegativeValues
