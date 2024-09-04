'use client'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'
import useHorizontalNav from '@menu/hooks/useHorizontalNav'

const NavToggle = () => {
  // Hooks
  const { toggleVerticalNav } = useVerticalNav()
  const { isBreakpointReached } = useHorizontalNav()

  // Toggle Vertical Nav
  const handleClick = () => {
    toggleVerticalNav()
  }

  return (
    <>
      {/* <i className='tabler-menu-2 cursor-pointer' onClick={handleClick} /> */}
      {/* Comment following code and uncomment this code in order to toggle menu on desktop screens as well */}
      {isBreakpointReached && <i className='tabler-menu-2 cursor-pointer' onClick={handleClick} />}
    </>
  )
}

export default NavToggle
