import type { CardStatsType } from '@/types/pages/widgetTypes'

export const db: CardStatsType = {
  statsSquare: [
    {
      avatarIcon: 'tabler-briefcase',
      avatarColor: 'error',
      avatarSize: 40,
      avatarIconSize: 24,
      avatarVariant: 'rounded',
      avatarSkin: 'light',
      stats: '97.8k',
      statsTitle: 'Orders'
    },
    {
      avatarIcon: 'tabler-message-dots',
      avatarColor: 'success',
      avatarSize: 40,
      avatarIconSize: 24,
      avatarVariant: 'rounded',
      avatarSkin: 'light',
      stats: '3.4k',
      statsTitle: 'Review'
    }
  ],
  statsHorizontal: [
    {
      title: 'CPU Usage',
      stats: '86%',
      avatarIcon: 'tabler-cpu',
      avatarIconSize: 26,
      avatarColor: 'primary',
      avatarSize: 42,
      avatarSkin: 'light'
    },
    {
      title: 'Memory Usage',
      stats: '1.24gb',
      avatarIcon: 'tabler-server',
      avatarIconSize: 26,
      avatarColor: 'success',
      avatarSize: 42,
      avatarSkin: 'light'
    },
    {
      title: 'Download Ratio',
      stats: '0.2%',
      avatarIcon: 'tabler-chart-pie-2',
      avatarIconSize: 26,
      avatarColor: 'error',
      avatarSize: 42,
      avatarSkin: 'light'
    },
    {
      title: 'Issues Found',
      stats: '128',
      avatarIcon: 'tabler-alert-octagon',
      avatarIconSize: 26,
      avatarColor: 'warning',
      avatarSize: 42,
      avatarSkin: 'light'
    }
  ],
  statsVertical: [
    {
      title: 'Total Profit',
      subtitle: 'Last week',
      stats: '1.28k',
      avatarIcon: 'tabler-credit-card',
      avatarColor: 'error',
      avatarSize: 44,
      avatarIconSize: 28,
      avatarSkin: 'light',
      chipText: '-12.2%',
      chipColor: 'error',
      chipVariant: 'tonal'
    },
    {
      title: 'Total Sales',
      subtitle: 'Monthly',
      stats: '24.67k',
      avatarIcon: 'tabler-currency-dollar',
      avatarColor: 'success',
      avatarSize: 44,
      avatarIconSize: 28,
      avatarSkin: 'light',
      chipText: '+24.5%',
      chipColor: 'success',
      chipVariant: 'tonal'
    }
  ],
  statsWithAreaChart: [
    {
      stats: '92.6k',
      chartColor: 'primary',
      avatarSize: 42,
      avatarColor: 'primary',
      avatarIconSize: 26,
      avatarIcon: 'tabler-users',
      avatarSkin: 'light',
      title: 'Subscribers Gained',
      chartSeries: [{ data: [40, 4, 58, 12, 35, 10, 84] }]
    },
    {
      title: 'Quarterly Sales',
      stats: '36.5%',
      avatarSize: 42,
      avatarIconSize: 26,
      avatarColor: 'error',
      avatarIcon: 'tabler-shopping-cart',
      avatarSkin: 'light',
      chartColor: 'error',
      chartSeries: [{ data: [44, 75, 24, 57, 6, 84] }]
    },
    {
      title: 'Orders Received',
      stats: '97.5k',
      avatarSize: 42,
      avatarIconSize: 26,
      avatarColor: 'warning',
      avatarIcon: 'tabler-box',
      avatarSkin: 'light',
      chartColor: 'warning',
      chartSeries: [{ data: [30, 84, 11, 76, 0, 49, 9] }]
    },
    {
      title: 'Revenue Generated',
      stats: '91.8k',
      avatarSize: 42,
      avatarIconSize: 26,
      avatarColor: 'success',
      avatarIcon: 'tabler-credit-card',
      avatarSkin: 'light',
      chartColor: 'success',
      chartSeries: [{ data: [6, 35, 25, 61, 32, 84, 70] }]
    }
  ]
}
