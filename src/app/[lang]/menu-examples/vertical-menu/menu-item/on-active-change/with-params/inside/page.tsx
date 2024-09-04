'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem } from '@menu/vertical-menu'

const OnActiveChangeWithParams = () => {
  return (
    <div className='flex'>
      <VerticalNav customBreakpoint='200px'>
        <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
          <MenuItem href='/en/menu-examples/vertical-menu/menu-item/on-active-change/with-params'>
            Analytics Dashboard
          </MenuItem>
          <MenuItem
            href='/en/menu-examples/vertical-menu/menu-item/on-active-change/with-params/inside'
            onActiveChange={active => {
              active && console.log('onActiveChange when active')
            }}
          >
            Calendar
          </MenuItem>
          <MenuItem>FAQ</MenuItem>
          <MenuItem>Form Layout</MenuItem>
          <MenuItem>Documentation</MenuItem>
        </Menu>
      </VerticalNav>
      <main className='p-4 flex-grow'>
        <p>Toggle between first two items to see the console logs</p>
      </main>
    </div>
  )
}

export default OnActiveChangeWithParams
