'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem } from '@menu/vertical-menu'

const Prefix = () => {
  return (
    <VerticalNav customBreakpoint='200px'>
      <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
        <MenuItem prefix='🔥'>Analytics Dashboard</MenuItem>
        <MenuItem>Calendar</MenuItem>
        <MenuItem>FAQ</MenuItem>
        <MenuItem>Form Layout</MenuItem>
        <MenuItem>Documentation</MenuItem>
      </Menu>
    </VerticalNav>
  )
}

export default Prefix
