'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem } from '@menu/vertical-menu'

const Icon = () => {
  return (
    <VerticalNav customBreakpoint='200px'>
      <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
        <MenuItem icon={<>🔥</>}>Analytics Dashboard</MenuItem>
        <MenuItem icon={<>🔥</>}>Calendar</MenuItem>
        <MenuItem icon={<>🔥</>}>FAQ</MenuItem>
        <MenuItem icon={<>🔥</>}>Form Layout</MenuItem>
        <MenuItem icon={<>🔥</>}>Documentation</MenuItem>
      </Menu>
    </VerticalNav>
  )
}

export default Icon
