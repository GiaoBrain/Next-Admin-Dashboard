'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useTheme } from '@mui/material/styles'

// Component Imports
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from '@/libs/Recharts'
import type { TooltipProps } from '@/libs/Recharts'

// Styled Component Imports
const AppRecharts = dynamic(() => import('@/libs/styles/AppRecharts'))

// Vars
const data = [
  {
    name: '7/12',
    Sales: 20,
    Clicks: 60,
    Visits: 100
  },
  {
    name: '8/12',
    Sales: 40,
    Clicks: 80,
    Visits: 120
  },
  {
    name: '9/12',
    Sales: 30,
    Clicks: 70,
    Visits: 90
  },
  {
    name: '10/12',
    Sales: 70,
    Clicks: 110,
    Visits: 170
  },
  {
    name: '11/12',
    Sales: 40,
    Clicks: 80,
    Visits: 130
  },
  {
    name: '12/12',
    Sales: 60,
    Clicks: 80,
    Visits: 160
  },
  {
    name: '13/12',
    Sales: 50,
    Clicks: 100,
    Visits: 140
  },
  {
    name: '14/12',
    Sales: 140,
    Clicks: 90,
    Visits: 240
  },
  {
    name: '15/12',
    Sales: 120,
    Clicks: 180,
    Visits: 220
  },
  {
    name: '16/12',
    Sales: 100,
    Clicks: 160,
    Visits: 180
  },
  {
    name: '17/12',
    Sales: 140,
    Clicks: 140,
    Visits: 270
  },
  {
    name: '18/12',
    Sales: 180,
    Clicks: 200,
    Visits: 280
  },
  {
    name: '19/12',
    Sales: 220,
    Clicks: 220,
    Visits: 375
  }
]

const CustomTooltip = (props: TooltipProps<any, any>) => {
  // Props
  const { active, payload } = props

  if (active && payload) {
    return (
      <div className='recharts-custom-tooltip'>
        <Typography color='text.primary'>{props.label}</Typography>
        <Divider />
        {props &&
          props.payload &&
          props.payload.map((i: any) => {
            return (
              <Box key={i.dataKey} className='flex items-center gap-2.5' sx={{ '& i': { color: i.fill } }}>
                <i className='tabler-circle-filled text-[10px]' />
                <Typography variant='body2'>{`${i.dataKey} : ${i.payload[i.dataKey]}`}</Typography>
              </Box>
            )
          })}
      </div>
    )
  }

  return null
}

const RechartsAreaChart = () => {
  // Hooks
  const theme = useTheme()

  return (
    <Card>
      <CardHeader
        title='Website Data'
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
      />
      <CardContent>
        <div className='flex mbe-4 gap-6'>
          <Box className='flex items-center gap-1.5' sx={{ '& i': { color: 'rgb(115, 103, 240)' } }}>
            <i className='tabler-circle-filled text-xs' />
            <Typography variant='body2'>Click</Typography>
          </Box>
          <Box className='flex items-center gap-1.5' sx={{ '& i': { color: 'rgba(115, 103, 240, .5)' } }}>
            <i className='tabler-circle-filled text-xs' />
            <Typography variant='body2'>Sales</Typography>
          </Box>
          <Box className='flex items-center gap-1.5' sx={{ '& i': { color: 'rgba(115, 103, 240, .2)' } }}>
            <i className='tabler-circle-filled text-xs' />
            <Typography variant='body2'>Visits</Typography>
          </Box>
        </div>
        <AppRecharts>
          <div className='bs-[350px]'>
            <ResponsiveContainer>
              <AreaChart height={350} data={data} style={{ direction: theme.direction }} margin={{ left: -20 }}>
                <CartesianGrid />
                <XAxis dataKey='name' reversed={theme.direction === 'rtl'} />
                <YAxis orientation={theme.direction === 'rtl' ? 'right' : 'left'} />
                <Tooltip content={CustomTooltip} />
                <Area dataKey='Clicks' stackId='Clicks' stroke='0' fill='rgb(115, 103, 240)' />
                <Area dataKey='Sales' stackId='Sales' stroke='0' fill='rgba(115, 103, 240, .5)' />
                <Area dataKey='Visits' stackId='Visits' stroke='0' fill='rgba(115, 103, 240, .2)' />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </AppRecharts>
      </CardContent>
    </Card>
  )
}

export default RechartsAreaChart
