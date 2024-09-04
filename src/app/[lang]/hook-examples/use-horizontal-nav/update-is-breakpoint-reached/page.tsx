'use client'

// React Imports
import { useEffect } from 'react'

// Hook Imports
import useHorizontalNav from '@menu/hooks/useHorizontalNav'
import useMediaQuery from '@menu/hooks/useMediaQuery'

const UpdateIsBreakpointReached = () => {
  // Hooks
  const { isBreakpointReached, updateIsBreakpointReached } = useHorizontalNav()

  const isSmallerThan800 = useMediaQuery('800px')

  // Set the breakpointReached value in the state
  useEffect(() => {
    updateIsBreakpointReached(isSmallerThan800)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSmallerThan800])

  return (
    <main className='p-4 flex-grow'>
      <p>
        {isBreakpointReached ? 'Example screen size is smaller than 800px' : 'Example screen size is larger than 800px'}
      </p>
    </main>
  )
}

export default UpdateIsBreakpointReached
