// MUI imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Types Imports
import type { CardStatsSquareProps } from '@/types/pages/widgetTypes'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

const CardStatsSquare = (props: CardStatsSquareProps) => {
  // Props
  const { avatarColor, avatarIcon, stats, statsTitle, avatarIconSize, avatarVariant, avatarSize, avatarSkin } = props

  return (
    <Card>
      <CardContent className='flex flex-col items-center gap-2'>
        <CustomAvatar color={avatarColor} skin={avatarSkin} variant={avatarVariant} size={avatarSize}>
          <i className={classnames(avatarIcon, `text-[${avatarIconSize}px]`)} />
        </CustomAvatar>
        <div className='flex flex-col items-center gap-1'>
          <Typography variant='h5'>{stats}</Typography>
          <Typography color='text.secondary'>{statsTitle}</Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardStatsSquare
