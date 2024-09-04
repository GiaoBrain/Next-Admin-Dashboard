'use client'

// React Imports
import { useEffect } from 'react'

// MUI Imports
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme
} from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import type {} from '@mui/material/themeCssVarsAugmentation' //! Do not remove this import otherwise you will get type errors while making a production build
import type {} from '@mui/lab/themeAugmentation' //! Do not remove this import otherwise you will get type errors while making a production build

// Third-party Imports
import stylisRTLPlugin from 'stylis-plugin-rtl'

// Type Imports
import type { ChildrenType, Direction } from '@core/types'
import type { Settings } from '@core/contexts/settingsContext'

// Core Theme Imports
import defaultCoreTheme from '@core/theme'

type Props = ChildrenType & {
  direction: Direction
}

const ThemeProvider = (props: Props) => {
  // Props
  const { children, direction } = props

  const settings = {
    skin: 'default'
  } as Settings

  const theme = extendTheme(defaultCoreTheme(settings, 'light', direction))

  useEffect(() => {
    document.body.setAttribute('data-mui-color-scheme', 'light')
  }, [])

  return (
    <AppRouterCacheProvider
      options={{
        prepend: true,
        ...(direction === 'rtl' && {
          key: 'rtl',
          stylisPlugins: [stylisRTLPlugin]
        })
      }}
    >
      <CssVarsProvider theme={theme} defaultMode='light'>
        <>
          <CssBaseline />
          {children}
        </>
      </CssVarsProvider>
    </AppRouterCacheProvider>
  )
}

export default ThemeProvider
