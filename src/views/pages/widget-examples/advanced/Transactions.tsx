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
  title: string
  amount: number
  subtitle: string
  avatarIcon: string
  avatarColor: ThemeColor
  amountDiff?: 'positive' | 'negative'
}

// Vars
const data: DataType[] = [
  {
    title: 'Wallet',
    subtitle: 'Starbucks',
    amount: 75,
    amountDiff: 'negative',
    avatarColor: 'primary',
    avatarIcon: 'tabler-wallet'
  },
  {
    title: 'Bank Transfer',
    subtitle: 'Add Money',
    amount: 480,
    avatarColor: 'success',
    avatarIcon: 'tabler-browser-check'
  },
  {
    title: 'PayPal',
    subtitle: 'Client Payment',
    amount: 268,
    avatarColor: 'error',
    avatarIcon: 'tabler-brand-paypal'
  },
  {
    title: 'Master Card',
    subtitle: 'Ordered iPhone 13',
    amount: 699,
    amountDiff: 'negative',
    avatarColor: 'secondary',
    avatarIcon: 'tabler-credit-card'
  },
  {
    title: 'Bank Transaction',
    subtitle: 'Refund',
    amount: 98,
    avatarColor: 'info',
    avatarIcon: 'tabler-currency-dollar'
  },
  {
    title: 'PayPal',
    subtitle: 'Client Payment',
    amount: 126,
    avatarColor: 'error',
    avatarIcon: 'tabler-brand-paypal'
  },
  {
    title: 'Bank Transfer',
    subtitle: 'Pay Office Rent',
    amount: 1290,
    amountDiff: 'negative',
    avatarColor: 'success',
    avatarIcon: 'tabler-browser-check'
  }
]

const Transactions = () => {
  return (
    <Card>
      <CardHeader
        title='Transactions'
        subheader='Total 58 transaction done in month'
        action={<OptionMenu options={['Refresh', 'Show all entries', 'Make payment']} />}
      />
      <CardContent className='flex flex-col gap-[1.125rem]'>
        {data.map((item, index) => (
          <div key={index} className='flex items-center gap-4'>
            <CustomAvatar skin='light' variant='rounded' color={item.avatarColor} size={34}>
              <i className={classnames(item.avatarIcon, 'text-[22px]')} />
            </CustomAvatar>
            <div className='flex flex-wrap justify-between items-center gap-x-4 gap-y-1 is-full'>
              <div className='flex flex-col'>
                <Typography className='font-medium' color='text.primary'>
                  {item.title}
                </Typography>
                <Typography variant='body2'>{item.subtitle}</Typography>
              </div>
              <Typography
                variant='h6'
                color={`${item.amountDiff === 'negative' ? 'error' : 'success'}.main`}
              >{`${item.amountDiff === 'negative' ? '-' : '+'}${item.amount}`}</Typography>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default Transactions
