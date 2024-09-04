// Third-party Imports
import classnames from 'classnames'

// Util Imports
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'

// Component Imports
import { menuClasses } from '@menu/utils/menuClasses'

// Style Imports
import styles from '../../styles.module.css'

const RootStyles = () => {
  return (
    <div className={classnames('flex items-center plb-2.5 pli-6 is-full', styles.customStyles)}>
      <HorizontalNav>
        <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
          <SubMenu
            label='Dashboards'
            rootStyles={{
              ['& > .' + menuClasses.button]: {
                backgroundColor: '#e4e2ff',
                color: '#7367F0 !important'
              }
            }}
          >
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
  )
}

export default RootStyles
