'use client'

// React Imports
import type { ElementType, ReactNode } from 'react'

// Next Imports
import { useParams, usePathname, useRouter } from 'next/navigation'

// MUI Imports
import { IconButton } from '@mui/material'

// Third-party Imports
import { useMedia } from 'react-use'
import { KBarProvider, KBarPortal, KBarPositioner, KBarSearch, useKBar } from 'kbar'

// Type Imports
import type { ChildrenType } from '@core/types'
import type { Locale } from '@configs/i18n'

// Component Imports
import SearchResults from './SearchResults'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'
import { useSettings } from '@core/hooks/useSettings'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Styled Component Imports
import StyledKBarAnimator from './StyledKBarAnimator'

// Data Imports
import data from '@/data/searchData'

type ComponentWithUseKBarProps = Partial<ChildrenType> & {
  className?: string
  icon?: ReactNode
  tag?: ElementType
  triggerClick?: boolean
}

const ComponentWithUseKBar = (props: ComponentWithUseKBarProps) => {
  // Props
  const { children, className, icon, tag, triggerClick = false } = props

  // Hooks
  const { isBreakpointReached, isToggled, toggleVerticalNav } = useVerticalNav()

  const { query } = useKBar(state => {
    if (isBreakpointReached && isToggled && state.visualState === 'showing') {
      toggleVerticalNav(false)
    }
  })

  // Vars
  const Tag = tag || 'div'

  return (
    <Tag className={className} {...(triggerClick && { onClick: query.toggle })}>
      {icon || children}
    </Tag>
  )
}

// NavSearch Component
const NavSearch = () => {
  // Hooks
  const router = useRouter()
  const pathName = usePathname()
  const { settings } = useSettings()
  const { isBreakpointReached } = useVerticalNav()
  const isSmallScreen = useMedia('(max-width: 600px)', false)
  const { lang: locale } = useParams()

  // Vars
  // Search Actions Data with 'perform' method
  const searchActions = data.map(item => ({
    ...item,
    url: undefined, // Remove the 'url' key
    // Add 'perform' method
    perform: () =>
      item.url.startsWith('http')
        ? window.open(item.url, '_blank')
        : router.push(getLocalizedUrl(item.url, locale as Locale))
  }))

  return (
    <KBarProvider actions={searchActions}>
      <ComponentWithUseKBar
        triggerClick
        className='ts-nav-search-icon flex cursor-pointer'
        {...((settings.layout === 'horizontal' || isBreakpointReached) && {
          icon: (
            <IconButton className='text-textPrimary'>
              <i className='tabler-search' />
            </IconButton>
          )
        })}
      >
        <div className='flex items-center gap-2'>
          <IconButton className='text-textPrimary'>
            <i className='tabler-search' />
          </IconButton>
          <div className='whitespace-nowrap text-textDisabled'>Search ⌘K</div>
        </div>
      </ComponentWithUseKBar>
      <KBarPortal>
        <KBarPositioner className='!p-0 !items-center z-[calc(var(--search-z-index)+1)]'>
          <StyledKBarAnimator skin={settings.skin} isSmallScreen={isSmallScreen}>
            <div className='flex items-center gap-2 plb-5 pli-6 border-be'>
              <div className='flex'>
                <i className='tabler-search' />
              </div>
              <KBarSearch
                defaultPlaceholder=''
                name='search-input'
                className='grow min-is-0 plb-1 pli-1.5 text-[16px] outline-0 border-0 bg-transparent text-inherit font-[inherit] focus:outline-none focus-visible:outline-none'
              />
              <ComponentWithUseKBar className='select-none text-textDisabled'>{`[esc]`}</ComponentWithUseKBar>
              <ComponentWithUseKBar
                triggerClick
                className='flex cursor-pointer'
                icon={<i className='tabler-x text-[22px] text-textPrimary' />}
              />
            </div>
            <SearchResults currentPath={pathName} data={data} />
          </StyledKBarAnimator>
        </KBarPositioner>
        <div
          className='ts-nav-search-backdrop fixed inset-0 z-search bg-backdrop'
          role='button'
          aria-label='backdrop'
        />
      </KBarPortal>
    </KBarProvider>
  )
}

export default NavSearch
