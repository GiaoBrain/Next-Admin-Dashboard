'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { styled } from '@mui/material/styles'
import MuiTimeline from '@mui/lab/Timeline'
import type { TimelineProps } from '@mui/lab/Timeline'

//Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Styled Components
const Timeline = styled(MuiTimeline)<TimelineProps>({
  '& .MuiTimelineItem-root': {
    '&:before': {
      display: 'none'
    }
  }
})

const ActivityTimeline = () => {
  return (
    <Card>
      <CardHeader
        title='Activity Timeline'
        avatar={<i className='tabler-chart-bar text-textSecondary' />}
        titleTypographyProps={{ variant: 'h5' }}
      />
      <CardContent>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex items-center justify-between flex-wrap gap-x-4 pbe-[7px]'>
                <Typography className='text-textPrimary font-medium'>12 Invoices have been paid</Typography>
                <Typography variant='caption'>12 min ago</Typography>
              </div>
              <Typography className='mbe-2'>Invoices have been paid to the company.</Typography>
              <div className='flex'>
                <div className='flex gap-2.5 items-center pli-2.5 bg-actionHover plb-[0.3125rem] rounded'>
                  <img alt='invoice.pdf' src='/images/icons/pdf-document.png' className='bs-5' />
                  <Typography className='font-medium'>invoice.pdf</Typography>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='success' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex items-center justify-between flex-wrap gap-x-4 pbe-[7px]'>
                <Typography className='text-textPrimary font-medium'>Client Meeting</Typography>
                <Typography variant='caption'>45 min ago</Typography>
              </div>
              <Typography className='mbe-2'>Project meeting with john @10:15am</Typography>
              <div className='flex items-center gap-2.5'>
                <CustomAvatar src='/images/avatars/1.png' size={32} />
                <div>
                  <Typography className='font-medium' variant='body2'>
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
              <div className='flex items-center justify-between flex-wrap gap-x-4 pbe-[7px]'>
                <Typography className='text-textPrimary font-medium'>Create a new project for client</Typography>
                <Typography variant='caption'>2 Day Ago</Typography>
              </div>
              <Typography className='mbe-2'>6 team members in a project</Typography>
              <AvatarGroup total={6}>
                <Avatar alt='Remy Sharp' src='/images/avatars/1.png' />
                <Avatar alt='Travis Howard' src='/images/avatars/2.png' />
                <Avatar alt='Cindy Baker' src='/images/avatars/3.png' />
              </AvatarGroup>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default ActivityTimeline
