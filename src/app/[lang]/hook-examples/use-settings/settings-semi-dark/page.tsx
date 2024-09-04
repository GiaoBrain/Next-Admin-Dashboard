'use client'

// MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

const SettingsSemiDark = () => {
  // Hooks
  const { settings, updateSettings } = useSettings()

  const handleChange = (field: keyof Settings, value: Settings[keyof Settings]) => {
    updateSettings({
      [field]: value
    })
  }

  return (
    <main className='p-4 flex-grow'>
      <div className='flex justify-between'>
        <FormControlLabel
          label='Semi Dark'
          control={
            <Checkbox checked={settings.semiDark} onChange={() => handleChange('semiDark', !settings.semiDark)} />
          }
        />
        <p>Value: {settings.semiDark?.toString()}</p>
      </div>
    </main>
  )
}

export default SettingsSemiDark
