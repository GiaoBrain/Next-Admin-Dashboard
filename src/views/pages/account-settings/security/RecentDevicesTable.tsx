// React Imports
import type { ReactElement } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

type RecentDeviceDataType = {
  browserIcon: ReactElement
  browserName: string
  device: string
  location: string
  date: string
}

// Vars
const recentDeviceData: RecentDeviceDataType[] = [
  {
    location: 'Switzerland',
    device: 'HP Spectre 360',
    date: '10, Sept 20:07',
    browserName: 'Chrome on Windows',
    browserIcon: <i className='tabler-brand-windows text-[22px] text-info' />
  },
  {
    location: 'Los Angeles, CA',
    device: 'Google Pixel 3a',
    date: '20 Apr 2022, 10:20',
    browserName: 'Chrome on Android',
    browserIcon: <i className='tabler-brand-android text-[22px] text-success' />
  },
  {
    location: 'San Francisco, CA',
    device: 'iPhone 12x',
    date: '16 Apr 2022, 04:20',
    browserName: 'Chrome on iPhone',
    browserIcon: <i className='tabler-device-mobile text-[22px] text-error' />
  },
  {
    location: 'India',
    device: 'Apple iMac',
    date: '28 Apr 2022, 18:20',
    browserName: 'Chrome on MacOS',
    browserIcon: <i className='tabler-brand-apple text-[22px] text-secondary' />
  },
  {
    location: 'Switzerland',
    device: 'Macbook Pro',
    date: '20 Apr 2022, 10:20',
    browserName: 'Chrome on Windows',
    browserIcon: <i className='tabler-brand-apple text-[22px] text-warning' />
  },
  {
    location: 'Dubai',
    device: 'Oneplus 9 Pro',
    date: '16 Apr 2022, 04:20',
    browserName: 'Chrome on Android',
    browserIcon: <i className='tabler-brand-android text-[22px] text-success' />
  }
]

const RecentDevicesTable = () => {
  return (
    <Card>
      <CardHeader title='Recent Devices' />
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>Browser</th>
              <th>Device</th>
              <th>Location</th>
              <th>Recent Activities</th>
            </tr>
          </thead>
          <tbody>
            {recentDeviceData.map((device, index) => (
              <tr key={index}>
                <td>
                  <div className='flex items-center gap-2.5'>
                    {device.browserIcon}
                    <Typography className='font-medium' color='text.primary'>
                      {device.browserName}
                    </Typography>
                  </div>
                </td>
                <td>
                  <Typography>{device.device}</Typography>
                </td>
                <td>
                  <Typography>{device.location}</Typography>
                </td>
                <td>
                  <Typography>{device.date}</Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default RecentDevicesTable
