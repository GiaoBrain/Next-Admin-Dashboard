'use client'

// React Imports
import { useState, useEffect, forwardRef, useCallback } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import type { SelectChangeEvent } from '@mui/material/Select'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import { useForm, Controller } from 'react-hook-form'
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { EventDateType, AddEventSidebarType } from '@/types/apps/calendarTypes'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

// Styled Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

interface PickerProps {
  label?: string
  error?: boolean
  registername?: string
}

interface DefaultStateType {
  url: string
  title: string
  allDay: boolean
  calendar: string
  description: string
  endDate: Date | string
  startDate: Date | string
  guests: string[] | undefined
}

// Vars
const capitalize = (string: string) => string && string[0].toUpperCase() + string.slice(1)

// Vars
const defaultState: DefaultStateType = {
  url: '',
  title: '',
  guests: [],
  allDay: true,
  description: '',
  endDate: new Date(),
  calendar: 'Business',
  startDate: new Date()
}

const AddEventSidebar = (props: AddEventSidebarType) => {
  // Props
  const {
    calendars,
    calendarApi,
    handleAddEvent,
    handleUpdateEvent,
    handleDeleteEvent,
    handleSelectEvent,
    addEventSidebarOpen,
    handleAddEventSidebarToggle
  } = props

  // States
  const [values, setValues] = useState<DefaultStateType>(defaultState)

  // Refs
  const PickersComponent = forwardRef(({ ...props }: PickerProps, ref) => {
    return (
      <CustomTextField
        inputRef={ref}
        fullWidth
        {...props}
        label={props.label || ''}
        className='is-full'
        error={props.error}
      />
    )
  })

  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const {
    control,
    setValue,
    clearErrors,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { title: '' } })

  const resetToStoredValues = useCallback(() => {
    if (calendars.selectedEvent !== null) {
      const event = calendars.selectedEvent

      setValue('title', event.title || '')
      setValues({
        url: event.url || '',
        title: event.title || '',
        allDay: event.allDay,
        guests: event.extendedProps.guests || [],
        description: event.extendedProps.description || '',
        calendar: event.extendedProps.calendar || 'Business',
        endDate: event.end !== null ? event.end : event.start,
        startDate: event.start !== null ? event.start : new Date()
      })
    }
  }, [setValue, calendars.selectedEvent])

  const resetToEmptyValues = useCallback(() => {
    setValue('title', '')
    setValues(defaultState)
  }, [setValue])

  const handleSidebarClose = async () => {
    setValues(defaultState)
    clearErrors()
    handleSelectEvent(null)
    handleAddEventSidebarToggle()
  }

  const onSubmit = (data: { title: string }) => {
    const modifiedEvent = {
      url: values.url,
      display: 'block',
      title: data.title,
      end: values.endDate,
      allDay: values.allDay,
      start: values.startDate,
      extendedProps: {
        calendar: capitalize(values.calendar),
        guests: values.guests && values.guests.length ? values.guests : undefined,
        description: values.description.length ? values.description : undefined
      }
    }

    if (
      calendars.selectedEvent === null ||
      (calendars.selectedEvent !== null && !calendars.selectedEvent.title.length)
    ) {
      handleAddEvent(modifiedEvent)
    } else {
      handleUpdateEvent({ id: parseInt(calendars.selectedEvent.id), ...modifiedEvent })
    }

    calendarApi.refetchEvents()
    handleSidebarClose()
  }

  const handleDeleteButtonClick = () => {
    if (calendars.selectedEvent) {
      handleDeleteEvent(parseInt(calendars.selectedEvent.id))
    }

    calendarApi.getEventById(calendars.selectedEvent.id).remove()
    handleSidebarClose()
  }

  const handleStartDate = (date: Date) => {
    if (date > values.endDate) {
      setValues({ ...values, startDate: new Date(date), endDate: new Date(date) })
    }
  }

  const RenderSidebarFooter = () => {
    if (calendars.selectedEvent === null || (calendars.selectedEvent && !calendars.selectedEvent.title.length)) {
      return (
        <div className='flex gap-4'>
          <Button type='submit' variant='contained'>
            Add
          </Button>
          <Button variant='outlined' color='secondary' onClick={resetToEmptyValues}>
            Reset
          </Button>
        </div>
      )
    } else {
      return (
        <div className='flex gap-4'>
          <Button type='submit' variant='contained'>
            Update
          </Button>
          <Button variant='outlined' color='secondary' onClick={resetToStoredValues}>
            Reset
          </Button>
        </div>
      )
    }
  }

  const ScrollWrapper = isBelowSmScreen ? 'div' : PerfectScrollbar

  useEffect(() => {
    if (calendars.selectedEvent !== null) {
      resetToStoredValues()
    } else {
      resetToEmptyValues()
    }
  }, [addEventSidebarOpen, resetToStoredValues, resetToEmptyValues, calendars.selectedEvent])

  return (
    <Drawer
      anchor='right'
      open={addEventSidebarOpen}
      onClose={handleSidebarClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: ['100%', 400] } }}
    >
      <Box className='flex justify-between items-center sidebar-header plb-5 pli-6 border-be'>
        <Typography variant='h5'>
          {calendars.selectedEvent && calendars.selectedEvent.title.length ? 'Update Event' : 'Add Event'}
        </Typography>
        {calendars.selectedEvent && calendars.selectedEvent.title.length ? (
          <Box className='flex items-center' sx={{ gap: calendars.selectedEvent !== null ? 1 : 0 }}>
            <IconButton size='small' onClick={handleDeleteButtonClick}>
              <i className='tabler-trash text-xl text-textPrimary' />
            </IconButton>
            <IconButton size='small' onClick={handleSidebarClose}>
              <i className='tabler-x text-xl text-textPrimary' />
            </IconButton>
          </Box>
        ) : (
          <IconButton size='small' onClick={handleSidebarClose}>
            <i className='tabler-x text-xl text-textPrimary' />
          </IconButton>
        )}
      </Box>
      <ScrollWrapper
        {...(isBelowSmScreen
          ? { className: 'bs-full overflow-y-auto overflow-x-hidden' }
          : { options: { wheelPropagation: false, suppressScrollX: true } })}
      >
        <Box className='sidebar-body plb-5 pli-6'>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className='flex flex-col gap-6'>
            <Controller
              name='title'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <CustomTextField
                  fullWidth
                  label='Title'
                  value={value}
                  onChange={onChange}
                  {...(errors.title && { error: true, helperText: 'This field is required' })}
                />
              )}
            />
            <CustomTextField
              select
              fullWidth
              label='Calendar'
              value={values.calendar}
              onChange={e => setValues({ ...values, calendar: e.target.value })}
            >
              <MenuItem value='Personal'>Personal</MenuItem>
              <MenuItem value='Business'>Business</MenuItem>
              <MenuItem value='Family'>Family</MenuItem>
              <MenuItem value='Holiday'>Holiday</MenuItem>
              <MenuItem value='ETC'>ETC</MenuItem>
            </CustomTextField>

            <AppReactDatepicker
              selectsStart
              id='event-start-date'
              endDate={values.endDate as EventDateType}
              selected={values.startDate as EventDateType}
              startDate={values.startDate as EventDateType}
              showTimeSelect={!values.allDay}
              dateFormat={!values.allDay ? 'yyyy-MM-dd hh:mm' : 'yyyy-MM-dd'}
              customInput={<PickersComponent label='Start Date' registername='startDate' />}
              onChange={(date: Date) => setValues({ ...values, startDate: new Date(date) })}
              onSelect={handleStartDate}
            />
            <AppReactDatepicker
              selectsEnd
              id='event-end-date'
              endDate={values.endDate as EventDateType}
              selected={values.endDate as EventDateType}
              minDate={values.startDate as EventDateType}
              startDate={values.startDate as EventDateType}
              showTimeSelect={!values.allDay}
              dateFormat={!values.allDay ? 'yyyy-MM-dd hh:mm' : 'yyyy-MM-dd'}
              customInput={<PickersComponent label='End Date' registername='endDate' />}
              onChange={(date: Date) => setValues({ ...values, endDate: new Date(date) })}
            />
            <FormControl>
              <FormControlLabel
                label='All Day'
                control={
                  <Switch checked={values.allDay} onChange={e => setValues({ ...values, allDay: e.target.checked })} />
                }
              />
            </FormControl>
            <CustomTextField
              fullWidth
              type='url'
              id='event-url'
              label='Event URL'
              value={values.url}
              onChange={e => setValues({ ...values, url: e.target.value })}
            />
            <CustomTextField
              fullWidth
              select
              label='Guests'
              value={values.guests}
              id='event-guests-select'
              // eslint-disable-next-line lines-around-comment
              // @ts-ignore
              onChange={(e: SelectChangeEvent<(typeof values)['guests']>) => {
                setValues({
                  ...values,
                  guests: typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value
                })
              }}
              SelectProps={{
                multiple: true
              }}
            >
              <MenuItem value='bruce'>Bruce</MenuItem>
              <MenuItem value='clark'>Clark</MenuItem>
              <MenuItem value='diana'>Diana</MenuItem>
              <MenuItem value='john'>John</MenuItem>
              <MenuItem value='barry'>Barry</MenuItem>
            </CustomTextField>
            <CustomTextField
              rows={4}
              multiline
              fullWidth
              label='Description'
              id='event-description'
              value={values.description}
              onChange={e => setValues({ ...values, description: e.target.value })}
            />
            <div className='flex items-center'>
              <RenderSidebarFooter />
            </div>
          </form>
        </Box>
      </ScrollWrapper>
    </Drawer>
  )
}

export default AddEventSidebar
