'use client'

// MUI Imports
import Button from '@mui/material/Button'

// Component Imports
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

const BreakPoint = () => {
  // Hooks
  const { isBreakpointReached, isToggled, toggleVerticalNav } = useVerticalNav()

  return (
    <div className='flex'>
      <VerticalNav breakpoint='md'>
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
        {isBreakpointReached && (
          <Button onClick={() => toggleVerticalNav(isBreakpointReached ? !isToggled : true)}>Menu Toggle</Button>
        )}
      </main>
    </div>
  )
}

export default BreakPoint
