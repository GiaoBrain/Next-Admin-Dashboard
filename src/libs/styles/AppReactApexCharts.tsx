'use client'

// MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import type { BoxProps } from '@mui/material/Box'

// Third-party Imports
import type { Props } from 'react-apexcharts'

// Component Imports
import ReactApexcharts from '@/libs/ApexCharts'

type ApexChartWrapperProps = Props & {
  boxProps?: BoxProps
}

// Styled Components
const ApexChartWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  '& .apexcharts-canvas': {
    "& line[stroke='transparent']": {
      display: 'none'
    },
    '& .apexcharts-tooltip': {
      boxShadow: theme.customShadows.xs,
      borderColor: theme.palette.divider,
      background: theme.palette.background.paper,
      ...(theme.direction === 'rtl' && {
        '.apexcharts-tooltip-marker': {
          marginInlineEnd: 10,
          marginInlineStart: 0
        },
        '.apexcharts-tooltip-text-y-value': {
          marginInlineStart: 5,
          marginInlineEnd: 0
        }
      }),
      '& .apexcharts-tooltip-title': {
        fontWeight: 600,
        borderColor: theme.palette.divider,
        background: theme.palette.background.paper
      },
      '&.apexcharts-theme-light': {
        color: theme.palette.text.primary
      },
      '&.apexcharts-theme-dark': {
        color: theme.palette.common.white
      },
      '& .apexcharts-tooltip-series-group:first-of-type': {
        paddingBottom: 0
      },
      '& .bar-chart': {
        padding: theme.spacing(2, 2.5)
      }
    },
    '& .apexcharts-xaxistooltip': {
      borderColor: theme.palette.divider,
      background: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.customColors.bodyBg,
      '&:after': {
        borderBottomColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.customColors.bodyBg
      },
      '&:before': {
        borderBottomColor: theme.palette.divider
      }
    },
    '& .apexcharts-yaxistooltip': {
      borderColor: theme.palette.divider,
      background: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.customColors.bodyBg,
      '&:after': {
        borderLeftColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.customColors.bodyBg
      },
      '&:before': {
        borderLeftColor: theme.palette.divider
      }
    },
    '& .apexcharts-xaxistooltip-text, & .apexcharts-yaxistooltip-text': {
      color: theme.palette.text.primary
    },
    '& .apexcharts-yaxis .apexcharts-yaxis-texts-g .apexcharts-yaxis-label': {
      textAnchor: theme.direction === 'rtl' ? 'start' : undefined
    },
    '& .apexcharts-text, & .apexcharts-tooltip-text, & .apexcharts-datalabel-label, & .apexcharts-datalabel, & .apexcharts-xaxistooltip-text, & .apexcharts-yaxistooltip-text, & .apexcharts-legend-text':
      {
        fontFamily: `${theme.typography.fontFamily} !important`
      },
    '& .apexcharts-pie-label': {
      filter: 'none'
    },
    '& .apexcharts-marker': {
      boxShadow: 'none'
    }
  }
}))

const AppReactApexCharts = (props: ApexChartWrapperProps) => {
  // Props
  const { boxProps, ...rest } = props

  return (
    <ApexChartWrapper {...boxProps}>
      <ReactApexcharts {...rest} />
    </ApexChartWrapper>
  )
}

export default AppReactApexCharts
