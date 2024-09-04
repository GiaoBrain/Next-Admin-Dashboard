// Type Imports
import type { ChildrenType } from '@menu/types'

// Component Imports
import Providers from '@/examples/menu/Providers'
import { HorizontalNavProvider } from '@menu/contexts/horizontalNavContext'

const Layout = ({ children }: ChildrenType) => {
  return (
    <Providers>
      <HorizontalNavProvider>{children}</HorizontalNavProvider>
    </Providers>
  )
}

export default Layout
