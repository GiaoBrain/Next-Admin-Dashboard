'use client'

// React Imports
import { Fragment, useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'
import type { TimelineProps } from '@mui/lab/Timeline'

// Components Imports
import OptionMenu from '@core/components/option-menu'

type TimelineItemData = {
  name: string
  address: string
}

type TimelineData = Record<'sender' | 'receiver', TimelineItemData>

type Data = Record<'new' | 'preparing' | 'shipping', TimelineData[]>

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  },
  '& .MuiTimelineDot-root': {
    border: 0,
    padding: 0
  }
})

// Vars
const data: Data = {
  new: [
    {
      sender: {
        name: 'Micheal Hughes',
        address: '101 Boulder, California (CA), 933130'
      },
      receiver: {
        name: 'Daisy Coleman',
        address: '939 Orange, California (CA), 910614'
      }
    },
    {
      sender: {
        name: 'Glenn Todd',
        address: '1713 Garnet, California (CA), 939573'
      },
      receiver: {
        name: 'Arthur West',
        address: '156 Blaze, California (CA), 925878'
      }
    }
  ],
  preparing: [
    {
      sender: {
        name: 'Rose Cole',
        address: '61 Unions, California (CA), 922523'
      },
      receiver: {
        name: 'Polly Spencer',
        address: '865 Delta, California (CA), 932830'
      }
    },
    {
      sender: {
        name: 'Jerry Wood',
        address: '37 Marjory, California (CA), 951958'
      },
      receiver: {
        name: 'Sam McCormick',
        address: '926 Reynolds, California (CA), 910279'
      }
    }
  ],
  shipping: [
    {
      sender: {
        name: 'Alex Walton',
        address: '78 Judson, California (CA), 956084'
      },
      receiver: {
        name: 'Eula Griffin',
        address: '56 Bernard, California (CA), 965133'
      }
    },
    {
      sender: {
        name: 'Lula Barton',
        address: '95 Gaylord, California (CA), 991955'
      },
      receiver: {
        name: 'Craig Jacobs',
        address: '73 Sandy, California (CA), 954566'
      }
    }
  ]
}

const Orders = () => {
  // States
  const [value, setValue] = useState<string>('new')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Card>
      <CardHeader
        title='Orders by Countries'
        subheader='62 deliveries in progress'
        action={<OptionMenu options={['Show all orders', 'Share', 'Refresh']} />}
        className='pbe-4'
      />
      <TabContext value={value}>
        <TabList variant='fullWidth' onChange={handleChange} aria-label='full width tabs example'>
          <Tab value='new' label='New' />
          <Tab value='preparing' label='Preparing' />
          <Tab value='shipping' label='Shipping' />
        </TabList>
        <TabPanel value={value} className='pbs-0'>
          <CardContent>
            {data[value as keyof Data].map((item: TimelineData, index: number) => {
              return (
                <Fragment key={index}>
                  <Timeline>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot variant='outlined' className='mlb-0'>
                          <i className='tabler-circle-check text-xl text-success' />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent className='flex flex-col gap-0.5 pbs-0 pis-5 pbe-5'>
                        <Typography variant='body2' className='uppercase' color='success.main'>
                          Sender
                        </Typography>
                        <Typography color='text.primary' className='font-medium'>
                          {item.sender.name}
                        </Typography>
                        <Typography>{item.sender.address}</Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot variant='outlined' className='mlb-0'>
                          <i className='tabler-map-pin text-xl text-primary' />
                        </TimelineDot>
                      </TimelineSeparator>
                      <TimelineContent className='flex flex-col pbe-0 gap-0.5 pbs-0 pis-5'>
                        <Typography variant='body2' className='uppercase' color='primary.main'>
                          Receiver
                        </Typography>
                        <Typography color='text.primary' className='font-medium'>
                          {item.receiver.name}
                        </Typography>
                        <Typography>{item.receiver.address}</Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                  {index !== data[value as keyof Data].length - 1 && <Divider className='mlb-4 border-dashed' />}
                </Fragment>
              )
            })}
          </CardContent>
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default Orders
