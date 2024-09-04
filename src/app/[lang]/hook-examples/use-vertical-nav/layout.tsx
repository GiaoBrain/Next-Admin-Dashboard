// Type Imports
import type { ChildrenType } from '@menu/types'

// Context Imports
import { VerticalNavProvider } from '@menu/contexts/verticalNavContext'

const Layout = ({ children }: ChildrenType) => {
  return <VerticalNavProvider>{children}</VerticalNavProvider>
}

export default Layout
