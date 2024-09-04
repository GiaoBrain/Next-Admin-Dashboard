'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from '@components/layout/horizontal/NavToggle'
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'
import VerticalNavContent from '../../VerticalNavContent'

// Style Imports
import styles from '../../styles.module.css'

const HideMenu = () => {
  return (
    <div className='flex flex-col is-full'>
      <div className={classnames('flex items-center plb-2.5 pli-6 is-full', styles.customStyles)}>
        <NavToggle />
        <HorizontalNav hideMenu breakpoint='md'>
          <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Contact Us</MenuItem>
          </Menu>
        </HorizontalNav>
      </div>
      <HorizontalNav
        breakpoint='md'
        verticalNavContent={VerticalNavContent}
        switchToVertical
        customStyles={{ padding: '10px 24px', borderBottom: '1px solid #efefef' }}
        verticalNavProps={{ customStyles: { '& .ts-menu-button': { paddingBlock: '12px' } } }}
      >
        <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
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
  )
}

export default HideMenu
