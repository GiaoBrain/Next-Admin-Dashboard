// MUI Imports
import type { ChipProps } from '@mui/material/Chip'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

// Type Imports
import type { ThemeColor } from '@core/types'
import type { CustomAvatarProps } from '@core/components/mui/Avatar'

export type CardStatsSquareProps = {
  avatarIcon: string
  avatarColor?: ThemeColor
  avatarSize?: number
  avatarIconSize?: number
  avatarVariant?: CustomAvatarProps['variant']
  avatarSkin?: CustomAvatarProps['skin']
  stats: string
  statsTitle: string
}

export type CardStatsHorizontalProps = {
  title: string
  stats: string
  avatarIcon: string
  avatarIconSize?: number
  avatarColor?: ThemeColor
  avatarSize?: number
  avatarSkin?: CustomAvatarProps['skin']
}

export type CardStatsVerticalProps = {
  title: string
  subtitle: string
  stats: string
  avatarIcon: string
  avatarSize?: number
  avatarIconSize?: number
  avatarSkin?: CustomAvatarProps['skin']
  avatarColor?: ThemeColor
  chipText: string
  chipColor?: ThemeColor
  chipVariant?: ChipProps['variant']
}

export type CardStatsWithAreaChartProps = {
  stats: string
  title: string
  chartColor?: ThemeColor
  chartSeries: ApexOptions['series']
  avatarIcon: string
  avatarSize?: number
  avatarColor?: ThemeColor
  avatarIconSize?: number
  avatarSkin?: CustomAvatarProps['skin']
}

export type CardStatsType = {
  statsSquare: CardStatsSquareProps[]
  statsHorizontal: CardStatsHorizontalProps[]
  statsVertical: CardStatsVerticalProps[]
  statsWithAreaChart: CardStatsWithAreaChartProps[]
}
