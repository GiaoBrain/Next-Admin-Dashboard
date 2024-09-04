// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import DialogAddCard from '@views/pages/dialog-examples/DialogAddCard'
import DialogEditUserInfo from '@views/pages/dialog-examples/DialogEditUserInfo'
import DialogAuthentication from '@views/pages/dialog-examples/DialogAuthentication'
import DialogAddNewAddress from '@views/pages/dialog-examples/DialogAddNewAddress'
import DialogShareProject from '@views/pages/dialog-examples/DialogShareProject'
import DialogReferEarn from '@views/pages/dialog-examples/DialogReferEarn'
import DialogPaymentMethod from '@views/pages/dialog-examples/DialogPaymentMethod'
import DialogPaymentProviders from '@views/pages/dialog-examples/DialogPaymentProviders'
import DialogCreateApp from '@views/pages/dialog-examples/DialogCreateApp'
import DialogPricing from '@views/pages/dialog-examples/DialogPricing'

const getPricingData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/pages/pricing`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const DialogExamples = async () => {
  // Vars
  const data = await getPricingData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} md={4}>
        <DialogAddCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DialogEditUserInfo />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DialogAuthentication />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DialogAddNewAddress />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DialogShareProject />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DialogReferEarn />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DialogPaymentMethod />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DialogPaymentProviders />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DialogPricing data={data} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DialogCreateApp />
      </Grid>
    </Grid>
  )
}

export default DialogExamples
