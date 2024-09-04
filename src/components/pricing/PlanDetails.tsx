// MUI Imports
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'

type Props = {
  pricingPlan: 'monthly' | 'annually'
  data: PricingPlanType
}

const PlanDetails = ({ data, pricingPlan }: Props) => {
  return (
    <CardContent
      className={classnames('relative border rounded pli-5 pbs-[3.75rem] flex flex-col gap-5', {
        'border-primary': data?.popularPlan
      })}
    >
      {data?.popularPlan ? (
        <Chip
          color='primary'
          label='Popular'
          size='small'
          className='absolute block-start-4 inline-end-5'
          variant='tonal'
        />
      ) : null}
      <div className='flex justify-center'>
        <img
          src={data?.imgSrc}
          height={data?.imgHeight}
          width={data?.imgWidth}
          alt={`${data?.title.toLowerCase().replace(' ', '-')}-img`}
        />
      </div>
      <div className='text-center flex flex-col gap-1'>
        <Typography variant='h4'>{data?.title}</Typography>
        <Typography>{data?.subtitle}</Typography>
      </div>
      <div className='relative mbe-4'>
        <div className='flex justify-center'>
          <Typography component='sup' className='self-start font-medium'>
            $
          </Typography>
          <Typography variant='h1' component='span' color='primary'>
            {pricingPlan === 'monthly' ? data?.monthlyPrice : data?.yearlyPlan.monthly}
          </Typography>
          <Typography component='sub' className='self-end font-medium'>
            /month
          </Typography>
        </div>
        {pricingPlan !== 'monthly' && data?.monthlyPrice !== 0 ? (
          <Typography
            variant='caption'
            className='absolute inline-end-1/2 translate-x-[50%]'
          >{`USD ${data?.yearlyPlan.annually}/year`}</Typography>
        ) : null}
      </div>
      <div className='flex flex-col gap-4'>
        {data?.planBenefits.map((item: string, index: number) => (
          <div key={index} className='flex items-center gap-2'>
            <span className='inline-flex'>
              <i className='tabler-circle-filled text-[8px]' />
            </span>
            <Typography>{item}</Typography>
          </div>
        ))}
      </div>
      <Button
        fullWidth
        color={data?.currentPlan ? 'success' : 'primary'}
        variant={data?.popularPlan ? 'contained' : 'tonal'}
      >
        {data?.currentPlan ? 'Your Current Plan' : 'Upgrade'}
      </Button>
    </CardContent>
  )
}

export default PlanDetails
