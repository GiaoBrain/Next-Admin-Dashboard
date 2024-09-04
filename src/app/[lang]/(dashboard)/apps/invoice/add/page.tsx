// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import AddCard from '@views/apps/invoice/add/AddCard'
import AddActions from '@views/apps/invoice/add/AddActions'

const getData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/invoice`)

  if (!res.ok) {
    throw new Error('Failed to fetch invoice data')
  }

  return res.json()
}

const InvoiceAdd = async () => {
  // Vars
  const data = await getData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={9}>
        <AddCard invoiceData={data} />
      </Grid>
      <Grid item xs={12} md={3}>
        <AddActions />
      </Grid>
    </Grid>
  )
}

export default InvoiceAdd
