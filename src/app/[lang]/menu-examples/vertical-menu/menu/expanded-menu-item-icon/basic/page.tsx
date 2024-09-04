'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem, MenuSection, SubMenu } from '@menu/vertical-menu'

const ExpandMenuItemIcon = () => {
  return (
    <VerticalNav customBreakpoint='200px'>
      <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }} renderExpandedMenuItemIcon={{ icon: <>🔥</> }}>
        <MenuSection label='Dashboards & Apps'>
          <SubMenu label='Dashboards'>
            <MenuItem>Analytics</MenuItem>
            <MenuItem disabled>eCommerce</MenuItem>
          </SubMenu>
          <MenuItem>Calendar</MenuItem>
        </MenuSection>
        <MenuSection label='Others'>
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
        </MenuSection>
      </Menu>
    </VerticalNav>
  )
}

export default ExpandMenuItemIcon
