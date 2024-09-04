// React Imports
import type { ReactElement } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

type DataType = {
  device: string
  browser: string
  location: string
  recentActivity: string
  browserIcon: ReactElement
}

// Vars
const recentDeviceData: DataType[] = [
  {
    device: 'Dell XPS 15',
    location: 'United States',
    browser: 'Chrome on Windows',
    recentActivity: '10, Jan 2020 20:07',
    browserIcon: <i className='tabler-brand-windows text-[22px] text-info' />
  },
  {
    location: 'Ghana',
    device: 'Google Pixel 3a',
    browser: 'Chrome on Android',
    recentActivity: '11, Jan 2020 10:16',
    browserIcon: <i className='tabler-brand-android text-[22px] text-success' />
  },
  {
    location: 'Mayotte',
    device: 'Apple iMac',
    browser: 'Chrome on MacOS',
    recentActivity: '11, Jan 2020 12:10',
    browserIcon: <i className='tabler-brand-apple text-[22px] text-secondary' />
  },
  {
    location: 'Mauritania',
    device: 'Apple iPhone XR',
    browser: 'Chrome on iPhone',
    recentActivity: '12, Jan 2020 8:29',
    browserIcon: <i className='tabler-device-mobile text-[22px] text-error' />
  }
]

const RecentDevice = () => {
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
                  <div className='flex items-center gap-4'>
                    {device.browserIcon}
                    <Typography color='text.primary'>{device.browser}</Typography>
                  </div>
                </td>
                <td>
                  <Typography>{device.device}</Typography>
                </td>
                <td>
                  <Typography>{device.location}</Typography>
                </td>
                <td>
                  <Typography>{device.recentActivity}</Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default RecentDevice
