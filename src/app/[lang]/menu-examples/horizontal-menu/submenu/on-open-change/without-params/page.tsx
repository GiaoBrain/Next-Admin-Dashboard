'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'

// Style Imports
import styles from '../../../styles.module.css'

const OpenChangeWithOutParams = () => {
  return (
    <div className='flex flex-col bs-full is-full'>
      <div className={classnames('flex items-center plb-2.5 pli-6 is-full', styles.customStyles)}>
        <HorizontalNav>
          <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
            <SubMenu label='Dashboards' onOpenChange={() => console.log('onOpenChange called')}>
              <MenuItem>Analytics</MenuItem>
              <MenuItem>eCommerce</MenuItem>
            </SubMenu>
            <SubMenu label='User'>
              <MenuItem>List</MenuItem>
              <SubMenu label='View'>
                <MenuItem>Overview</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Notifications</MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu label='Menu Level'>
              <MenuItem>Menu Level 2.1</MenuItem>
              <SubMenu label='Menu Level 2.2'>
                <MenuItem>Menu Level 3.1</MenuItem>
                <MenuItem>Menu Level 3.2</MenuItem>
              </SubMenu>
            </SubMenu>
          </Menu>
        </HorizontalNav>
      </div>
      <main className='p-4 flex-grow'>
        <p>Toggle Dashbord Submenu and Check your console</p>
      </main>
    </div>
  )
}

export default OpenChangeWithOutParams
