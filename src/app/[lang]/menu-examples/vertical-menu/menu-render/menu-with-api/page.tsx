'use client'

// React imports
import { useEffect, useState } from 'react'

// Component imports
import VerticalNav, { Menu } from '@menu/vertical-menu'
import { GenerateVerticalMenu } from '@components/GenerateMenu'

const MenuWithAPI = () => {
  // States
  const [sidebarMenuData, setSidebarMenuData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMenuData = async () => {
      const res = await fetch('https://mocki.io/v1/967378e8-b6cc-4c2b-97a9-7265eb8413ed')
      const data = await res.json()

      setSidebarMenuData(data)
      setIsLoading(false)
    }

    fetchMenuData()
  }, [])

  return (
    <VerticalNav customBreakpoint='200px'>
      <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
        {isLoading ? (
          <div className='p-4'>Loading...</div>
        ) : (
          <Menu
            popoutMenuOffset={{ mainAxis: 10 }}
            menuItemStyles={{
              button: { paddingBlock: '12px' },
              subMenuContent: { zIndex: 'calc(var(--drawer-z-index) + 1)' }
            }}
          >
            <GenerateVerticalMenu menuData={sidebarMenuData} />
          </Menu>
        )}
      </Menu>
    </VerticalNav>
  )
}

export default MenuWithAPI
