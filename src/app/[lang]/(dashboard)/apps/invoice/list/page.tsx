// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import InvoiceList from '@views/apps/invoice/list'

const getData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/invoice`)

  if (!res.ok) {
    throw new Error('Failed to fetch invoice data')
  }

  return res.json()
}

const InvoiceApp = async () => {
  // Vars
  const data = await getData()

  return (
    <Grid container>
      <Grid item xs={12}>
        <InvoiceList invoiceData={data} />
      </Grid>
    </Grid>
  )
}

export default InvoiceApp
