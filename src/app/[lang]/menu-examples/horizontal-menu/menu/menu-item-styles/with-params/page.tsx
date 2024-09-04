'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'

// Style Imports
import styles from '../../../styles.module.css'

const MenuItemStylesWithParams = () => {
  return (
    <div className={classnames('flex items-center plb-2.5 pli-6 is-full', styles.customStyles)}>
      <HorizontalNav>
        <Menu
          menuItemStyles={{
            button: ({ disabled, open, isSubmenu, level }) => ({
              ...(level === 0 && { fontSize: '1.075rem' }),
              fontWeight: open ? 500 : 400,
              paddingBlock: '12px',
              color: disabled ? '#a19e9e' : '#000000',
              backgroundColor: isSubmenu ? '#fef0ff' : '#ecfcff'
            })
          }}
        >
          <SubMenu label='Dashboards'>
            <MenuItem>Analytics</MenuItem>
            <MenuItem>eCommerce</MenuItem>
          </SubMenu>
          <MenuItem disabled>Calendar</MenuItem>
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

export default MenuItemStylesWithParams
