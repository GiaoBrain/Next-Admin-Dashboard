'use client'

// Type Imports
import type { getDictionary } from '@/utils/getDictionary'

// Component Imports
import Navigation from './Navigation'
import NavbarContent from './NavbarContent'
import Navbar from '@layouts/components/horizontal/Navbar'
import LayoutHeader from '@layouts/components/horizontal/Header'

// Hook Imports
import useHorizontalNav from '@menu/hooks/useHorizontalNav'

const Header = ({ dictionary }: { dictionary: Awaited<ReturnType<typeof getDictionary>> }) => {
  // Hooks
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <>
      <LayoutHeader>
        <Navbar>
          <NavbarContent />
        </Navbar>
        {!isBreakpointReached && <Navigation dictionary={dictionary} />}
      </LayoutHeader>
      {isBreakpointReached && <Navigation dictionary={dictionary} />}
    </>
  )
}

export default Header
