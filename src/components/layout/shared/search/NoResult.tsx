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

type NoResultProps = {
  query: string | undefined
}

type NoResultData = {
  label: string
  href: string
  icon: string
}

const noResultData: NoResultData[] = [
  {
    label: 'Analytics',
    href: '/dashboards/analytics',
    icon: 'tabler-chart-pie-2'
  },
  {
    label: 'User Profile',
    href: '/pages/user-profile',
    icon: 'tabler-user'
  },
  {
    label: 'CRM',
    href: '/dashboards/crm',
    icon: 'tabler-3d-cube-sphere'
  }
]

const NoResult = (props: NoResultProps) => {
  // Props
  const { query } = props

  // Hooks
  const { query: kbarQuery } = useKBar()
  const { lang: locale } = useParams()

  return (
    <div className='flex items-center justify-center grow flex-wrap plb-14 pli-16 overflow-y-auto overflow-x-hidden'>
      <div className='flex flex-col items-center'>
        <i className='tabler-file-unknown text-[64px] mbe-2.5' />
        <p className='text-lg font-medium leading-[1.55556] mbe-11'>{`No result for "${query}"`}</p>
        <p className='text-[15px] leading-[1.4667] mbe-4 text-textDisabled'>Try searching for</p>
        <ul className='flex flex-col gap-4'>
          {noResultData.map((item, index) => (
            <li key={index} className='flex items-center'>
              <Link
                href={getLocalizedUrl(item.href, locale as Locale)}
                className='flex items-center gap-2 hover:text-primary focus-visible:text-primary focus-visible:outline-0'
                onClick={kbarQuery.toggle}
              >
                <i className={classnames(item.icon, 'text-xl')} />
                <p className='text-[15px] leading-[1.4667] truncate'>{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NoResult
