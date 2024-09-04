'use client'

// React Imports
import type { ReactNode } from 'react'

// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import Chip from '@mui/material/Chip'
import type { ChipProps } from '@mui/material/Chip'

import type { Locale } from '@configs/i18n'
import type {
  VerticalMenuDataType,
  VerticalSectionDataType,
  VerticalSubMenuDataType,
  VerticalMenuItemDataType,
  HorizontalMenuDataType,
  HorizontalSubMenuDataType,
  HorizontalMenuItemDataType
} from '@/types/menuTypes'

// Component Imports
import { SubMenu as HorizontalSubMenu, MenuItem as HorizontalMenuItem } from '@menu/horizontal-menu'
import { SubMenu as VerticalSubMenu, MenuItem as VerticalMenuItem, MenuSection } from '@menu/vertical-menu'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Generate a menu from the menu data array
export const GenerateVerticalMenu = ({ menuData }: { menuData: VerticalMenuDataType[] }) => {
  // Hooks
  const { lang: locale } = useParams()

  const renderMenuItems = (data: VerticalMenuDataType[]) => {
    // Use the map method to iterate through the array of menu data
    return data.map((item: VerticalMenuDataType, index) => {
      const menuSectionItem = item as VerticalSectionDataType
      const subMenuItem = item as VerticalSubMenuDataType
      const menuItem = item as VerticalMenuItemDataType

      const icon = <i className={menuItem.icon} />

      // Check if the current item is a section
      if (menuSectionItem.isSection) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { children, isSection, ...rest } = menuSectionItem

        // If it is, return a MenuSection component and call generateMenu with the current menuSectionItem's children
        return (
          <MenuSection key={index} {...rest}>
            {children && renderMenuItems(children)}
          </MenuSection>
        )
      }

      // Check if the current item is a sub menu
      if (subMenuItem.children) {
        const { children, prefix, suffix, ...rest } = subMenuItem

        const subMenuPrefix: ReactNode =
          prefix && (prefix as ChipProps).label ? (
            <Chip size='small' {...(prefix as ChipProps)} />
          ) : (
            (prefix as ReactNode)
          )

        const subMenuSuffix: ReactNode =
          suffix && (suffix as ChipProps).label ? (
            <Chip size='small' {...(suffix as ChipProps)} />
          ) : (
            (suffix as ReactNode)
          )

        // If it is, return a SubMenu component and call generateMenu with the current subMenuItem's children
        return (
          <VerticalSubMenu key={index} prefix={subMenuPrefix} suffix={subMenuSuffix} {...rest} icon={icon}>
            {children && renderMenuItems(children)}
          </VerticalSubMenu>
        )
      }

      // Localize the href
      const href = menuItem.href?.startsWith('http')
        ? menuItem.href
        : menuItem.href && getLocalizedUrl(menuItem.href, locale as Locale)

      // If the current item is neither a section nor a sub menu, return a MenuItem component
      const { prefix, suffix, ...rest } = menuItem

      const menuItemPrefix: ReactNode =
        prefix && (prefix as ChipProps).label ? <Chip size='small' {...(prefix as ChipProps)} /> : (prefix as ReactNode)

      const menuItemSuffix: ReactNode =
        suffix && (suffix as ChipProps).label ? <Chip size='small' {...(suffix as ChipProps)} /> : (suffix as ReactNode)

      return (
        <VerticalMenuItem key={index} prefix={menuItemPrefix} suffix={menuItemSuffix} {...rest} icon={icon} href={href}>
          {menuItem.label}
        </VerticalMenuItem>
      )
    })
  }

  return <>{renderMenuItems(menuData)}</>
}

// Generate a menu from the menu data array
export const GenerateHorizontalMenu = ({ menuData }: { menuData: HorizontalMenuDataType[] }) => {
  // Hooks
  const { lang: locale } = useParams()

  const renderMenuItems = (data: HorizontalMenuDataType[]) => {
    // Use the map method to iterate through the array of menu data
    return data.map((item: HorizontalMenuDataType, index) => {
      const subMenuItem = item as HorizontalSubMenuDataType
      const menuItem = item as HorizontalMenuItemDataType

      const icon = <i className={menuItem.icon} />

      // Check if the current item is a sub menu
      if (subMenuItem.children) {
        const { children, prefix, suffix, ...rest } = subMenuItem

        const subMenuPrefix: ReactNode =
          prefix && (prefix as ChipProps).label ? (
            <Chip size='small' {...(prefix as ChipProps)} />
          ) : (
            (prefix as ReactNode)
          )

        const subMenuSuffix: ReactNode =
          suffix && (suffix as ChipProps).label ? (
            <Chip size='small' {...(suffix as ChipProps)} />
          ) : (
            (suffix as ReactNode)
          )

        // If it is, return a SubMenu component and call generateMenu with the current subMenuItem's children
        return (
          <HorizontalSubMenu key={index} prefix={subMenuPrefix} suffix={subMenuSuffix} {...rest} icon={icon}>
            {children && renderMenuItems(children)}
          </HorizontalSubMenu>
        )
      }

      // Localize the href
      const href = menuItem.href?.startsWith('http')
        ? menuItem.href
        : menuItem.href && getLocalizedUrl(menuItem.href, locale as Locale)

      // If the current item is not a sub menu, return a MenuItem component
      const { prefix, suffix, ...rest } = menuItem

      const menuItemPrefix: ReactNode =
        prefix && (prefix as ChipProps).label ? <Chip size='small' {...(prefix as ChipProps)} /> : (prefix as ReactNode)

      const menuItemSuffix: ReactNode =
        suffix && (suffix as ChipProps).label ? <Chip size='small' {...(suffix as ChipProps)} /> : (suffix as ReactNode)

      return (
        <HorizontalMenuItem
          key={index}
          prefix={menuItemPrefix}
          suffix={menuItemSuffix}
          {...rest}
          icon={icon}
          href={href}
        >
          {menuItem.label}
        </HorizontalMenuItem>
      )
    })
  }

  return <>{renderMenuItems(menuData)}</>
}
