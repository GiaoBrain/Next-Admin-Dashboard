'use client'

// MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { SystemMode } from '@core/types'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

// Styled Components
const MaskImg = styled('img')({
  blockSize: 'auto',
  maxBlockSize: 355,
  inlineSize: '100%',
  position: 'absolute',
  insetBlockEnd: 0,
  zIndex: -1
})

const ComingSoon = ({ mode }: { mode: SystemMode }) => {
  // Vars
  const darkImg = '/images/pages/misc-mask-dark.png'
  const lightImg = '/images/pages/misc-mask-light.png'

  // Hooks
  const theme = useTheme()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  const miscBackground = useImageVariant(mode, lightImg, darkImg)

  return (
    <div className='flex items-center justify-center min-bs-[100dvh] relative p-6 overflow-x-hidden'>
      <div className='flex items-center flex-col text-center'>
        <div className='is-[90vw] sm:is-[unset]'>
          <div className='flex flex-col gap-2 is-[90vw] sm:is-[unset] mbe-6'>
            <Typography variant='h4'>We are launching soon 🚀</Typography>
            <Typography>Our website is opening soon. Please register to get notified when it&#39;s ready!</Typography>
          </div>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            <div className='flex justify-center gap-4'>
              <CustomTextField autoFocus type='email' placeholder='Enter your email or username' className='is-[70%]' />
              <Button type='submit' variant='contained'>
                Notify
              </Button>
            </div>
          </form>
        </div>
        <img
          alt='coming-soon-illustration'
          src='/images/illustrations/characters/2.png'
          className='object-cover bs-[400px] md:bs-[450px] lg:bs-[500px] mbs-10 md:mbs-14 lg:mbs-20'
        />
      </div>
      {!hidden && (
        <MaskImg
          alt='mask'
          src={miscBackground}
          className={classnames({ 'scale-x-[-1]': theme.direction === 'rtl' })}
        />
      )}
    </div>
  )
}

export default ComingSoon
