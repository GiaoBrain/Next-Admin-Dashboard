// Type Imports
import type { ChildrenType } from '@core/types'

// Context Imports
import { VerticalNavProvider } from '@menu/contexts/verticalNavContext'
import { SettingsProvider } from '@core/contexts/settingsContext'

// Util Imports
import { getSettingsFromCookie } from '@core/utils/serverHelpers'

const Layout = ({ children }: ChildrenType) => {
  // Vars
  const settingsCookie = getSettingsFromCookie()

  return (
    <VerticalNavProvider>
      <SettingsProvider settingsCookie={settingsCookie}>{children}</SettingsProvider>
    </VerticalNavProvider>
  )
}

export default Layout
