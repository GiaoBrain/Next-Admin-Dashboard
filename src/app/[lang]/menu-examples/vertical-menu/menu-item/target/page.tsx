'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem } from '@menu/vertical-menu'

const Target = () => {
  return (
    <VerticalNav customBreakpoint='200px'>
      <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
        <MenuItem href='https://www.google.com' target='_blank' rel='noopener'>
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

export default Target
