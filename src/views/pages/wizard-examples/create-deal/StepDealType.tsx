// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import FormHelperText from '@mui/material/FormHelperText'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { styled, useTheme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Mode } from '@core/types'
import type { CustomInputVerticalData } from '@core/components/custom-inputs/types'

// Component Imports
import CustomInputVertical from '@core/components/custom-inputs/Vertical'
import CustomTextField from '@core/components/mui/TextField'
import DirectionalIcon from '@components/DirectionalIcon'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
  mode?: Mode
}

// Vars
const data: CustomInputVerticalData[] = [
  {
    title: 'Percentage',
    value: 'percentage',
    content: 'Create a deal which offer uses some % off (i.e 5% OFF) on total.',
    asset: 'tabler-discount-check-filled',
    isSelected: true
  },
  {
    title: 'Flat Amount',
    value: 'flat-amount',
    content: 'Create a deal which offer uses flat $ off (i.e $5 OFF) on the total.',
    asset: 'tabler-credit-card-filled'
  },
  {
    title: 'Prime Member',
    value: 'prime member',
    content: 'Create prime member only deal to encourage the prime members.',
    asset: 'tabler-diamond-filled'
  }
]

const ImgWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  borderRadius: 'var(--mui-shape-borderRadius)',
  border: '1px solid var(--mui-palette-divider)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 4, 0, 4)
  },
  [theme.breakpoints.up('sm')]: {
    height: 237
  },
  '& img': {
    height: 'auto',
    maxWidth: '100%'
  }
}))

const regionArray = ['Select Region', 'Asia', 'Europe', 'Africa', 'Australia', 'North America', 'South America']

const StepDealType = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  const initialSelectedOption: string = data.filter(item => item.isSelected)[
    data.filter(item => item.isSelected).length - 1
  ].value

  // States
  const [selectedOption, setSelectedOption] = useState<string>(initialSelectedOption)
  const [region, setRegion] = useState<string>('')

  // Hooks
  const theme = useTheme()

  const handleOptionChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelectedOption(prop)
    } else {
      setSelectedOption((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ImgWrapper>
          <img width={650} alt='illustration' src={`/images/pages/create-deal-type-${theme.palette.mode}.png`} />
        </ImgWrapper>
      </Grid>
      {data.map((item, index) => {
        let asset

        if (item.asset && typeof item.asset === 'string') {
          asset = <i className={classnames(item.asset, 'text-[1.75rem]')} />
        }

        return (
          <CustomInputVertical
            type='radio'
            key={index}
            gridProps={{ sm: 4, xs: 12 }}
            selected={selectedOption}
            name='custom-radios-basic'
            handleChange={handleOptionChange}
            data={typeof item.asset === 'string' ? { ...item, asset } : item}
          />
        )
      })}
      <Grid item xs={12} sm={6}>
        <CustomTextField
          fullWidth
          type='number'
          label='Discount'
          placeholder='25'
          helperText='Enter the discount percentage. 10 = 10%'
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField
          select
          fullWidth
          value={region}
          SelectProps={{
            onChange: e => setRegion(e.target.value as string)
          }}
          label='Region'
        >
          {regionArray.map((item, index) => (
            <MenuItem key={item} value={index === 0 ? '' : item}>
              {item}
            </MenuItem>
          ))}
        </CustomTextField>
        <FormHelperText>Select applicable regions for the deal.</FormHelperText>
      </Grid>
      <Grid item xs={12}>
        <div className='flex items-center justify-between'>
          <Button
            variant='tonal'
            color='secondary'
            disabled={activeStep === 0}
            onClick={handlePrev}
            startIcon={<DirectionalIcon ltrIconClass='tabler-arrow-left' rtlIconClass='tabler-arrow-right' />}
          >
            Previous
          </Button>
          <Button
            variant='contained'
            color={activeStep === steps.length - 1 ? 'success' : 'primary'}
            onClick={handleNext}
            endIcon={
              activeStep === steps.length - 1 ? (
                <i className='tabler-check' />
              ) : (
                <DirectionalIcon ltrIconClass='tabler-arrow-right' rtlIconClass='tabler-arrow-left' />
              )
            }
          >
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default StepDealType
