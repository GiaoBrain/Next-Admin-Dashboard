'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'

// Type Imports
import type { ProfileTeamsTechType, ProfileConnectionsType } from '@/types/pages/profileTypes'

// Component Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

type Props = {
  teamsTech?: ProfileTeamsTechType[]
  connections?: ProfileConnectionsType[]
}

const ConnectionsTeams = (props: Props) => {
  // props
  const { teamsTech, connections } = props

  return (
    <>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader
            title='Connections'
            action={<OptionMenu options={['Share Connections', 'Suggest Edits', { divider: true }, 'Report Bug']} />}
          />
          <CardContent className='flex flex-col gap-4'>
            {connections &&
              connections.map((connection, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <div className='flex items-center flex-grow gap-2'>
                    <CustomAvatar src={connection.avatar} size={38} />
                    <div className='flex flex-grow flex-col'>
                      <Typography className='font-medium' color='text.primary'>
                        {connection.name}
                      </Typography>
                      <Typography variant='body2'>{connection.connections} Connections</Typography>
                    </div>
                  </div>
                  <Button
                    variant={connection.isFriend ? 'tonal' : 'contained'}
                    className='is-[38px] bs-[38px] min-is-0 p-2'
                  >
                    <i
                      className={connection.isFriend ? 'tabler-user-check text-[22px]' : 'tabler-user-x text-[22px]'}
                    />
                  </Button>
                </div>
              ))}
          </CardContent>
          <CardActions className='flex justify-center'>
            <Typography href='/' component={Link} onClick={e => e.preventDefault()} color='primary'>
              View all connections
            </Typography>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader
            title='Teams'
            action={<OptionMenu options={['Share Teams', 'Suggest Edits', { divider: true }, 'Report Bug']} />}
          />
          <CardContent className='flex flex-col gap-4'>
            {teamsTech &&
              teamsTech.map((team: ProfileTeamsTechType, index) => (
                <div key={index} className='flex'>
                  <div className='flex flex-grow  items-center gap-2'>
                    <CustomAvatar src={team.avatar} size={38} />
                    <div className='flex flex-grow flex-col'>
                      <Typography className='font-medium' color='text.primary'>
                        {team.title}
                      </Typography>
                      <Typography variant='body2'>{team.members} Members</Typography>
                    </div>
                  </div>
                  <Chip color={team.ChipColor} label={team.chipText} size='small' variant='tonal' />
                </div>
              ))}
          </CardContent>
          <CardActions className='flex justify-center'>
            <Typography href='/' component={Link} onClick={e => e.preventDefault()} color='primary'>
              View all teams
            </Typography>
          </CardActions>
        </Card>
      </Grid>
    </>
  )
}

export default ConnectionsTeams
