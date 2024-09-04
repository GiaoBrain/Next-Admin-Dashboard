'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from '@components/layout/horizontal/NavToggle'
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'
import VerticalNavContent from '../../../VerticalNavContent'

// Style Imports
import styles from '../../../styles.module.css'

const BackgroundImage = () => {
  return (
    <div className={classnames('flex items-center plb-2.5 pli-6 is-full', styles.customStyles)}>
      <NavToggle />
      <HorizontalNav
        switchToVertical
        breakpoint='md'
        verticalNavContent={VerticalNavContent}
        verticalNavProps={{
          backgroundColor: 'rgba(255, 255, 255, 0.55)',
          customStyles: { '& .ts-menu-button': { paddingBlock: '12px' } },
          backgroundImage: 'https://wallpapers.com/images/high/road-in-between-iphone-landscape-8epxqsbuv4c1xqoi.webp'
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

export default BackgroundImage
