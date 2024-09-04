'use client'

// React import
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// Type imports
import type { MenuProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import VerticalNav, { Menu, MenuItem, MenuSection, SubMenu } from '@menu/vertical-menu'

const SubMenuOpenBehavior = () => {
  // States
  const [openBehavior, setOpenBehavior] = useState<MenuProps['subMenuOpenBehavior']>('accordion')

  const handleTriggerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOpenBehavior(event.target.value as MenuProps['subMenuOpenBehavior'])
  }

  return (
    <div className='flex'>
      <VerticalNav customBreakpoint='200px'>
        <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }} subMenuOpenBehavior={openBehavior}>
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
      <main className='p-4 flex-grow'>
        <RadioGroup row value={openBehavior} onChange={handleTriggerChange}>
          <FormControlLabel value='accordion' control={<Radio />} label='Accordion' />
          <FormControlLabel value='collapse' control={<Radio />} label='Collapse' />
        </RadioGroup>
      </main>
    </div>
  )
}

export default SubMenuOpenBehavior
