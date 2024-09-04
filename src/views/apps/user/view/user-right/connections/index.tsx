'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

type ConnectedAccountsType = {
  title: string
  logo: string
  checked: boolean
  subtitle: string
}

type SocialAccountsType = {
  title: string
  logo: string
  username?: string
  isConnected: boolean
  href?: string
}

// Vars
const connectedAccountsArr: ConnectedAccountsType[] = [
  {
    checked: true,
    title: 'Google',
    logo: '/images/logos/google.png',
    subtitle: 'Calendar and Contacts'
  },
  {
    checked: false,
    title: 'Slack',
    logo: '/images/logos/slack.png',
    subtitle: 'Communications'
  },
  {
    checked: true,
    title: 'Github',
    logo: '/images/logos/github.png',
    subtitle: 'Manage your Git repositories'
  },
  {
    checked: true,
    title: 'Mailchimp',
    subtitle: 'Email marketing service',
    logo: '/images/logos/mailchimp.png'
  },
  {
    title: 'Asana',
    checked: false,
    subtitle: 'Task Communication',
    logo: '/images/logos/asana.png'
  }
]

const socialAccountsArr: SocialAccountsType[] = [
  {
    title: 'Facebook',
    isConnected: false,
    logo: '/images/logos/facebook.png'
  },
  {
    title: 'Twitter',
    isConnected: true,
    username: '@Pixinvent',
    logo: '/images/logos/twitter.png',
    href: 'https://twitter.com/pixinvents'
  },
  {
    title: 'Linkedin',
    isConnected: true,
    username: '@Pixinvent',
    logo: '/images/logos/linkedin.png',
    href: 'https://www.linkedin.com/company/pixinvent'
  },
  {
    title: 'Dribbble',
    isConnected: false,
    logo: '/images/logos/dribbble.png'
  },
  {
    title: 'Behance',
    isConnected: false,
    logo: '/images/logos/behance.png'
  }
]

const ConnectionsTab = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title='Connected Accounts'
            subheader='Display content from your connected accounts on your site'
          />
          <CardContent className='flex flex-col gap-4'>
            {connectedAccountsArr.map((item, index) => (
              <div key={index} className='flex items-center justify-between gap-4'>
                <div className='flex flex-grow items-center gap-4'>
                  <img height={36} width={36} src={item.logo} alt={item.title} />
                  <div className='flex flex-col flex-grow gap-0.5'>
                    <Typography className='font-medium' color='text.primary'>
                      {item.title}
                    </Typography>
                    <Typography>{item.subtitle}</Typography>
                  </div>
                </div>
                <Switch defaultChecked={item.checked} />
              </div>
            ))}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Social Accounts' subheader='Display content from social accounts on your site' />
          <CardContent className='flex flex-col gap-4'>
            {socialAccountsArr.map((item, index) => (
              <div key={index} className='flex items-center justify-between gap-4'>
                <div className='flex flex-grow items-center gap-4'>
                  <img height={36} width={36} src={item.logo} alt={item.title} />
                  <div className='flex flex-col flex-grow gap-0.5'>
                    <Typography className='font-medium' color='text.primary'>
                      {item.title}
                    </Typography>
                    {item.isConnected ? (
                      <Typography color='primary' component={Link} href={item.href || '/'} target='_blank'>
                        {item.username}
                      </Typography>
                    ) : (
                      <Typography>Not Connected</Typography>
                    )}
                  </div>
                </div>
                <Button
                  variant='tonal'
                  color={item.isConnected ? 'error' : 'secondary'}
                  className='p-1.5 is-[38px] bs-[38px] min-is-0'
                >
                  <i
                    className={classnames(item.isConnected ? 'tabler-trash text-error' : 'tabler-link', 'text-[22px]')}
                  />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ConnectionsTab
