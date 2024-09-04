// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'

// Component Imports
import CurrentPlan from './CurrentPlan'
import PaymentMethod from './PaymentMethod'
import BillingAddress from './BillingAddress'

const BillingPlans = ({ data }: { data: PricingPlanType[] }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CurrentPlan data={data} />
      </Grid>
      <Grid item xs={12}>
        <PaymentMethod />
      </Grid>
      <Grid item xs={12}>
        <BillingAddress />
      </Grid>
    </Grid>
  )
}

export default BillingPlans
