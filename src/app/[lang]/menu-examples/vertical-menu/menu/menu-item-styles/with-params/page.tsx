'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem, MenuSection, SubMenu } from '@menu/vertical-menu'

const MenuItemStylesWithParams = () => {
  return (
    <VerticalNav customBreakpoint='200px'>
      <Menu
        menuItemStyles={{
          button: ({ disabled, open, isSubmenu, level }) => ({
            ...(level === 1 && { paddingInlineStart: '20px' }),
            paddingBlock: '12px',
            fontWeight: open ? 500 : 400,
            color: disabled ? '#a19e9e' : '#000000',
            backgroundColor: isSubmenu ? '#fef0ff' : '#ecfcff'
          })
        }}
      >
        <MenuSection label='Dashboards & Apps'>
          <SubMenu icon={<>🔥</>} label='Dashboards'>
            <MenuItem>Analytics</MenuItem>
            <MenuItem disabled>eCommerce</MenuItem>
          </SubMenu>
          <MenuItem icon={<>🔥</>}>Calendar</MenuItem>
        </MenuSection>
        <MenuSection label='Others'>
          <MenuItem icon={<>🔥</>}>FAQ</MenuItem>
          <SubMenu icon={<>🔥</>} label='Menu Level'>
            <MenuItem>Menu Level 2.1</MenuItem>
            <SubMenu label='Menu Level 2.2'>
              <MenuItem>Menu Level 3.1</MenuItem>
              <MenuItem>Menu Level 3.2</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem icon={<>🔥</>}>Documentation</MenuItem>
        </MenuSection>
      </Menu>
    </VerticalNav>
  )
}

export default MenuItemStylesWithParams
