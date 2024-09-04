'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem, MenuSection, SubMenu } from '@menu/vertical-menu'

const PopoutMenuOffset = () => {
  return (
    <VerticalNav customBreakpoint='200px' defaultCollapsed>
      <Menu
        menuItemStyles={{ button: { paddingBlock: '12px' } }}
        popoutMenuOffset={{ mainAxis: 20, alignmentAxis: -5 }}
        popoutWhenCollapsed
      >
        <MenuSection label='Dashboards & Apps'>
          <SubMenu label='Dashboards'>
            <MenuItem>Analytics</MenuItem>
            <MenuItem>eCommerce</MenuItem>
          </SubMenu>
          <MenuItem>Calendar</MenuItem>
        </MenuSection>
        <MenuSection label='Others'>
          <MenuItem>FAQ</MenuItem>
          <SubMenu label='Menu Level'>
            <MenuItem>Menu Level 2.1</MenuItem>
            <SubMenu label='Menu Level 2.2'>
              <MenuItem>Menu Level 3.1</MenuItem>
              <MenuItem>Menu Level 3.2</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem>Documentation</MenuItem>
        </MenuSection>
      </Menu>
    </VerticalNav>
  )
}

export default PopoutMenuOffset
