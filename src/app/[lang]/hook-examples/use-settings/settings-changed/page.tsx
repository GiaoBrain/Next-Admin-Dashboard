'use client'

// MUI Imports
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

const SettingsChanged = () => {
  // Hooks
  const { settings, updateSettings, isSettingsChanged, resetSettings } = useSettings()

  const handleChange = (field: keyof Settings, value: Settings[keyof Settings]) => {
    updateSettings({
      [field]: value
    })
  }

  return (
    <main className='p-4 flex-grow'>
      <div className='flex justify-between'>
        <div>
          <p>Mode:</p>
          <RadioGroup row value={settings.mode} onChange={event => handleChange('mode', event.target.value)}>
            <FormControlLabel value='dark' control={<Radio />} label='Dark' />
            <FormControlLabel value='light' control={<Radio />} label='Light' />
            <FormControlLabel value='system' control={<Radio />} label='System' />
          </RadioGroup>
        </div>
        <p>{isSettingsChanged && `value: ${settings.mode}`}</p>
      </div>
      {isSettingsChanged && <Button onClick={resetSettings}>Reset</Button>}
    </main>
  )
}

export default SettingsChanged
