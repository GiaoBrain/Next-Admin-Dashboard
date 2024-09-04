'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import { useColorScheme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Components Imports
import OptionMenu from '@core/components/option-menu'

// Types Imports
import type { ThemeColor, SystemMode } from '@core/types'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

type DataType = {
  date: string
  trend: string
  imgName: string
  cardType: string
  cardNumber: string
  status: 'verified' | 'rejected' | 'pending' | 'on-hold'
}

type StatusObj = Record<
  DataType['status'],
  {
    text: string
    color: ThemeColor
  }
>

// Vars
const data: DataType[] = [
  {
    trend: '+$1,678',
    status: 'verified',
    cardType: 'Credit',
    cardNumber: '*4230',
    imgName: 'visa',
    date: `17 Mar ${new Date().getFullYear()}`
  },
  {
    trend: '-$839',
    status: 'rejected',
    cardType: 'Credit',
    cardNumber: '*5578',
    imgName: 'mastercard',
    date: `12 Feb ${new Date().getFullYear()}`
  },
  {
    trend: '+$435',
    cardType: 'ATM',
    status: 'verified',
    cardNumber: '*4567',
    imgName: 'american-express',
    date: `28 Feb ${new Date().getFullYear()}`
  },
  {
    trend: '+$2,345',
    status: 'pending',
    cardType: 'Credit',
    cardNumber: '*5699',
    imgName: 'visa',
    date: `08 Jan ${new Date().getFullYear()}`
  },
  {
    trend: '+$1,758',
    status: 'rejected',
    cardType: 'Credit',
    cardNumber: '*2451',
    imgName: 'visa',
    date: `19 Oct ${new Date().getFullYear()}`
  }
]

const statusObj: StatusObj = {
  rejected: { text: 'Rejected', color: 'error' },
  pending: { text: 'Pending', color: 'secondary' },
  'on-hold': { text: 'On hold', color: 'warning' },
  verified: { text: 'Verified', color: 'success' }
}

const LastTransaction = ({ serverMode }: { serverMode: SystemMode }) => {
  // Hooks
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode

  return (
    <Card>
      <CardHeader
        title='Last Transaction'
        action={<OptionMenu options={['Show all entries', 'Refresh', 'Download']} />}
      />
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead className='uppercase'>
            <tr className='border-be'>
              <th className='leading-6 plb-4 pis-6 pli-2'>Card</th>
              <th className='leading-6 plb-4 pli-2'>Date</th>
              <th className='leading-6 plb-4 pli-2'>Status</th>
              <th className='leading-6 plb-4 pie-6 pli-2 text-right'>Trend</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className='border-0'>
                <td className='pis-6 pli-2 plb-3'>
                  <div className='flex items-center gap-4'>
                    <Avatar
                      variant='rounded'
                      className={classnames('is-[50px] bs-[30px]', {
                        'bg-white': _mode === 'dark',
                        'bg-actionHover': _mode === 'light'
                      })}
                    >
                      <img width={30} alt={row.imgName} src={`/images/logos/${row.imgName}.png`} />
                    </Avatar>
                    <div className='flex flex-col'>
                      <Typography color='text.primary'>{row.cardNumber}</Typography>
                      <Typography variant='body2' color='text.disabled'>
                        {row.cardType}
                      </Typography>
                    </div>
                  </div>
                </td>
                <td className='pli-2 plb-3'>
                  <div className='flex flex-col'>
                    <Typography color='text.primary'>Sent</Typography>
                    <Typography variant='body2' color='text.disabled'>
                      {row.date}
                    </Typography>
                  </div>
                </td>
                <td className='pli-2 plb-3'>
                  <Chip
                    variant='tonal'
                    size='small'
                    label={statusObj[row.status].text}
                    color={statusObj[row.status].color}
                  />
                </td>
                <td className='pli-2 plb-3 pie-6 text-right'>
                  <Typography color='text.primary'>{row.trend}</Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default LastTransaction
