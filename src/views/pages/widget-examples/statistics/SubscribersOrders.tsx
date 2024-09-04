// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Progress from '@mui/material/LinearProgress'

// Types Imports
import type { ThemeColor } from '@core/types'

// Component Imports
import OptionMenu from '@core/components/option-menu'

type DataType = {
  title: string
  chipText: string
  progress: number
  subtitle: string
  chipColor?: ThemeColor
  progressColor?: ThemeColor
}

const data: DataType[] = [
  {
    progress: 85,
    chipText: '+92k',
    chipColor: 'success',
    title: 'Subscribers Gained',
    subtitle: '1.2k new subscriber'
  },
  {
    progress: 65,
    chipText: '+38k',
    chipColor: 'success',
    progressColor: 'info',
    title: 'Orders Received',
    subtitle: '2.4k new orders'
  }
]

const SubscribersOrders = () => {
  return (
    <Card>
      <CardHeader title='Statistics' action={<OptionMenu options={['Refresh', 'Share', 'Update']} />} />
      <CardContent className='flex flex-col gap-y-6'>
        {data.map((item, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <div className='flex items-center justify-between gap-3'>
              <Typography variant='h6'>{item.title}</Typography>
              <Chip variant='tonal' label={item.chipText} size='small' color={item.chipColor} />
            </div>
            <div>
              <div className='flex items-center justify-between gap-3'>
                <Typography>{item.subtitle}</Typography>
                <Typography variant='body2' color='text.disabled'>
                  {item.progress}%
                </Typography>
              </div>
              <Progress variant='determinate' value={item.progress} className='bs-2 mbs-1' color={item.progressColor} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default SubscribersOrders
