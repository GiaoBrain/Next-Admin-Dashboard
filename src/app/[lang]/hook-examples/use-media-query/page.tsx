'use client'

// Hook Imports
import useMediaQuery from '@menu/hooks/useMediaQuery'

const MediaQuery = () => {
  // Hooks
  const isSmallerThan800 = useMediaQuery('800px')

  return (
    <main className='p-4 flex-grow'>
      <p>
        {isSmallerThan800 ? 'Example screen size is smaller than 800px' : 'Example screen size is larger than 800px'}
      </p>
    </main>
  )
}

export default MediaQuery
