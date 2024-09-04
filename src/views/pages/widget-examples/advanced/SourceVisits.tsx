// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

// Third-party Imports
import classnames from 'classnames'

// Components Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

type DataType = {
  icon: string
  title: string
  amount: string
  subtitle: string
  trendNumber: number
  trend?: 'positive' | 'negative'
}

// Vars
const data: DataType[] = [
  {
    title: 'Direct Source',
    subtitle: 'Direct link click',
    amount: '1.2k',
    trendNumber: 4.2,
    icon: 'tabler-shadow'
  },
  {
    title: 'Social Networks',
    subtitle: 'Social Channels',
    amount: '31.5k',
    trendNumber: 8.2,
    icon: 'tabler-globe'
  },
  {
    title: 'Email Newsletter',
    subtitle: 'Mail Campaigns',
    amount: '893',
    trendNumber: 2.4,
    icon: 'tabler-mail'
  },
  {
    title: 'Referrals',
    subtitle: 'Impact Radius Visits',
    amount: '342',
    trendNumber: 0.4,
    trend: 'negative',
    icon: 'tabler-external-link'
  },
  {
    title: 'ADVT',
    subtitle: 'Google ADVT',
    amount: '2.15k',
    trendNumber: 9.1,
    icon: 'tabler-ad'
  },
  {
    title: 'Other',
    subtitle: 'Many Sources',
    amount: '12.5k',
    trendNumber: 6.2,
    icon: 'tabler-star'
  }
]

const SourceVisits = () => {
  return (
    <Card>
      <CardHeader
        title='Source Visits'
        subheader='38.4k Visitors'
        action={<OptionMenu options={['Last Week', 'Last Month', 'Last Year']} />}
      />
      <CardContent className='flex flex-col gap-4'>
        {data.map((item, index) => (
          <div key={index} className='flex items-center gap-4'>
            <CustomAvatar skin='light' variant='rounded' size={34}>
              <i className={classnames(item.icon, 'text-[22px] text-textSecondary')} />
            </CustomAvatar>
            <div className='flex flex-wrap justify-between items-center gap-x-4 gap-y-1 is-full'>
              <div className='flex flex-col'>
                <Typography className='font-medium' color='text.primary'>
                  {item.title}
                </Typography>
                <Typography variant='body2'>{item.subtitle}</Typography>
              </div>
              <div className='flex items-center gap-4'>
                <Typography>{item.amount}</Typography>
                <Chip
                  variant='tonal'
                  size='small'
                  color={item.trend === 'negative' ? 'error' : 'success'}
                  label={`${item.trend === 'negative' ? '-' : '+'}${item.trendNumber}%`}
                />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default SourceVisits
