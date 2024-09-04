import { events } from './../app/api/fake-db/calendar/index'

// Type Imports
import type { CalendarActionType, CalendarFiltersType, CalendarType, EventType } from '@/types/apps/calendarTypes'

export default function calendarReducer(calendars: CalendarType, action: CalendarActionType): CalendarType {
  switch (action.type) {
    case 'added': {
      return {
        ...calendars,
        events: [...calendars.events, action.event as EventType]
      }
    }

    case 'updated': {
      const events = calendars.events.map(event => {
        if (event.id === action.event?.id) {
          return action.event
        } else {
          return event
        }
      })

      return {
        ...calendars,
        events
      }
    }

    case 'deleted': {
      const events = calendars.events.filter(event => event.id !== action.eventId)

      return {
        ...calendars,
        events
      }
    }

    case 'selected_event': {
      return { ...calendars, selectedEvent: action.event }
    }

    case 'selected_calendars': {
      const selected_calendars = calendars.selectedCalendars

      const index = calendars.selectedCalendars.indexOf(action.calendar as CalendarFiltersType)

      if (index !== -1) {
        selected_calendars.splice(index, 1)
      } else {
        selected_calendars.push(action.calendar as CalendarFiltersType)
      }

      // Filter events based on the updated selected_calendars
      const selected_events = events.filter(event =>
        selected_calendars.includes(event.extendedProps.calendar as CalendarFiltersType)
      )

      return { ...calendars, events: selected_events, selectedCalendars: selected_calendars }
    }

    case 'selected_all_calendars': {
      let selected_calendars: CalendarFiltersType[] = ['Personal', 'Business', 'Family', 'Holiday', 'ETC']
      let calendar_events = events

      if (!action.view_all) {
        selected_calendars = []
        calendar_events = []
      }

      return { ...calendars, events: calendar_events, selectedCalendars: selected_calendars }
    }

    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
