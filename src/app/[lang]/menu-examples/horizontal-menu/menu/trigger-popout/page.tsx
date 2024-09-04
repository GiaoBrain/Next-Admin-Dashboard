'use client'

// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { MenuProps } from '@menu/components/horizontal-menu/Menu'

// Component Imports
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'

// Style Imports
import styles from '../../styles.module.css'

const TriggerPopout = () => {
  // States
  const [trigger, setTrigger] = useState<MenuProps['triggerPopout']>('hover')

  const handleTriggerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTrigger(event.target.value as MenuProps['triggerPopout'])
  }

  return (
    <div className='flex flex-col is-full bs-full'>
      <div className={classnames('flex items-center plb-2.5 pli-6 is-full', styles.customStyles)}>
        <HorizontalNav>
          <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }} triggerPopout={trigger}>
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
        </HorizontalNav>
      </div>
      <main className='p-4 flex-grow'>
        <RadioGroup row value={trigger} onChange={handleTriggerChange}>
          <FormControlLabel value='hover' control={<Radio />} label='Hover' />
          <FormControlLabel value='click' control={<Radio />} label='Click' />
        </RadioGroup>
      </main>
    </div>
  )
}

export default TriggerPopout
