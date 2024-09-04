'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

const CardActionRefreshContent = () => {
  // States
  const [reload, setReload] = useState(false)

  const handleBackDrop = () => {
    setReload(true)

    setTimeout(() => {
      setReload(false)
    }, 2000)
  }

  return (
    <Card className='relative'>
      <CardHeader
        title='Refresh Content'
        action={
          <IconButton size='small' aria-label='refresh-content' onClick={handleBackDrop}>
            <i className='tabler-refresh text-xl' />
          </IconButton>
        }
      />
      <CardContent>
        <Typography>
          Click on <i className='tabler-refresh text-xl align-sub' /> icon to see it in action
        </Typography>
      </CardContent>

      <Backdrop open={reload} className='absolute text-white z-[cal(var(--mui-zIndex-mobileStepper)-1)]'>
        <CircularProgress color='inherit' />
      </Backdrop>
    </Card>
  )
}

export default CardActionRefreshContent
