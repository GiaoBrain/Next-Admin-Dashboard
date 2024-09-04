// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const CongratulationsJohn = () => {
  return (
    <Card>
      <CardContent className='relative'>
        <Typography variant='h5' className='mbe-0.5'>
          Congratulations John 🎉
        </Typography>
        <Typography variant='subtitle1' className='mbe-3'>
          Best seller of the month
        </Typography>
        <Typography variant='h4' color='primary.main' className='mbe-1'>
          $48.9k
        </Typography>
        <Button variant='contained' color='primary'>
          View Sales
        </Button>
        <img
          alt='Congratulations John'
          src='/images/illustrations/characters/8.png'
          className='absolute block-end-0 max-bs-[150px] is-[116px] inline-end-6'
        />
        <img />
      </CardContent>
    </Card>
  )
}

export default CongratulationsJohn
