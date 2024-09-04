// Type Imports
import type { ThemeColor } from '@core/types'

export type CalendarFiltersType = 'Personal' | 'Business' | 'Family' | 'Holiday' | 'ETC'

export type EventDateType = Date | null | undefined

export type CalendarColors = {
  ETC: ThemeColor
  Family: ThemeColor
  Holiday: ThemeColor
  Personal: ThemeColor
  Business: ThemeColor
}

export type CalendarType = {
  events: EventType[]
  selectedEvent: null | any
  selectedCalendars: CalendarFiltersType[]
}

export type EventType = {
  id: number
  url: string
  title: string
  allDay: boolean
  end: Date | string
  start: Date | string
  extendedProps: {
    calendar?: string
    description?: string
    guests?: string[] | string | undefined
  }
}

export type AddEventType = Omit<EventType, 'id'>

export type SidebarLeftProps = {
  mdAbove: boolean
  calendarApi: any
  calendars: CalendarType
  leftSidebarOpen: boolean
  calendarsColor: CalendarColors
  handleLeftSidebarToggle: () => void
  handleAddEventSidebarToggle: () => void
  handleAllCalendars: (val: boolean) => void
  handleSelectEvent: (event: EventType | null) => void
  handleCalendarsUpdate: (val: CalendarFiltersType) => void
}

export type AddEventSidebarType = {
  calendars: CalendarType
  calendarApi: any
  addEventSidebarOpen: boolean
  handleAddEvent: (event: AddEventType) => void
  handleUpdateEvent: (event: EventType) => void
  handleDeleteEvent: (eventId: EventType['id']) => void
  handleAddEventSidebarToggle: () => void
  handleSelectEvent: (event: EventType | null) => void
}

export type CalendarActionType = {
  type: 'added' | 'updated' | 'deleted' | 'selected_event' | 'selected_calendars' | 'selected_all_calendars'
  event?: EventType
  calendar?: CalendarFiltersType
  eventId?: number
  view_all?: boolean
}
