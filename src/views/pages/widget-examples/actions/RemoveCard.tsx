'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Fade from '@mui/material/Fade'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const CardActionRemoveCard = () => {
  // States
  const [visibility, setVisibility] = useState(false)

  return (
    <Fade in={!visibility} timeout={300}>
      <Card>
        <CardHeader
          title='Remove Card'
          action={
            <IconButton size='small' aria-label='remove-card' onClick={() => setVisibility(!visibility)}>
              <i className='tabler-x text-xl' />
            </IconButton>
          }
        />
        <CardContent>
          <Typography>
            Click on <i className='tabler-x text-xl align-sub' /> icon to see it in action
          </Typography>
        </CardContent>
      </Card>
    </Fade>
  )
}

export default CardActionRemoveCard
