'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'

// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import DirectionalIcon from '@components/DirectionalIcon'
import Logo from '@components/layout/shared/Logo'
import CustomTextField from '@core/components/mui/TextField'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Styled Component Imports
import AuthIllustrationWrapper from './AuthIllustrationWrapper'

const ResetPasswordV1 = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false)

  // Hooks
  const { lang: locale } = useParams()

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleClickShowConfirmPassword = () => setIsConfirmPasswordShown(show => !show)

  return (
    <AuthIllustrationWrapper>
      <Card className='flex flex-col sm:is-[450px]'>
        <CardContent className='sm:!p-12'>
          <div className='flex justify-center mbe-6'>
            <Logo />
          </div>
          <div className='flex flex-col gap-1 mbe-6'>
            <Typography variant='h4'>Reset Password 🔒</Typography>
            <Typography>Your new password must be different from previously used passwords</Typography>
          </div>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()} className='flex flex-col gap-6'>
            <CustomTextField
              autoFocus
              fullWidth
              label='New Password'
              placeholder='············'
              type={isPasswordShown ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
                      <i className={isPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <CustomTextField
              fullWidth
              label='Confirm Password'
              placeholder='············'
              type={isConfirmPasswordShown ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={e => e.preventDefault()}
                    >
                      <i className={isConfirmPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button fullWidth variant='contained' type='submit'>
              Set New Password
            </Button>
            <Typography className='flex justify-center items-center' color='primary'>
              <Link
                href={getLocalizedUrl('pages/auth/login-v1', locale as Locale)}
                className='flex items-center gap-1.5'
              >
                <DirectionalIcon
                  ltrIconClass='tabler-chevron-left'
                  rtlIconClass='tabler-chevron-right'
                  className='text-xl'
                />
                <span>Back to login</span>
              </Link>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </AuthIllustrationWrapper>
  )
}

export default ResetPasswordV1
