'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import AddPaymentDrawer from '@views/apps/invoice/shared/AddPaymentDrawer'
import SendInvoiceDrawer from '@views/apps/invoice/shared/SendInvoiceDrawer'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

const PreviewActions = ({ id }: { id: string }) => {
  // States
  const [paymentDrawerOpen, setPaymentDrawerOpen] = useState(false)
  const [sendDrawerOpen, setSendDrawerOpen] = useState(false)

  // Hooks
  const { lang: locale } = useParams()

  return (
    <>
      <Card>
        <CardContent className='flex flex-col gap-4'>
          <Button
            fullWidth
            variant='contained'
            className='capitalize'
            startIcon={<i className='tabler-send' />}
            onClick={() => setSendDrawerOpen(true)}
          >
            Send Invoice
          </Button>
          <Button fullWidth color='secondary' variant='tonal' className='capitalize'>
            Download
          </Button>
          <div className='flex items-center gap-4'>
            <Button
              fullWidth
              target='_blank'
              component={Link}
              color='secondary'
              variant='tonal'
              className='capitalize'
              href={`/apps/invoice/print/${id}`}
            >
              Print
            </Button>
            <Button
              fullWidth
              component={Link}
              color='secondary'
              variant='tonal'
              className='capitalize'
              href={getLocalizedUrl(`apps/invoice/edit/${id}`, locale as Locale)}
            >
              Edit
            </Button>
          </div>
          <Button
            fullWidth
            color='success'
            variant='contained'
            className='capitalize'
            onClick={() => setPaymentDrawerOpen(true)}
            startIcon={<i className='tabler-currency-dollar' />}
          >
            Add Payment
          </Button>
        </CardContent>
      </Card>
      <AddPaymentDrawer open={paymentDrawerOpen} handleClose={() => setPaymentDrawerOpen(false)} />
      <SendInvoiceDrawer open={sendDrawerOpen} handleClose={() => setSendDrawerOpen(false)} />
    </>
  )
}

export default PreviewActions
