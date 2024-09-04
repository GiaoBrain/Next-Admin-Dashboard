'use client'

// MUI Imports
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

const SettingsMode = () => {
  // Hooks
  const { settings, updateSettings } = useSettings()

  const handleChange = (field: keyof Settings, value: Settings[keyof Settings]) => {
    updateSettings({
      [field]: value
    })
  }

  return (
    <main className='p-4 flex-grow'>
      <div className='flex flex-col'>
        <p>Mode:</p>
        <RadioGroup row value={settings.mode} onChange={event => handleChange('mode', event.target.value)}>
          <FormControlLabel value='dark' control={<Radio />} label='Dark' />
          <FormControlLabel value='light' control={<Radio />} label='Light' />
          <FormControlLabel value='system' control={<Radio />} label='System' />
        </RadioGroup>
        <p>value: {settings.mode}</p>
      </div>
    </main>
  )
}

export default SettingsMode
