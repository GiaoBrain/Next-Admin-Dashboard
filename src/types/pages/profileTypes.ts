// Type Imports
import type { ThemeColor } from '@core/types'

export type ProjectTableRowType = {
  id: number
  title: string
  subtitle: string
  leader: string
  avatar?: string
  avatarGroup: string[]
  status: number
  actions?: string
}
export type ProfileHeaderType = {
  fullName: string
  coverImg: string
  location: string
  profileImg: string
  joiningDate: string
  designation: string
  designationIcon?: string
}
export type ProfileAvatarGroupType = {
  name: string
  avatar: string
}
export type ProfileChipType = {
  title: string
  color: ThemeColor
}
export type ProfileCommonType = {
  icon: string
  value: string
  property: string
}
export type ProfileTeamsType = {
  value: string
  property: string
}
export type ProfileConnectionsType = {
  name: string
  avatar: string
  isFriend: boolean
  connections: string
}
export type ProfileTeamsTechType = {
  title: string
  avatar: string
  members: number
  chipText: string
  ChipColor: ThemeColor
}
export type TeamsTabType = {
  title: string
  avatar: string
  description: string
  extraMembers?: number
  chips: ProfileChipType[]
  avatarGroup: ProfileAvatarGroupType[]
}
export type ProjectsTabType = {
  hours: string
  tasks: string
  title: string
  budget: string
  client: string
  avatar: string
  members: string
  daysLeft: number
  comments: number
  deadline: string
  startDate: string
  totalTask: number
  budgetSpent: string
  description: string
  chipColor: ThemeColor
  completedTask: number
  avatarColor?: ThemeColor
  avatarGroup: ProfileAvatarGroupType[]
}
export type ConnectionsTabType = {
  name: string
  tasks: string
  avatar: string
  projects: string
  connections: string
  designation: string
  isConnected: boolean
  chips: ProfileChipType[]
}
export type ProfileTabType = {
  teams: ProfileTeamsType[]
  about: ProfileCommonType[]
  contacts: ProfileCommonType[]
  overview: ProfileCommonType[]
  teamsTech: ProfileTeamsTechType[]
  connections: ProfileConnectionsType[]
  projectTable: ProjectTableRowType[]
}
export type UserProfileActiveTab = ProfileTabType | TeamsTabType[] | ProjectsTabType[] | ConnectionsTabType[]

export type DataType = {
  profile: ProfileTabType
  teams: TeamsTabType[]
  projects: ProjectsTabType[]
  connections: ConnectionsTabType[]
}
export type Data = {
  users: DataType
  profileHeader: ProfileHeaderType
}
