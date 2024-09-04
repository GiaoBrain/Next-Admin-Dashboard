// Third-party Imports
import classnames from 'classnames'

// Component Imports
import HorizontalNav, { Menu, MenuItem } from '@menu/horizontal-menu'

// Style Imports
import styles from '../../styles.module.css'

const Icon = () => {
  return (
    <div className={classnames('flex items-center plb-2.5 pli-6 is-full', styles.customStyles)}>
      <HorizontalNav>
        <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
          <MenuItem icon={<>🔥</>}>Analytics Dashboard</MenuItem>
          <MenuItem icon={<>🔥</>}>Calendar</MenuItem>
          <MenuItem icon={<>🔥</>}>FAQ</MenuItem>
          <MenuItem icon={<>🔥</>}>Form Layout</MenuItem>
          <MenuItem icon={<>🔥</>}>Documentation</MenuItem>
        </Menu>
      </HorizontalNav>
    </div>
  )
}

export default Icon
