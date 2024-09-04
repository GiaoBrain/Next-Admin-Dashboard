// Type Imports
import type { ChildrenType } from '@menu/types'

// Component Imports
import Providers from '@components/Providers'
import { HorizontalNavProvider } from '@menu/contexts/horizontalNavContext'

const Layout = ({ children }: ChildrenType) => {
  return (
    <Providers direction='ltr'>
      <HorizontalNavProvider>{children}</HorizontalNavProvider>
    </Providers>
  )
}

export default Layout
