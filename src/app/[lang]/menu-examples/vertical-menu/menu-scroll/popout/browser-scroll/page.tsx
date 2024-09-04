'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

const PopoutBrowserScroll = () => {
  return (
    <VerticalNav customBreakpoint='200px' defaultCollapsed>
      <Menu
        menuItemStyles={{ button: { paddingBlock: '12px' } }}
        triggerPopout='hover'
        popoutWhenCollapsed
        browserScroll
      >
        <SubMenu label='Dashboards'>
          <MenuItem>Analytics</MenuItem>
          <MenuItem>eCommerce</MenuItem>
        </SubMenu>
        <SubMenu label='Apps'>
          <MenuItem>Email</MenuItem>
          <MenuItem>Chats</MenuItem>
          <MenuItem>Calendar</MenuItem>
          <MenuItem>Invoice</MenuItem>
          <MenuItem>List</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Teams</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Account</MenuItem>
          <MenuItem>Security</MenuItem>
          <MenuItem>Billings & Plans</MenuItem>
          <MenuItem>Notifications</MenuItem>
          <MenuItem>Connection</MenuItem>
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

export default PopoutBrowserScroll
