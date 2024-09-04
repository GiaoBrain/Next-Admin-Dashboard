// Next Imports
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Type Imports
import type { CalendarFiltersType } from '@/types/apps/calendarTypes'

// Import Data
import { events } from '@/app/api/fake-db/calendar'

// Fetch all events with selected calendars filter
export async function GET(request: NextRequest) {
  try {
    // read params from request
    const selectedCalendars = await request.nextUrl.searchParams.get('selectedCalendars')

    // filter events by selected calendars
    const filtered_events = selectedCalendars
      ? events.filter(event => selectedCalendars.includes(event.extendedProps.calendar as CalendarFiltersType))
      : events

    // Vars
    const json_response = {
      status: 'success',
      results: filtered_events.length,
      events: filtered_events
    }

    return NextResponse.json(json_response)
  } catch (error) {
    console.log('[CALENDAR_EVENTS_GET]', error)

    return new NextResponse('Internal Error', { status: 500 })
  }
}

// Add new event
export async function POST(request: NextRequest) {
  try {
    // Vars
    const event = await request.json()

    const json_response = {
      status: 'success',
      results: events.length,
      event
    }

    // Generate new event id
    event['id'] = events[events.length - 1].id + 1

    // return new event
    return NextResponse.json(json_response)
  } catch (error) {
    console.log('[CALENDAR_EVENTS_POST]', error)

    return new NextResponse('Internal Error', { status: 500 })
  }
}

// Update event
export async function PUT(request: NextRequest) {
  try {
    // Vars
    const event = await request.json()

    const json_response = {
      status: 'success',
      results: events.length,
      event
    }

    // console.log(event)

    // check if event id is present
    if (!event.id) {
      return new NextResponse('Event ID missing', { status: 400 })
    }

    // find index of event
    const index = events.findIndex(e => e.id === event.id)

    // update event
    events[index] = event

    // return updated event
    return NextResponse.json(json_response)
  } catch (error) {
    console.log('[CALENDAR_EVENTS_PUT]', error)

    return new NextResponse('Internal Error', { status: 500 })
  }
}

// Delete event
export async function DELETE(request: NextRequest) {
  try {
    // Vars
    const event = await request.json()

    const json_response = {
      status: 'success',
      results: events.length,
      event
    }

    // check if event id is present
    if (!event.id) {
      return new NextResponse('Event ID missing', { status: 400 })
    }

    // find index of event
    const index = events.findIndex(e => e.id === event.id)

    // remove event
    events.splice(index, 1)

    // return deleted event
    return NextResponse.json(json_response)
  } catch (error) {
    console.log('[CALENDAR_EVENTS_DELETE]', error)

    return new NextResponse('Internal Error', { status: 500 })
  }
}
