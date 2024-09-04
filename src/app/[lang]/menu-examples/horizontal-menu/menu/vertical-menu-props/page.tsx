'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from '@components/layout/horizontal/NavToggle'
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'
import VerticalNavContent from '../../VerticalNavContent'

// Style Imports
import styles from '../../styles.module.css'

const VerticalMenuProps = () => {
  return (
    <div className={classnames('flex items-center plb-2.5 pli-6 is-full', styles.customStyles)}>
      <NavToggle />
      <HorizontalNav switchToVertical breakpoint='md' verticalNavContent={VerticalNavContent}>
        <Menu
          menuItemStyles={{ button: { paddingBlock: '12px' } }}
          verticalMenuProps={{
            menuItemStyles: { label: { color: '#1058e9' } },
            menuSectionStyles: { label: { color: '#ec0e0e' } },
            renderExpandedMenuItemIcon: { icon: <>🥶</> },
            renderExpandIcon: ({ open }) => <>{open ? '🔥' : '💧'}</>,
            rootStyles: { paddingBlock: '12px' },
            subMenuOpenBehavior: 'accordion',
            textTruncate: true,
            transitionDuration: 500
          }}
        >
          <SubMenu label='Dashboards'>
            <MenuItem>Analytics</MenuItem>
            <MenuItem>eCommerce</MenuItem>
          </SubMenu>
          <MenuItem>Calendar</MenuItem>
          <MenuItem>FAQ</MenuItem>
          <SubMenu label='Menu Level'>
            <MenuItem>Menu Level 2.1</MenuItem>
            <SubMenu label='Menu Level 2.2'>
              <MenuItem>Menu Level 3.1</MenuItem>
              <MenuItem>Menu Level 3.2</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem>Documentation</MenuItem>
        </Menu>
      </HorizontalNav>
    </div>
  )
}

export default VerticalMenuProps
