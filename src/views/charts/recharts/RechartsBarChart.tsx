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
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from '@/libs/Recharts'
import type { TooltipProps } from '@/libs/Recharts'

// Styled Component Imports
const AppRecharts = dynamic(() => import('@/libs/styles/AppRecharts'))

// Vars
const data = [
  {
    name: '7/12',
    Apple: 80,
    Samsung: 130,
    Oneplus: 150,
    Motorola: 210
  },
  {
    name: '8/12',
    Apple: 100,
    Samsung: 150,
    Oneplus: 170,
    Motorola: 380
  },
  {
    name: '9/12',
    Apple: 80,
    Samsung: 140,
    Oneplus: 160,
    Motorola: 220
  },
  {
    name: '10/12',
    Apple: 100,
    Samsung: 150,
    Oneplus: 170,
    Motorola: 380
  },
  {
    name: '11/12',
    Apple: 50,
    Samsung: 90,
    Oneplus: 110,
    Motorola: 150
  },
  {
    name: '12/12',
    Apple: 125,
    Samsung: 90,
    Oneplus: 100,
    Motorola: 65
  },
  {
    name: '13/12',
    Apple: 70,
    Samsung: 110,
    Oneplus: 130,
    Motorola: 210
  },
  {
    name: '14/12',
    Apple: 100,
    Samsung: 150,
    Oneplus: 170,
    Motorola: 380
  },
  {
    name: '15/12',
    Apple: 80,
    Samsung: 100,
    Oneplus: 120,
    Motorola: 180
  },
  {
    name: '16/12',
    Apple: 30,
    Samsung: 60,
    Oneplus: 70,
    Motorola: 110
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

const RechartsBarChart = () => {
  // Hooks
  const theme = useTheme()

  return (
    <Card>
      <CardHeader
        title='Brand Turnover'
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
      />
      <CardContent>
        <div className='flex flex-wrap mbe-4 gap-6'>
          <Box className='flex items-center gap-1.5' sx={{ '& i': { color: '#826af9' } }}>
            <i className='tabler-circle-filled text-xs' />
            <Typography variant='body2'>Apple</Typography>
          </Box>
          <Box className='flex items-center gap-1.5' sx={{ '& i': { color: '#9f87ff' } }}>
            <i className='tabler-circle-filled text-xs' />
            <Typography variant='body2'>Samsung</Typography>
          </Box>
          <Box className='flex items-center gap-1.5' sx={{ '& i': { color: '#d2b0ff' } }}>
            <i className='tabler-circle-filled text-xs' />
            <Typography variant='body2'>Oneplus</Typography>
          </Box>
          <Box className='flex items-center gap-1.5' sx={{ '& i': { color: '#f8d3ff' } }}>
            <i className='tabler-circle-filled text-xs' />
            <Typography variant='body2'>Motorola</Typography>
          </Box>
        </div>
        <AppRecharts>
          <div className='bs-[350px]'>
            <ResponsiveContainer>
              <BarChart
                height={350}
                data={data}
                barSize={15}
                style={{ direction: theme.direction }}
                margin={{ left: -20 }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' reversed={theme.direction === 'rtl'} />
                <YAxis orientation={theme.direction === 'rtl' ? 'right' : 'left'} />
                <Tooltip content={CustomTooltip} />
                <Bar dataKey='Apple' stackId='a' fill='#826af9' />
                <Bar dataKey='Samsung' stackId='a' fill='#9f87ff' />
                <Bar dataKey='Oneplus' stackId='a' fill='#d2b0ff' />
                <Bar dataKey='Motorola' stackId='a' fill='#f8d3ff' radius={[15, 15, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </AppRecharts>
      </CardContent>
    </Card>
  )
}

export default RechartsBarChart
