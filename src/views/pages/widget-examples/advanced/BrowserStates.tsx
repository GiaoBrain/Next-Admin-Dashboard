'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

import type { ThemeColor } from '@core/types'

// Components Imports
import OptionMenu from '@core/components/option-menu'

type DataType = {
  title: string
  imgSrc: string
  progress: number
  percentage: string
  progressColor: ThemeColor
}

// Vars
const data: DataType[] = [
  {
    title: 'Google Chrome',
    progress: 67,
    percentage: '54.4%',
    progressColor: 'primary',
    imgSrc: '/images/logos/google-chrome.png'
  },
  {
    title: 'Apple Safari',
    progress: 40,
    percentage: '14.6%',
    progressColor: 'success',
    imgSrc: '/images/logos/safari.png'
  },
  {
    title: 'Mozilla Firefox',
    progress: 30,
    percentage: '6.1%',
    progressColor: 'secondary',
    imgSrc: '/images/logos/mozilla-firefox.png'
  },
  {
    title: 'Opera Mini',
    progress: 20,
    percentage: '8.0%',
    progressColor: 'info',
    imgSrc: '/images/logos/opera-mini.png'
  },
  {
    title: 'Internet Explorer',
    progress: 15,
    percentage: '4.2%',
    progressColor: 'warning',
    imgSrc: '/images/logos/internet-explorer.png'
  },
  {
    title: 'Brave',
    progress: 15,
    percentage: '0.3%',
    progressColor: 'error',
    imgSrc: '/images/logos/brave.png'
  }
]

const BrowserStates = () => {
  return (
    <Card>
      <CardHeader
        title='Browser States'
        subheader='Counter April 2022'
        action={<OptionMenu options={['Last 28 Days', 'Last Month', 'Last Year']} />}
      />
      <CardContent className='flex flex-col gap-8'>
        {data.map((item, index) => (
          <div key={index} className='flex items-center gap-4'>
            <img src={item.imgSrc} alt={item.title} width={28} />
            <div className='flex flex-wrap justify-between items-center gap-x-4 gap-y-1 is-full'>
              <Typography className='font-medium' color='text.primary'>
                {item.title}
              </Typography>
              <div className='flex items-center gap-4'>
                <Typography>{item.percentage}</Typography>
                <div className='flex relative'>
                  <CircularProgress
                    variant='determinate'
                    size={26}
                    value={100}
                    thickness={5}
                    sx={{ position: 'absolute', color: theme => theme.palette.customColors.trackBg }}
                  />
                  <CircularProgress
                    variant='determinate'
                    size={26}
                    value={item.progress}
                    thickness={5}
                    color={item.progressColor}
                    sx={{ '& .MuiCircularProgress-circle': { strokeLinecap: 'round' } }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default BrowserStates
