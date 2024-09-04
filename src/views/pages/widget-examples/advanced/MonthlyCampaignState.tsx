// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

import type { ThemeColor } from '@core/types'

// Components Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

type DataType = {
  icon: string
  title: string
  amount: string
  avatarColor: ThemeColor
  trendNumber: string
  trend?: 'positive' | 'negative'
}

// Vars
const data: DataType[] = [
  {
    title: 'Emails',
    amount: '12,346',
    trendNumber: '0.3%',
    avatarColor: 'success',
    icon: 'tabler-mail'
  },
  {
    title: 'Opened',
    amount: '8,734',
    trendNumber: '2.1%',
    avatarColor: 'info',
    icon: 'tabler-link'
  },
  {
    title: 'Clicked',
    amount: '967',
    trendNumber: '1.4%',
    trend: 'negative',
    avatarColor: 'warning',
    icon: 'tabler-mouse'
  },
  {
    title: 'Subscribe',
    amount: '345',
    trendNumber: '8.5%',
    avatarColor: 'primary',
    icon: 'tabler-users'
  },
  {
    title: 'Complaints',
    amount: '10',
    trendNumber: '1.5%',
    trend: 'negative',
    avatarColor: 'secondary',
    icon: 'tabler-alert-triangle'
  },
  {
    title: 'Unsubscribe',
    amount: '86',
    trendNumber: '0.8%',
    avatarColor: 'error',
    icon: 'tabler-ban'
  }
]

const MonthlyCampaignState = () => {
  return (
    <Card>
      <CardHeader
        title='Monthly Campaign State'
        subheader='8.52k Social Visitors'
        action={<OptionMenu options={['Last Month', 'Last 6 Months', 'Last Year']} />}
      />
      <CardContent className='flex flex-col gap-[1.5625rem]'>
        {data.map((item, index) => (
          <div key={index} className='flex items-center gap-4'>
            <CustomAvatar skin='light' variant='rounded' color={item.avatarColor} size={34}>
              <i className={classnames(item.icon, 'text-[22px]')} />
            </CustomAvatar>
            <div className='flex flex-wrap justify-between items-center gap-x-4 gap-y-1 is-full'>
              <Typography className='font-medium' color='text.primary'>
                {item.title}
              </Typography>
              <div className='flex items-center gap-4'>
                <Typography>{item.amount}</Typography>
                <Typography
                  className='flex justify-end is-11'
                  color={`${item.trend === 'negative' ? 'error' : 'success'}.main`}
                >
                  {item.trendNumber}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default MonthlyCampaignState
