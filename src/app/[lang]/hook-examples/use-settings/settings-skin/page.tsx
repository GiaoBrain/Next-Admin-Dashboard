'use client'

// MUI Imports
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

const SettingsSkin = () => {
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
        <p>Skin:</p>
        <RadioGroup row value={settings.skin} onChange={event => handleChange('skin', event.target.value)}>
          <FormControlLabel value='default' control={<Radio />} label='Default' />
          <FormControlLabel value='bordered' control={<Radio />} label='Border' />
        </RadioGroup>
        <p>value: {settings.skin}</p>
      </div>
    </main>
  )
}

export default SettingsSkin
