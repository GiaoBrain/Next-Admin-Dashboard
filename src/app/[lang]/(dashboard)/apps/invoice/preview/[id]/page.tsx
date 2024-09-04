// Next Imports
import { redirect } from 'next/navigation'

// Type Imports
import type { InvoiceType } from '@/types/apps/invoiceTypes'

// Component Imports
import Preview from '@views/apps/invoice/preview'

const getData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/invoice`)

  if (!res.ok) {
    throw new Error('Failed to fetch invoice data')
  }

  return res.json()
}

const PreviewPage = async ({ params }: { params: { id: string } }) => {
  // Vars
  const data = await getData()

  const filteredData = data.filter((invoice: InvoiceType) => invoice.id === params.id)[0]

  if (!filteredData) {
    redirect('/not-found')
  }

  return filteredData ? <Preview invoiceData={filteredData} id={params.id} /> : null
}

export default PreviewPage
