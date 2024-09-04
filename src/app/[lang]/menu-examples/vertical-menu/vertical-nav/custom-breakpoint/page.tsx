'use client'

// Component Imports
import NavToggle from '@components/layout/vertical/NavToggle'
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

const CustomBreakpoint = () => {
  return (
    <div className='flex'>
      <VerticalNav customBreakpoint='800px'>
        <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
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
      <main className='p-4 flex-grow'>
        <NavToggle />
      </main>
    </div>
  )
}

export default CustomBreakpoint
