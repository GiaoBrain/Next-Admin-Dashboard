// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Components Imports
import OptionMenu from '@core/components/option-menu'

type DataType = {
  title: string
  imgSrc: string
  amount: string
  subtitle: string
}

// Vars
const data: DataType[] = [
  {
    title: 'Apple iPhone 13',
    subtitle: '4567',
    amount: '$999.29',
    imgSrc: '/images/cards/apple-iPhone-13.png'
  },
  {
    title: 'Nike Air Jordan',
    subtitle: '3456',
    amount: '$72.40',
    imgSrc: '/images/cards/nike-air-jordan.png'
  },
  {
    title: 'Beats Studio 2',
    subtitle: '9485',
    amount: '$99.90',
    imgSrc: '/images/cards/beats-studio-2.png'
  },
  {
    title: 'Apple Watch Series 7',
    subtitle: '2345',
    amount: '$249.99',
    imgSrc: '/images/cards/apple-watch-series-7.png'
  },
  {
    title: 'Amazon Echo Dot',
    subtitle: '8959',
    amount: '$79.40',
    imgSrc: '/images/cards/amazon-echo-dot.png'
  },
  {
    title: 'PlayStation Console',
    subtitle: '7892',
    amount: '$129.48',
    imgSrc: '/images/cards/play-station-console.png'
  }
]

const PopularProducts = () => {
  return (
    <Card>
      <CardHeader
        title='Popular Products'
        subheader='Total 10.4k Visitors'
        action={<OptionMenu options={['Price - low to high', 'Price - high to low', 'Best seller']} />}
      />
      <CardContent className='flex flex-col gap-[1.625rem]'>
        {data.map((item, index) => (
          <div key={index} className='flex items-center gap-4'>
            <img src={item.imgSrc} alt={item.title} width={46} />
            <div className='flex flex-wrap justify-between items-center gap-x-4 gap-y-1 is-full'>
              <div className='flex flex-col'>
                <Typography className='font-medium' color='text.primary'>
                  {item.title}
                </Typography>
                <Typography variant='body2'>{`Item: #FXZ-${item.subtitle}`}</Typography>
              </div>
              <Typography>{item.amount}</Typography>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default PopularProducts
