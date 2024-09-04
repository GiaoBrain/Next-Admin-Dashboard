// Third-party Imports
import classnames from 'classnames'

// Component Imports
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'

// Style Imports
import styles from '../../styles.module.css'

const CustomStyles = () => {
  return (
    <div className={classnames('flex items-center plb-2.5 pli-6 is-full', styles.customStyles)}>
      <HorizontalNav
        customStyles={{
          backgroundColor: '#edebff',
          color: '#695dee',
          borderRadius: '0.375rem',
          padding: '0.25rem'
        }}
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

export default CustomStyles
