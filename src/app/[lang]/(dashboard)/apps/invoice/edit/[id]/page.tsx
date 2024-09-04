// Next Imports
import { redirect } from 'next/navigation'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { InvoiceType } from '@/types/apps/invoiceTypes'

// Component Imports
import EditCard from '@views/apps/invoice/edit/EditCard'
import EditActions from '@views/apps/invoice/edit/EditActions'

const getData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/invoice`)

  if (!res.ok) {
    throw new Error('Failed to fetch invoice data')
  }

  return res.json()
}

const EditPage = async ({ params }: { params: { id: string } }) => {
  // Vars
  const data = await getData()

  const filteredData = data.filter((invoice: InvoiceType) => invoice.id === params.id)[0]

  if (!filteredData) {
    redirect('/not-found')
  }

  return filteredData ? (
    <Grid container spacing={6}>
      <Grid item xs={12} md={9}>
        <EditCard data={data} invoiceData={filteredData} id={params.id} />
      </Grid>
      <Grid item xs={12} md={3}>
        <EditActions id={params.id} />
      </Grid>
    </Grid>
  ) : null
}

export default EditPage
