'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import HorizontalNav, { Menu, MenuItem } from '@menu/horizontal-menu'

// Style Imports
import styles from '../../styles.module.css'

const OnClick = () => {
  return (
    <div className='flex flex-col is-full bs-full'>
      <div className={classnames('flex items-center plb-2.5 pli-6 is-full', styles.customStyles)}>
        <HorizontalNav>
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
        </HorizontalNav>
      </div>
      <main className='p-4 flex-grow'>
        <p>Click on Analytics and check console</p>
      </main>
    </div>
  )
}

export default OnClick
