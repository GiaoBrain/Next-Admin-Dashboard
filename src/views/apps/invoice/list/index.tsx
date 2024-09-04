// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { InvoiceType } from '@/types/apps/invoiceTypes'

// Component Imports
import InvoiceListTable from './InvoiceListTable'
import InvoiceCard from './InvoiceCard'

const InvoiceList = ({ invoiceData }: { invoiceData: InvoiceType[] }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <InvoiceCard />
      </Grid>
      <Grid item xs={12}>
        <InvoiceListTable invoiceData={invoiceData} />
      </Grid>
    </Grid>
  )
}

export default InvoiceList
