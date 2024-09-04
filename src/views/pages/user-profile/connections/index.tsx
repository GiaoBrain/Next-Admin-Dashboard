// MUI Imports
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Type Imports
import type { ConnectionsTabType } from '@/types/pages/profileTypes'

// Component Imports
import OptionMenu from '@core/components/option-menu'
import Link from '@components/Link'

const Connections = ({ data }: { data?: ConnectionsTabType[] }) => {
  return (
    <Grid container spacing={6}>
      {data &&
        data.map((item, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className='relative'>
                <OptionMenu
                  iconClassName='text-textDisabled'
                  options={[
                    'Share Connection',
                    'Block Connection',
                    { divider: true },
                    {
                      text: 'Delete',
                      menuItemProps: { className: 'text-error hover:bg-[var(--mui-palette-error-lightOpacity)]' }
                    }
                  ]}
                  iconButtonProps={{ className: 'absolute top-6 right-5 text-textDisabled' }}
                />
                <CardContent className='flex items-center flex-col gap-6'>
                  <Avatar src={item.avatar} className='!mbs-5 bs-[100px] is-[100px]' />
                  <div className='flex flex-col items-center'>
                    <Typography variant='h5'>{item.name}</Typography>
                    <Typography>{item.designation}</Typography>
                  </div>
                  <div className='flex items-center gap-4'>
                    {item.chips.map((chip, index) => (
                      <Link key={index}>
                        <Chip variant='tonal' label={chip.title} color={chip.color} size='small' />
                      </Link>
                    ))}
                  </div>
                  <div className='flex is-full items-center justify-around flex-wrap'>
                    <div className='flex items-center flex-col'>
                      <Typography variant='h5'>{item.projects}</Typography>
                      <Typography>Projects</Typography>
                    </div>
                    <div className='flex items-center flex-col'>
                      <Typography variant='h5'>{item.tasks}</Typography>
                      <Typography>Tasks</Typography>
                    </div>
                    <div className='flex items-center flex-col'>
                      <Typography variant='h5'>{item.connections}</Typography>
                      <Typography>Connections</Typography>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <Button
                      variant={item.isConnected ? 'contained' : 'tonal'}
                      startIcon={<i className={item.isConnected ? 'tabler-user-check' : 'tabler-user-plus'} />}
                    >
                      {item.isConnected ? 'Connected' : 'Connect'}
                    </Button>
                    <Button variant='tonal' color='secondary' className='bs-[38px] is-[38px] min-is-0 p-1.5'>
                      <i className='tabler-mail text-[22px]' />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
    </Grid>
  )
}

export default Connections
