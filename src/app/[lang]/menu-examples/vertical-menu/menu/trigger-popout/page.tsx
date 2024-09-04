'use client'

// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormGroup from '@mui/material/FormGroup'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'

// Type Imports
import type { MenuProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import VerticalNav, { Menu, MenuItem, MenuSection, SubMenu } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

const TriggerPopout = () => {
  const { isCollapsed, isPopoutWhenCollapsed, updateVerticalNavState } = useVerticalNav()

  // States
  const [trigger, setTrigger] = useState<MenuProps['triggerPopout']>('hover')

  const handleTriggerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTrigger(event.target.value as MenuProps['triggerPopout'])
  }

  return (
    <div className='flex'>
      <VerticalNav customBreakpoint='200px'>
        <Menu
          menuItemStyles={{ button: { paddingBlock: '12px' } }}
          triggerPopout={trigger}
          popoutWhenCollapsed={isPopoutWhenCollapsed}
        >
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
        <FormControl>
          <FormGroup>
            <FormControlLabel
              label='Collapse'
              control={<Checkbox onChange={() => updateVerticalNavState({ isCollapsed: !isCollapsed })} />}
            />
            <FormControlLabel
              label='Popout When Collapsed'
              control={
                <Checkbox onChange={() => updateVerticalNavState({ isPopoutWhenCollapsed: !isPopoutWhenCollapsed })} />
              }
            />
          </FormGroup>
          <RadioGroup row value={trigger} onChange={handleTriggerChange}>
            <FormControlLabel value='hover' control={<Radio />} label='Hover' />
            <FormControlLabel value='click' control={<Radio />} label='Click' />
          </RadioGroup>
        </FormControl>
      </main>
    </div>
  )
}

export default TriggerPopout
