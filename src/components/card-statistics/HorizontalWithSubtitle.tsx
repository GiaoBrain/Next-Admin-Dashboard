// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ThemeColor } from '@core/types'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

export type UserDataType = {
  title: string
  value: string
  avatarIcon: string
  avatarColor?: ThemeColor
  change: string
  changeNumber: string
  subTitle: string
}

const HorizontalWithSubtitle = (props: UserDataType) => {
  // Props
  const { title, value, avatarIcon, avatarColor, change, changeNumber, subTitle } = props

  return (
    <Card>
      <CardContent className='flex justify-between gap-1'>
        <div className='flex flex-col gap-1 flex-grow'>
          <Typography color='text.primary'>{title}</Typography>
          <div className='flex items-center gap-2 flex-wrap'>
            <Typography variant='h4'>{value}</Typography>
            <Typography color={change === 'negative' ? 'error.main' : 'success.main'}>
              {`(${change === 'negative' ? '-' : '+'}${changeNumber})`}
            </Typography>
          </div>
          <Typography variant='body2'>{subTitle}</Typography>
        </div>
        <CustomAvatar color={avatarColor} skin='light' variant='rounded' size={42}>
          <i className={classnames(avatarIcon, 'text-[26px]')} />
        </CustomAvatar>
      </CardContent>
    </Card>
  )
}

export default HorizontalWithSubtitle
