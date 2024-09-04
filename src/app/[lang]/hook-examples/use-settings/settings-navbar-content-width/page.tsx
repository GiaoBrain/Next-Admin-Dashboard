'use client'

// MUI Imports
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

const SettingsNavbarContentWidth = () => {
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
        <p>Navbar Content:</p>
        <RadioGroup
          row
          value={settings.navbarContentWidth}
          onChange={event => handleChange('navbarContentWidth', event.target.value)}
        >
          <FormControlLabel value='compact' control={<Radio />} label='Compact' />
          <FormControlLabel value='wide' control={<Radio />} label='Wide' />
        </RadioGroup>
        <p>Value: {settings.navbarContentWidth}</p>
      </div>
    </main>
  )
}

export default SettingsNavbarContentWidth
