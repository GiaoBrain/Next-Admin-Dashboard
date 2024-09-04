'use client'

// MUI Imports
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

const SettingsLayout = () => {
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
        <p>Layout:</p>
        <RadioGroup row value={settings.layout} onChange={event => handleChange('layout', event.target.value)}>
          <FormControlLabel value='vertical' control={<Radio />} label='Vertical' />
          <FormControlLabel value='collapsed' control={<Radio />} label='Collapsed' />
          <FormControlLabel value='horizontal' control={<Radio />} label='Horizontal' />
        </RadioGroup>
        <p>Value: {settings.layout}</p>
      </div>
    </main>
  )
}

export default SettingsLayout
