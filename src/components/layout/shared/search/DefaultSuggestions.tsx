// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Third-party Imports
import { useKBar } from 'kbar'
import classnames from 'classnames'

// Type Imports
import type { Locale } from '@configs/i18n'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

type DefaultSuggestionsType = {
  sectionLabel: string
  items: {
    label: string
    href: string
    icon?: string
  }[]
}

const defaultSuggestions: DefaultSuggestionsType[] = [
  {
    sectionLabel: 'Popular Searches',
    items: [
      {
        label: 'Analytics',
        href: '/dashboards/analytics',
        icon: 'tabler-trending-up'
      },
      {
        label: 'CRM',
        href: '/dashboards/crm',
        icon: 'tabler-chart-pie-2'
      },
      {
        label: 'eCommerce',
        href: '/dashboards/ecommerce',
        icon: 'tabler-shopping-cart'
      },
      {
        label: 'User List',
        href: '/apps/user/list',
        icon: 'tabler-file-description'
      }
    ]
  },
  {
    sectionLabel: 'Apps',
    items: [
      {
        label: 'Calendar',
        href: '/apps/calendar',
        icon: 'tabler-calendar'
      },
      {
        label: 'Invoice List',
        href: '/apps/invoice/list',
        icon: 'tabler-file-info'
      },
      {
        label: 'User List',
        href: '/apps/user/list',
        icon: 'tabler-file-invoice'
      },
      {
        label: 'Roles & Permissions',
        href: '/apps/roles',
        icon: 'tabler-lock'
      }
    ]
  },
  {
    sectionLabel: 'Pages',
    items: [
      {
        label: 'User Profile',
        href: '/pages/user-profile',
        icon: 'tabler-user'
      },
      {
        label: 'Account Settings',
        href: '/pages/account-settings',
        icon: 'tabler-settings'
      },
      {
        label: 'Pricing',
        href: '/pages/pricing',
        icon: 'tabler-currency-dollar'
      },
      {
        label: 'FAQ',
        href: '/pages/faq',
        icon: 'tabler-help-circle'
      }
    ]
  },
  {
    sectionLabel: 'Forms & Charts',
    items: [
      {
        label: 'Form Layouts',
        href: '/forms/form-layouts',
        icon: 'tabler-layout'
      },
      {
        label: 'Form Validation',
        href: '/forms/form-validation',
        icon: 'tabler-checkup-list'
      },
      {
        label: 'Form Wizard',
        href: '/forms/form-wizard',
        icon: 'tabler-git-merge'
      },
      {
        label: 'Apex Charts',
        href: '/charts/apex-charts',
        icon: 'tabler-chart-ppf'
      }
    ]
  }
]

const DefaultSuggestions = () => {
  // Hooks
  const { query } = useKBar()
  const { lang: locale } = useParams()

  return (
    <div className='flex grow flex-wrap gap-x-[48px] gap-y-8 plb-14 pli-16 overflow-y-auto overflow-x-hidden'>
      {defaultSuggestions.map((section, index) => (
        <div
          key={index}
          className='flex flex-col justify-center overflow-x-hidden gap-4 basis-full sm:basis-[calc((100%-3rem)/2)]'
        >
          <p className='text-xs leading-[1.16667] uppercase text-textDisabled tracking-[0.8px]'>
            {section.sectionLabel}
          </p>
          <ul className='flex flex-col gap-4'>
            {section.items.map((item, i) => (
              <li key={i} className='flex'>
                <Link
                  href={getLocalizedUrl(item.href, locale as Locale)}
                  onClick={query.toggle}
                  className='flex items-center overflow-x-hidden cursor-pointer gap-2 hover:text-primary focus-visible:text-primary focus-visible:outline-0'
                >
                  {item.icon && <i className={classnames(item.icon, 'flex text-xl')} />}
                  <p className='text-[15px] leading-[1.4667] truncate'>{item.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default DefaultSuggestions
