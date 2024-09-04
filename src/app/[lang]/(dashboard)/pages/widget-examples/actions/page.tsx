// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import CardActionsTable from '@views/pages/widget-examples/actions/Table'
import CardActionCollapsible from '@views/pages/widget-examples/actions/Collapsible'
import CardActionRefreshContent from '@views/pages/widget-examples/actions/RefreshContent'
import CardActionRemoveCard from '@views/pages/widget-examples/actions/RemoveCard'
import CardActionAll from '@views/pages/widget-examples/actions/AllActions'

const Actions = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CardActionsTable />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardActionCollapsible />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardActionRefreshContent />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardActionRemoveCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardActionAll />
      </Grid>
    </Grid>
  )
}

export default Actions
