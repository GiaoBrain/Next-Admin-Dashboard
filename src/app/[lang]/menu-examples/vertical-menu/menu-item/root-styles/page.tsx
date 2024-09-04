'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem } from '@menu/vertical-menu'

// Util imports
import { menuClasses } from '@menu/utils/menuClasses'

const RootStyles = () => {
  return (
    <VerticalNav customBreakpoint='200px'>
      <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
        <MenuItem
          rootStyles={{
            ['.' + menuClasses.button]: {
              backgroundColor: '#e4e2ff',
              color: '#7367F0 !important'
            }
          }}
        >
          Analytics Dashboard
        </MenuItem>
        <MenuItem>Calendar</MenuItem>
        <MenuItem>FAQ</MenuItem>
        <MenuItem>Form Layout</MenuItem>
        <MenuItem>Documentation</MenuItem>
      </Menu>
    </VerticalNav>
  )
}

export default RootStyles
