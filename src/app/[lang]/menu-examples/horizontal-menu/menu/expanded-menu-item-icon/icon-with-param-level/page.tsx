'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'

// Style Imports
import styles from '../../../styles.module.css'

const ExpandMenuItemIcon = () => {
  return (
    <div className={classnames('flex items-center plb-2.5 pli-6 is-full', styles.customStyles)}>
      <HorizontalNav>
        <Menu
          menuItemStyles={{ button: { paddingBlock: '12px' } }}
          renderExpandedMenuItemIcon={{
            icon: ({ disabled, level }) => (disabled ? null : level === 1 ? <>#</> : <>*</>),
            level: 2
          }}
        >
          <SubMenu label='Dashboards'>
            <MenuItem>Analytics</MenuItem>
            <MenuItem disabled>eCommerce</MenuItem>
          </SubMenu>
          <MenuItem>Calendar</MenuItem>
          <MenuItem>FAQ</MenuItem>
          <SubMenu label='Menu Level'>
            <MenuItem>Menu Level 2.1</MenuItem>
            <SubMenu label='Menu Level 2.2'>
              <MenuItem>Menu Level 3.1</MenuItem>
              <SubMenu label='Menu Level 3.2'>
                <MenuItem>Menu Level 4.1</MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
          <MenuItem>Documentation</MenuItem>
        </Menu>
      </HorizontalNav>
    </div>
  )
}

export default ExpandMenuItemIcon
