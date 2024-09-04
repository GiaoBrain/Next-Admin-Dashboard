'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from '@components/layout/horizontal/NavToggle'
import VerticalNav, {
  Menu as VerticalMenu,
  MenuItem as VerticalMenuItem,
  SubMenu as VerticalSubMenu
} from '@menu/vertical-menu'
import HorizontalNav, {
  Menu as HorizontalMenu,
  MenuItem as HorizontalMenuItem,
  SubMenu as HorizontalSubMenu
} from '@menu/horizontal-menu'

// Style Imports
import styles from '../../styles.module.css'

const VerticalNavbar = () => {
  return (
    <div className='flex is-full'>
      <VerticalNav breakpoint='md'>
        <VerticalMenu>
          <VerticalMenuItem>Email</VerticalMenuItem>
          <VerticalMenuItem>Chat</VerticalMenuItem>
          <VerticalSubMenu label='User'>
            <VerticalMenuItem>List</VerticalMenuItem>
            <VerticalSubMenu label='View'>
              <VerticalMenuItem>Account</VerticalMenuItem>
              <VerticalMenuItem>Security</VerticalMenuItem>
              <VerticalMenuItem>Billings & Plans</VerticalMenuItem>
              <VerticalMenuItem>Notifications</VerticalMenuItem>
              <VerticalMenuItem>Connections</VerticalMenuItem>
            </VerticalSubMenu>
          </VerticalSubMenu>
          <VerticalSubMenu label='Auth Pages'>
            <VerticalMenuItem>Login</VerticalMenuItem>
            <VerticalMenuItem>Register</VerticalMenuItem>
            <VerticalMenuItem>Forgot Password</VerticalMenuItem>
          </VerticalSubMenu>
          <VerticalMenuItem>Access Control</VerticalMenuItem>
        </VerticalMenu>
      </VerticalNav>
      <div className='flex-grow'>
        <div className={classnames('flex items-center plb-2.5 pli-6 is-full', styles.customStyles)}>
          <NavToggle />
          <HorizontalNav hideMenu breakpoint='md'>
            <HorizontalMenu>
              <HorizontalSubMenu label='Dashboards'>
                <HorizontalMenuItem>Analytics</HorizontalMenuItem>
                <HorizontalMenuItem>eCommerce</HorizontalMenuItem>
              </HorizontalSubMenu>
              <HorizontalMenuItem>Calendar</HorizontalMenuItem>
              <HorizontalMenuItem>FAQ</HorizontalMenuItem>
              <HorizontalSubMenu label='Menu Level'>
                <HorizontalMenuItem>Menu Level 2.1</HorizontalMenuItem>
                <HorizontalSubMenu label='Menu Level 2.2'>
                  <HorizontalMenuItem>Menu Level 3.1</HorizontalMenuItem>
                  <HorizontalMenuItem>Menu Level 3.2</HorizontalMenuItem>
                </HorizontalSubMenu>
              </HorizontalSubMenu>
              <HorizontalMenuItem>Documentation</HorizontalMenuItem>
            </HorizontalMenu>
          </HorizontalNav>
        </div>
      </div>
    </div>
  )
}

export default VerticalNavbar
