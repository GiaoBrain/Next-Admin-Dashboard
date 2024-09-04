'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

const Icon = () => {
  return (
    <VerticalNav customBreakpoint='200px'>
      <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
        <SubMenu label='Dashboards' icon={<>🔥</>}>
          <MenuItem>Analytics</MenuItem>
          <MenuItem>eCommerce</MenuItem>
        </SubMenu>
        <SubMenu label='User' icon={<>🔥</>}>
          <MenuItem>List</MenuItem>
          <SubMenu label='View'>
            <MenuItem>Overview</MenuItem>
            <MenuItem>Security</MenuItem>
            <MenuItem>Notifications</MenuItem>
          </SubMenu>
        </SubMenu>
        <SubMenu label='Menu Level' icon={<>🔥</>}>
          <MenuItem>Menu Level 2.1</MenuItem>
          <SubMenu label='Menu Level 2.2'>
            <MenuItem>Menu Level 3.1</MenuItem>
            <MenuItem>Menu Level 3.2</MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>
    </VerticalNav>
  )
}

export default Icon
