'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { FaqType } from '@/types/pages/faqTypes'

// Component Imports
import FaqHeader from '@views/pages/faq/FaqHeader'
import Faqs from '@views/pages/faq/Faqs'
import FaqFooter from '@views/pages/faq/FaqFooter'

const FAQ = ({ data }: { data: FaqType[] }) => {
  // States
  const [searchValue, setSearchValue] = useState('')

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <FaqHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      </Grid>
      <Grid item xs={12}>
        <Faqs faqData={data} searchValue={searchValue} />
      </Grid>
      <Grid item xs={12}>
        <FaqFooter />
      </Grid>
    </Grid>
  )
}

export default FAQ
