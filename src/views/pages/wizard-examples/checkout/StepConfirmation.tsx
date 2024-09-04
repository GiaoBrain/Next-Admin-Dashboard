// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import CardContent from '@mui/material/CardContent'

// Vars
const products = [
  {
    imgSrc: '/images/pages/google-home.png',
    imgAlt: 'Google Home',
    productName: 'Google - Google Home - White',
    soldBy: 'Google',
    inStock: true,
    price: 299,
    originalPrice: 359
  },
  {
    imgSrc: '/images/pages/iPhone-11.png',
    imgAlt: 'Apple iPhone',
    productName: 'Apple iPhone 11 (64GB, Black)',
    soldBy: 'Apple',
    inStock: false,
    price: 899,
    originalPrice: 999
  }
]

const StepConfirmation = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <div className='flex items-center flex-col text-center gap-4'>
          <Typography variant='h4'>Thank You! 😇</Typography>
          <Typography>
            Your order <span className='font-medium text-textPrimary'>#1536548131</span> has been placed!
          </Typography>
          <div>
            <Typography>
              We sent an email to <span className='font-medium text-textPrimary'>john.doe@example.com</span> with your
              order confirmation and receipt.
            </Typography>
            <Typography>
              If the email hasn&#39;t arrived within two minutes, please check your spam folder to see if the email was
              routed there.
            </Typography>
          </div>
          <div className='flex items-center'>
            <i className='tabler-clock text-xl' />
            <Typography>Time placed: 25/05/2020 13:35pm</Typography>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className='flex flex-col md:flex-row border rounded'>
          <div className='flex flex-col is-full items-center p-6 sm:items-start max-md:[&:not(:last-child)]:border-be md:[&:not(:last-child)]:border-ie'>
            <div className='flex items-center gap-2 mbe-4'>
              <i className='tabler-map-pin text-xl text-textPrimary' />
              <Typography color='text.primary' className='font-medium'>
                Shipping
              </Typography>
            </div>
            <Typography>John Doe</Typography>
            <Typography>4135 Parkway Street,</Typography>
            <Typography>Los Angeles, CA 90017,</Typography>
            <Typography className='mbe-4'>USA</Typography>
            <Typography>+123456789</Typography>
          </div>
          <div className='flex flex-col is-full items-center p-6 sm:items-start max-md:[&:not(:last-child)]:border-be md:[&:not(:last-child)]:border-ie'>
            <div className='flex items-center gap-2 mbe-4'>
              <i className='tabler-credit-card text-xl text-textPrimary' />
              <Typography color='text.primary' className='font-medium'>
                Billing Address
              </Typography>
            </div>
            <Typography>John Doe</Typography>
            <Typography>4135 Parkway Street,</Typography>
            <Typography>Los Angeles, CA 90017,</Typography>
            <Typography className='mbe-4'>USA</Typography>
            <Typography>+123456789</Typography>
          </div>
          <div className='flex flex-col is-full items-center p-6 sm:items-start'>
            <div className='flex items-center gap-2 mbe-4'>
              <i className='tabler-ship text-xl text-textPrimary' />
              <Typography color='text.primary' className='font-medium'>
                Shipping Method
              </Typography>
            </div>
            <Typography className='mbe-4'>Preferred Method:</Typography>
            <Typography>Standard Delivery</Typography>
            <Typography>(Normally 3-4 business days)</Typography>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={8} xl={9}>
        <div className='border rounded'>
          {products.map((product, index) => (
            <div
              key={index}
              className='flex flex-col sm:flex-row items-center gap-4 p-6 [&:not(:last-child)]:border-be'
            >
              <img height={80} width={80} src={product.imgSrc} alt={product.imgAlt} />
              <div className='flex justify-between is-full flex-col sm:flex-row items-center gap-2'>
                <div className='flex flex-col items-center sm:items-start gap-2'>
                  <Typography color='text.primary' className='font-medium'>
                    {product.productName}
                  </Typography>
                  <div className='flex flex-col items-baseline gap-2'>
                    <div className='flex gap-0.5'>
                      <Typography>Sold By:</Typography>
                      <Typography href='/' component={Link} onClick={e => e.preventDefault()} color='primary'>
                        {product.soldBy}
                      </Typography>
                    </div>
                    {product.inStock && <Chip variant='tonal' size='small' color='success' label='In Stock' />}
                  </div>
                </div>
                <div className='flex items-center'>
                  <Typography color='primary'>{`$${product.price}/`}</Typography>
                  <Typography color='text.disabled' className='line-through'>{`$${product.originalPrice}`}</Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Grid>
      <Grid item xs={12} md={4} xl={3}>
        <div className='border rounded'>
          <CardContent className='flex gap-4 flex-col'>
            <Typography color='text.primary' className='font-medium'>
              Price Details
            </Typography>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center justify-between gap-2'>
                <Typography color='text.primary'>Order Total</Typography>
                <Typography color='text.primary'>$1198.00</Typography>
              </div>
              <div className='flex items-center justify-between gap-2'>
                <Typography color='text.primary'>Charges</Typography>
                <div className='flex gap-2'>
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
            <div className='flex items-center justify-between gap-2'>
              <Typography color='text.primary' className='font-medium'>
                Total
              </Typography>
              <Typography color='text.primary' className='font-medium'>
                $1198.00
              </Typography>
            </div>
          </CardContent>
        </div>
      </Grid>
    </Grid>
  )
}

export default StepConfirmation
