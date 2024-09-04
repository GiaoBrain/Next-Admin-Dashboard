// React Imports
import { useState, useEffect } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import Rating from '@mui/material/Rating'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import Fade from '@mui/material/Fade'

// Component Imports
import DirectionalIcon from '@components/DirectionalIcon'
import CustomTextField from '@core/components/mui/TextField'

// Vars
const products = [
  {
    imgSrc: '/images/pages/google-home.png',
    imgAlt: 'Google Home',
    productName: 'Google - Google Home - White',
    soldBy: 'Google',
    inStock: true,
    rating: 4,
    count: 1,
    price: 299,
    originalPrice: 359
  },
  {
    imgSrc: '/images/pages/iPhone-11.png',
    imgAlt: 'Apple iPhone',
    productName: 'Apple iPhone 11 (64GB, Black)',
    soldBy: 'Apple',
    inStock: true,
    rating: 4,
    count: 1,
    price: 899,
    originalPrice: 999
  }
]

const StepCart = ({ handleNext }: { handleNext: () => void }) => {
  // States
  const [openCollapse, setOpenCollapse] = useState<boolean>(true)
  const [openFade, setOpenFade] = useState<boolean>(true)

  useEffect(() => {
    if (!openFade) {
      setTimeout(() => {
        setOpenCollapse(false)
      }, 300)
    }
  }, [openFade])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={8} className='flex flex-col gap-4'>
        <Collapse in={openCollapse}>
          <Fade in={openFade} timeout={{ exit: 300 }}>
            <Alert
              icon={<i className='tabler-percentage' />}
              action={
                <IconButton
                  aria-label='close'
                  color='inherit'
                  size='small'
                  onClick={() => {
                    setOpenFade(false)
                  }}
                >
                  <i className='tabler-x' />
                </IconButton>
              }
            >
              <AlertTitle>Available Offers</AlertTitle>
              <Typography color='success.main'>
                - 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards
              </Typography>
              <Typography color='success.main'>
                - 25% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA
              </Typography>
            </Alert>
          </Fade>
        </Collapse>
        <Typography variant='h5'>My Shopping Bag (2 Items)</Typography>
        <div className='border rounded'>
          {products.map((product, index) => (
            <div
              key={index}
              className='flex flex-col sm:flex-row items-center gap-4 p-6 relative [&:not(:last-child)]:border-be'
            >
              <img height={140} width={140} src={product.imgSrc} alt={product.imgAlt} />
              <IconButton size='small' className='absolute block-start-4 inline-end-4'>
                <i className='tabler-x text-lg' />
              </IconButton>
              <div className='flex flex-col sm:flex-row items-center sm:justify-between is-full'>
                <div className='flex flex-col items-center gap-2 sm:items-start'>
                  <Typography color='text.primary' className='font-medium'>
                    {product.productName}
                  </Typography>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-0.5'>
                      <Typography color='text.disabled'>Sold By:</Typography>
                      <Typography href='/' component={Link} onClick={e => e.preventDefault()} color='primary'>
                        {product.soldBy}
                      </Typography>
                    </div>
                    {product.inStock ? (
                      <Chip variant='tonal' size='small' color='success' label='In Stock' />
                    ) : (
                      <Chip variant='tonal' size='small' color='error' label='Out of Stock' />
                    )}
                  </div>
                  <Rating
                    name='google-nest-rating'
                    value={product.rating}
                    emptyIcon={<i className='tabler-star-filled text-textDisabled' />}
                    readOnly
                  />
                  <CustomTextField
                    size='small'
                    type='number'
                    defaultValue={product.count}
                    className='block max-is-[152px]'
                  />
                </div>
                <div className='flex flex-col justify-between items-center gap-4 sm:items-end'>
                  <div className='flex'>
                    <Typography color='primary'>{`$${product.price}/`}</Typography>
                    <Typography className='line-through'>{`$${product.originalPrice}`}</Typography>
                  </div>
                  <Button variant='tonal' size='small'>
                    Move to wishlist
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Typography
          href='/'
          component={Link}
          onClick={e => e.preventDefault()}
          className='flex items-center justify-between gap-4 plb-2 pli-5 border border-primary rounded'
          color='primary'
        >
          Add more products from wishlist
          <DirectionalIcon ltrIconClass='tabler-arrow-right' rtlIconClass='tabler-arrow-left' className='text-base' />
        </Typography>
      </Grid>
      <Grid item xs={12} lg={4} className='flex flex-col gap-4'>
        <div className='border rounded'>
          <CardContent className='flex flex-col gap-4'>
            <Typography color='text.primary' className='font-medium'>
              Offer
            </Typography>
            <div className='flex gap-4'>
              <CustomTextField fullWidth size='small' placeholder='Enter Promo Code' />
              <Button variant='tonal' className='normal-case'>
                Apply
              </Button>
            </div>
            <div className='rounded bg-actionHover p-6 flex flex-col gap-2'>
              <Typography color='text.primary' className='font-medium'>
                Buying gift for a loved one?
              </Typography>
              <Typography>Gift wrap and personalized message on card, Only for $2.</Typography>
              <Typography
                href='/'
                component={Link}
                onClick={e => e.preventDefault()}
                color='primary'
                className='font-medium'
              >
                Add a gift wrap
              </Typography>
            </div>
          </CardContent>
          <Divider />
          <CardContent className='flex gap-4 flex-col'>
            <Typography color='text.primary' className='font-medium'>
              Price Details
            </Typography>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center flex-wrap justify-between'>
                <Typography color='text.primary'>Bag Total</Typography>
                <Typography color='text.primary'>$1198.00</Typography>
              </div>
              <div className='flex items-center flex-wrap justify-between'>
                <Typography color='text.primary'>Coup Discount</Typography>
                <Typography href='/' component={Link} onClick={e => e.preventDefault()} color='primary'>
                  Apply Coupon
                </Typography>
              </div>
              <div className='flex items-center flex-wrap justify-between'>
                <Typography color='text.primary'>Order Total</Typography>
                <Typography color='text.primary'>$1198.00</Typography>
              </div>
              <div className='flex items-center flex-wrap justify-between'>
                <Typography color='text.primary'>Delivery Charges</Typography>
                <div className='flex items-center gap-2'>
                  <Typography color='text.disabled' className='line-through'>
                    $5.00
                  </Typography>
                  <Chip variant='tonal' size='small' color='success' label='Free' />
                </div>
              </div>
            </div>
          </CardContent>
          <Divider />
          <CardContent>
            <div className='flex items-center flex-wrap justify-between'>
              <Typography color='text.primary' className='font-medium'>
                Total
              </Typography>
              <Typography color='text.primary' className='font-medium'>
                $1198.00
              </Typography>
            </div>
          </CardContent>
        </div>
        <div className='flex justify-normal sm:justify-end xl:justify-normal'>
          <Button className='is-full sm:is-auto lg:is-full' variant='contained' onClick={handleNext}>
            Place Order
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default StepCart
