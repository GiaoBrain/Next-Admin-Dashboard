'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

const PopoutWhenCollapsed = () => {
  return (
    <VerticalNav customBreakpoint='200px' defaultCollapsed>
      <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }} popoutWhenCollapsed>
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
    </VerticalNav>
  )
}

export default PopoutWhenCollapsed
