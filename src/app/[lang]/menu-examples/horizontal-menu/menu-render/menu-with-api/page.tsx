'use client'

// React imports
import { useEffect, useState } from 'react'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import HorizontalNav, { Menu } from '@menu/horizontal-menu'
import { GenerateHorizontalMenu } from '@components/GenerateMenu'

// Style Imports
import styles from '../../styles.module.css'

const MenuWithAPI = () => {
  // States
  const [sidebarMenuData, setSidebarMenuData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMenuData = async () => {
      const res = await fetch('https://mocki.io/v1/ea08dba9-a940-4388-9789-2d0b8fa9a475')
      const data = await res.json()

      setSidebarMenuData(data)
      setIsLoading(false)
    }

    fetchMenuData()
  }, [])

  return (
    <div className={classnames('flex items-center plb-2.5 pli-6 is-full', styles.customStyles)}>
      <HorizontalNav>
        <Menu
          menuItemStyles={{
            button: { paddingBlock: '12px' },
            subMenuStyles: { zIndex: 'calc(var(--header-z-index) + 1)' }
          }}
          popoutMenuOffset={{
            mainAxis: ({ level }) => (level && level > 0 ? 10 : 8),
            alignmentAxis: ({ level }) => (level && level > 0 ? -5 : 0)
          }}
          verticalMenuProps={{
            menuItemStyles: {
              button: { paddingBlock: '12px' },
              subMenuContent: { zIndex: 'calc(var(--drawer-z-index) + 1)' }
            }
          }}
        >
          {isLoading ? <div className='p-4'>Loading...</div> : <GenerateHorizontalMenu menuData={sidebarMenuData} />}
        </Menu>
      </HorizontalNav>
    </div>
  )
}

export default MenuWithAPI
