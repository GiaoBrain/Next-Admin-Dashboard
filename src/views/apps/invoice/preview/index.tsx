// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { InvoiceType } from '@/types/apps/invoiceTypes'

// Component Imports
import PreviewActions from './PreviewActions'
import PreviewCard from './PreviewCard'

const Preview = ({ invoiceData, id }: { invoiceData: InvoiceType; id: string }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={9}>
        <PreviewCard invoiceData={invoiceData} id={id} />
      </Grid>
      <Grid item xs={12} md={3}>
        <PreviewActions id={id} />
      </Grid>
    </Grid>
  )
}

export default Preview
