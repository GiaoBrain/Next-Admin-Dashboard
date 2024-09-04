// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import ProjectListTable from './ProjectListTable'
import UserActivityTimeLine from './UserActivityTimeline'
import InvoiceListTable from './InvoiceListTable'

const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/apps/invoice`)

  if (!res.ok) {
    throw new Error('Failed to fetch invoice data')
  }

  return res.json()
}

const OverViewTab = async () => {
  // Vars
  const invoiceData = await getData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ProjectListTable />
      </Grid>
      <Grid item xs={12}>
        <UserActivityTimeLine />
      </Grid>
      <Grid item xs={12}>
        <InvoiceListTable invoiceData={invoiceData} />
      </Grid>
    </Grid>
  )
}

export default OverViewTab
