'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import HorizontalNav, { Menu, MenuItem } from '@menu/horizontal-menu'

// Style Imports
import styles from '../../../styles.module.css'

const OnActiveChangeWithOutParams = () => {
  return (
    <div className='flex flex-col is-full bs-full'>
      <div className={classnames('flex items-center plb-2.5 pli-6 is-full', styles.customStyles)}>
        <HorizontalNav>
          <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
            <MenuItem
              href='/en/menu-examples/horizontal-menu/menu-item/on-active-change/without-params'
              onActiveChange={() => {
                console.log('onActiveChange called')
              }}
            >
              Analytics Dashboard
            </MenuItem>
            <MenuItem href='/en/menu-examples/horizontal-menu/menu-item/on-active-change/without-params/inside'>
              Calendar
            </MenuItem>
            <MenuItem>FAQ</MenuItem>
            <MenuItem>Form Layout</MenuItem>
            <MenuItem>Documentation</MenuItem>
          </Menu>
        </HorizontalNav>
      </div>
      <main className='p-4 flex-grow'>
        <p>Toggle between first two items to see the console logs</p>
      </main>
    </div>
  )
}

export default OnActiveChangeWithOutParams
