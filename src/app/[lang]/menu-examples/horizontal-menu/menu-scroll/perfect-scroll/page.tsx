'use client'

// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'
import classnames from 'classnames'

// Component Imports
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'

// Style Imports
import styles from '../../styles.module.css'

const PerfectScroll = () => {
  return (
    <div className={classnames('flex items-center plb-2.5 pli-6 is-full', styles.customStyles)}>
      <HorizontalNav>
        <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
          <SubMenu label='Dashboards'>
            <MenuItem>Analytics</MenuItem>
            <MenuItem>eCommerce</MenuItem>
          </SubMenu>
          <SubMenu label='User'>
            <MenuItem>List</MenuItem>
            <MenuItem>Preview</MenuItem>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Add</MenuItem>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Teams</MenuItem>
            <MenuItem>Projects</MenuItem>
            <MenuItem>Account</MenuItem>
            <MenuItem>Security</MenuItem>
            <MenuItem>Billings & Plans</MenuItem>
            <MenuItem>Notifications</MenuItem>
            <MenuItem>Connection</MenuItem>
            <MenuItem>Roles</MenuItem>
            <MenuItem>Permission</MenuItem>
          </SubMenu>
          <MenuItem>FAQ</MenuItem>
          <SubMenu label='Auth Pages'>
            <MenuItem>Login</MenuItem>
            <MenuItem>Register</MenuItem>
            <MenuItem>Forgot Password</MenuItem>
          </SubMenu>
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

export default PerfectScroll
