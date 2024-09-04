// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'

import type { ThemeColor } from '@core/types'

// Components Imports
import OptionMenu from '@core/components/option-menu'

type DataType = {
  title: string
  imgSrc: string
  progress: number
  subtitle: string
  progressColor: ThemeColor
}

// Vars
const data: DataType[] = [
  {
    title: 'Laravel',
    subtitle: 'eCommerce',
    progress: 54,
    progressColor: 'error',
    imgSrc: '/images/logos/laravel.png'
  },
  {
    title: 'Figma',
    subtitle: 'App UI Kit',
    progress: 85,
    progressColor: 'primary',
    imgSrc: '/images/logos/figma.png'
  },
  {
    title: 'VusJs',
    subtitle: 'Calendar App',
    progress: 64,
    progressColor: 'success',
    imgSrc: '/images/logos/vue.png'
  },
  {
    title: 'React',
    subtitle: 'Dashboard',
    progress: 40,
    progressColor: 'info',
    imgSrc: '/images/logos/react.png'
  },
  {
    title: 'Bootstrap',
    subtitle: 'Website',
    progress: 17,
    progressColor: 'primary',
    imgSrc: '/images/logos/bootstrap.png'
  },
  {
    title: 'Sketch',
    subtitle: 'Website Design',
    progress: 30,
    progressColor: 'warning',
    imgSrc: '/images/logos/sketch.png'
  }
]

const ActiveProjects = () => {
  return (
    <Card>
      <CardHeader
        title='Active Projects'
        subheader='Average 72% completed'
        action={<OptionMenu options={['Refresh', 'Update', 'Share']} />}
      />
      <CardContent className='flex flex-col gap-4'>
        {data.map((item, index) => (
          <div key={index} className='flex items-center gap-4'>
            <img src={item.imgSrc} alt={item.title} width={32} />
            <div className='flex flex-wrap justify-between items-center gap-x-4 gap-y-1 is-full'>
              <div className='flex flex-col'>
                <Typography className='font-medium' color='text.primary'>
                  {item.title}
                </Typography>
                <Typography variant='body2'>{item.subtitle}</Typography>
              </div>
              <div className='flex justify-between items-center is-32'>
                <LinearProgress
                  value={item.progress}
                  variant='determinate'
                  color={item.progressColor}
                  className='min-bs-2 is-20'
                />
                <Typography color='text.disabled'>{`${item.progress}%`}</Typography>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default ActiveProjects
