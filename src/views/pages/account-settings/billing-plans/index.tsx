// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import CurrentPlan from './CurrentPlan'
import Address from './Address'
import PaymentMethod from './PaymentMethod'
import InvoiceListTable from './InvoiceListTable'

const getPricingData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/pages/pricing`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const getInvoiceData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/invoice`)

  if (!res.ok) {
    throw new Error('Failed to fetch invoice data')
  }

  return res.json()
}

const BillingPlans = async () => {
  // vars
  const data = await getPricingData()
  const invoiceData = await getInvoiceData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CurrentPlan data={data} />
      </Grid>
      <Grid item xs={12}>
        <PaymentMethod />
      </Grid>
      <Grid item xs={12}>
        <Address />
      </Grid>
      <Grid item xs={12}>
        <InvoiceListTable invoiceData={invoiceData} />
      </Grid>
    </Grid>
  )
}

export default BillingPlans
