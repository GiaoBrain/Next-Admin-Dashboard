'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'

// Style Imports
import styles from '../../../styles.module.css'

const ExpandIconWithParams = () => {
  return (
    <div className={classnames('flex items-center plb-2.5 pli-6 is-full', styles.customStyles)}>
      <HorizontalNav>
        <Menu
          menuItemStyles={{ button: { paddingBlock: '12px' } }}
          renderExpandIcon={({ open, level, disabled }) => (
            <div className='flex items-center'>
              {disabled ? (
                <>👎</>
              ) : (
                <>
                  {level === 0 && <span style={{ color: 'green', marginRight: '5px' }}>$</span>}
                  {open ? '-' : '+'}
                </>
              )}
            </div>
          )}
        >
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
              <SubMenu disabled label='Menu Level 3.2'>
                <MenuItem>Menu Level 4.1</MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
          <MenuItem>Documentation</MenuItem>
        </Menu>
      </HorizontalNav>
    </div>
  )
}

export default ExpandIconWithParams
