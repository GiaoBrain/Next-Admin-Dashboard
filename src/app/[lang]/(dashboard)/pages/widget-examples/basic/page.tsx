// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// Components Imports
import CardInfluencingInfluencerWithImg from '@views/pages/widget-examples/basic/CardInfluencingInfluencerWithImg'
import CardUser from '@views/pages/widget-examples/basic/CardUser'
import CardWithCollapse from '@views/pages/widget-examples/basic/CardWithCollapse'
import CardMobile from '@views/pages/widget-examples/basic/CardMobile'
import CardHorizontalRatings from '@views/pages/widget-examples/basic/CardHorizontalRatings'
import CardWatch from '@views/pages/widget-examples/basic/CardWatch'
import CardLifetimeMembership from '@views/pages/widget-examples/basic/CardLifetimeMembership'
import CardInfluencingInfluencer from '@views/pages/widget-examples/basic/CardInfluencingInfluencer'
import CardVerticalRatings from '@views/pages/widget-examples/basic/CardVerticalRatings'
import CardSupport from '@views/pages/widget-examples/basic/CardSupport'
import CardWithTabs from '@views/pages/widget-examples/basic/CardWithTabs'
import CardWithTabsCenter from '@views/pages/widget-examples/basic/CardWithTabsCenter'
import CardTwitter from '@views/pages/widget-examples/basic/CardTwitter'
import CardFacebook from '@views/pages/widget-examples/basic/CardFacebook'
import CardLinkedIn from '@views/pages/widget-examples/basic/CardLinkedIn'

const Basic = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h3'>Basic Cards</Typography>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardInfluencingInfluencerWithImg />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardUser />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardWithCollapse />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardMobile />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardHorizontalRatings />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardWatch />
      </Grid>
      <Grid item xs={12} md={8}>
        <CardLifetimeMembership />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardInfluencingInfluencer />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardVerticalRatings />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardSupport />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h3'>Navigation Cards</Typography>
        <Divider />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardWithTabs />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardWithTabsCenter />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h3'>Solid Cards</Typography>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardTwitter />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardFacebook />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardLinkedIn />
      </Grid>
    </Grid>
  )
}

export default Basic
