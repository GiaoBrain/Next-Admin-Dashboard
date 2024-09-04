'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'

// Component Imports
import Pricing from '@components/pricing'

const PricingPage = ({ data }: { data: PricingPlanType[] }) => {
  return (
    <Card>
      <CardContent className='xl:!plb-16 xl:pli-[6.25rem] pbs-10 pbe-5 pli-5 sm:p-16'>
        <Pricing data={data} />
      </CardContent>
    </Card>
  )
}

export default PricingPage
