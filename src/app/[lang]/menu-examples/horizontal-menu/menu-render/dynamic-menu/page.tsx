'use client'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { HorizontalMenuDataType } from '@/types/menuTypes'

// Component Imports
import HorizontalNav, { Menu } from '@menu/horizontal-menu'
import { GenerateHorizontalMenu } from '@components/GenerateMenu'

// Style Imports
import styles from '../../styles.module.css'

const menuData: HorizontalMenuDataType[] = [
  {
    label: 'Dashboards',
    children: [
      {
        label: 'Analytics'
      },
      {
        label: 'eCommerce'
      }
    ]
  },
  {
    label: 'Calendar'
  },
  {
    label: 'FAQ'
  },
  {
    label: 'Menu Level',
    children: [
      {
        label: 'Menu Level 2.1'
      },
      {
        label: 'Menu Level 2.2',
        children: [
          {
            label: 'Menu Level 3.1'
          },
          {
            label: 'Menu Level 3.2'
          }
        ]
      }
    ]
  },
  {
    label: 'Documentation'
  }
]

const DynamicMenu = () => {
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
          <GenerateHorizontalMenu menuData={menuData} />
        </Menu>
      </HorizontalNav>
    </div>
  )
}

export default DynamicMenu
