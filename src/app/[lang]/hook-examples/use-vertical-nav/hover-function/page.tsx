'use client'

// MUI Imports
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'

// Component Imports
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

const HoveredFunction = () => {
  // Hooks
  const { hoverVerticalNav, collapseVerticalNav, isHovered, isCollapsed } = useVerticalNav()

  return (
    <div className='flex'>
      <VerticalNav customBreakpoint='200px'>
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
        <div className='flex justify-between'>
          <FormControlLabel
            label='Menu Toggle'
            control={<Checkbox onChange={() => collapseVerticalNav(!isCollapsed)} />}
          />
          <Button onClick={() => hoverVerticalNav(!isHovered)}>Click here to toggle Hover</Button>
        </div>
      </main>
    </div>
  )
}

export default HoveredFunction
