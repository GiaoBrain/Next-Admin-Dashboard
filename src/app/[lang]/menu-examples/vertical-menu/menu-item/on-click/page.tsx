'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem } from '@menu/vertical-menu'

const OnClick = () => {
  return (
    <div className='flex'>
      <VerticalNav customBreakpoint='200px'>
        <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
          <MenuItem
            onClick={() => {
              console.log('Analytics Dashboard clicked')
            }}
          >
            Analytics Dashboard
          </MenuItem>
          <MenuItem>Calendar</MenuItem>
          <MenuItem>FAQ</MenuItem>
          <MenuItem>Form Layout</MenuItem>
          <MenuItem>Documentation</MenuItem>
        </Menu>
      </VerticalNav>
      <main className='p-4 flex-grow'>
        <p>Click on Analytics and check console</p>
      </main>
    </div>
  )
}

export default OnClick
