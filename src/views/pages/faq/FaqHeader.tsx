// MUI Imports
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import type { TextFieldProps } from '@mui/material/TextField'

// import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// Third-party Imports
import classnames from 'classnames'

// Styles imports
import styles from './styles.module.css'
import CustomTextField from '@core/components/mui/TextField'

// Styled CustomTextField component
const CustomTextFieldStyled = styled(CustomTextField)<TextFieldProps>(({ theme }) => ({
  '& .MuiInputBase-root.MuiFilledInput-root': {
    width: '100%',
    backgroundColor: 'var(--mui-palette-background-paper) !important'
  },
  [theme.breakpoints.up('sm')]: {
    width: '55%'
  }
}))

type Props = {
  searchValue: string
  setSearchValue: (value: string) => void
}

const FaqHeader = ({ searchValue, setSearchValue }: Props) => {
  return (
    <Card className={classnames('shadow-none bg-transparent bg-cover', styles.bgImage)} elevation={0}>
      <CardContent className='flex flex-col items-center is-full text-center !plb-[5.8125rem] pli-5'>
        <Typography variant='h4' className='mbe-2.5'>
          Hello, how can we help?
        </Typography>
        <Typography className='mbe-4'>or choose a category to quickly find the help you need</Typography>
        <CustomTextFieldStyled
          className='is-full sm:max-is-[55%] md:max-is-[600px]'
          placeholder='search articles...'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <i className='tabler-search' />
              </InputAdornment>
            )
          }}
        />
      </CardContent>
    </Card>
  )
}

export default FaqHeader
