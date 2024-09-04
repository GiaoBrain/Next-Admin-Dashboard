// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Components Imports
import OptionMenu from '@core/components/option-menu'

type DataType = {
  title: string
  imgSrc: string
  subtitle: string
  trendNumber: number
  trend?: 'positive' | 'negative'
}

// Vars
const data: DataType[] = [
  {
    title: '$8.45k',
    subtitle: 'United States',
    trendNumber: 25.8,
    imgSrc: '/images/cards/us.png'
  },
  {
    title: '$7.78k',
    subtitle: 'Brazil',
    trendNumber: 16.2,
    trend: 'negative',
    imgSrc: '/images/cards/brazil.png'
  },
  {
    title: '$6.48k',
    subtitle: 'India',
    trendNumber: 12.3,
    imgSrc: '/images/cards/india.png'
  },
  {
    title: '$5.12k',
    subtitle: 'Australia',
    trendNumber: 11.9,
    trend: 'negative',
    imgSrc: '/images/cards/australia.png'
  },
  {
    title: '$4.45k',
    subtitle: 'France',
    trendNumber: 16.2,
    imgSrc: '/images/cards/france.png'
  },
  {
    title: '$3.90k',
    subtitle: 'China',
    trendNumber: 14.8,
    imgSrc: '/images/cards/china.png'
  }
]

const SalesByCountries = () => {
  return (
    <Card>
      <CardHeader
        title='Sales by Countries'
        subheader='Monthly Sales Overview'
        action={<OptionMenu options={['Last Week', 'Last Month', 'Last Year']} />}
      />
      <CardContent className='flex flex-col gap-4'>
        {data.map((item, index) => (
          <div key={index} className='flex items-center gap-4'>
            <img src={item.imgSrc} alt={item.subtitle} width={34} />
            <div className='flex flex-wrap justify-between items-center gap-x-4 gap-y-1 is-full'>
              <div className='flex flex-col'>
                <Typography className='font-medium' color='text.primary'>
                  {item.title}
                </Typography>
                <Typography variant='body2'>{item.subtitle}</Typography>
              </div>
              <div className='flex items-center gap-1'>
                <i
                  className={classnames(
                    item.trend === 'negative' ? 'tabler-chevron-down text-error' : 'tabler-chevron-up text-success',
                    'text-xl'
                  )}
                />
                <Typography
                  variant='h6'
                  color={`${item.trend === 'negative' ? 'error' : 'success'}.main`}
                >{`${item.trendNumber}%`}</Typography>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default SalesByCountries
