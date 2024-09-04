'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import MuiTimeline from '@mui/lab/Timeline'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import Typography from '@mui/material/Typography'
import type { TimelineProps } from '@mui/lab/Timeline'

// Components Imports
import OptionMenu from '@core/components/option-menu'

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  }
})

const ActivityTimeline = () => {
  return (
    <Card>
      <CardHeader
        avatar={<i className='tabler-list-details text-xl' />}
        title='Activity Timeline'
        titleTypographyProps={{ variant: 'h5' }}
        action={<OptionMenu options={['Share timeline', 'Suggest edits', 'Report bug']} />}
        sx={{ '& .MuiCardHeader-avatar': { mr: 3 } }}
      />
      <CardContent className='flex flex-col gap-6 pbe-5'>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography className='font-medium' color='text.primary'>
                  12 Invoices have been paid
                </Typography>
                <Typography variant='caption'>12 min ago</Typography>
              </div>
              <Typography className='mbe-2'>Invoices have been paid to the company</Typography>
              <div className='flex items-center gap-2.5 is-fit rounded bg-actionHover plb-[5px] pli-2.5'>
                <img height={20} alt='invoice.pdf' src='/images/icons/pdf-document.png' />
                <Typography className='font-medium'>invoices.pdf</Typography>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='success' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography className='font-medium' color='text.primary'>
                  Client Meeting
                </Typography>
                <Typography variant='caption'>45 min ago</Typography>
              </div>
              <Typography className='mbe-2'>Project meeting with john @10:15am</Typography>
              <div className='flex items-center gap-2.5'>
                <Avatar src='/images/avatars/1.png' className='is-8 bs-8' />
                <div className='flex flex-col flex-wrap'>
                  <Typography variant='body2' className='font-medium'>
                    Lester McCarthy (Client)
                  </Typography>
                  <Typography variant='body2'>CEO of Pixinvent</Typography>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='info' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography className='font-medium' color='text.primary'>
                  Create a new project for client
                </Typography>
                <Typography variant='caption'>2 Day Ago</Typography>
              </div>
              <Typography className='mbe-2'>6 team members in a project</Typography>
              <AvatarGroup total={6} className='pull-up'>
                <Avatar alt='Travis Howard' src='/images/avatars/1.png' />
                <Avatar alt='Agnes Walker' src='/images/avatars/4.png' />
                <Avatar alt='John Doe' src='/images/avatars/2.png' />
              </AvatarGroup>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default ActivityTimeline
