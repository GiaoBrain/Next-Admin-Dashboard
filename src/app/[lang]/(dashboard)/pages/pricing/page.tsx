// Component Imports
import Pricing from '@views/pages/pricing'

const getPricingData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/pages/pricing`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const PricePage = async () => {
  // Vars
  const data = await getPricingData()

  return <Pricing data={data} />
}

export default PricePage
