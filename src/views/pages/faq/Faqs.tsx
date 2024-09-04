// React Imports
import { useMemo, useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { FaqType } from '@/types/pages/faqTypes'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'
import CustomTabList from '@core/components/mui/TabList'

type props = {
  faqData: FaqType[]
  searchValue: string
}

const FAQ = ({ faqData, searchValue }: props) => {
  // States
  const [activeTab, setActiveTab] = useState('payment')

  // Hooks
  const filteredData = useMemo(() => {
    let returnVal = faqData

    if (searchValue) {
      returnVal = faqData
        .filter(category =>
          category.questionsAnswers.some(item => item.question.toLowerCase().includes(searchValue.toLowerCase()))
        )
        .map(category => ({
          ...category,
          questionsAnswers: category.questionsAnswers.filter(item =>
            item.question.toLowerCase().includes(searchValue.toLowerCase())
          )
        }))
    }

    setActiveTab(returnVal[0]?.id ?? '')

    return returnVal
  }, [faqData, searchValue])

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setActiveTab(newValue)
  }

  return filteredData.length > 0 ? (
    <TabContext value={activeTab}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={5} md={4} xl={3} className='flex flex-col items-center gap-4'>
          <CustomTabList orientation='vertical' onChange={handleChange} className='is-full' pill='true'>
            {filteredData.map((faq, index) => (
              <Tab
                key={index}
                label={faq.title}
                value={faq.id}
                icon={<i className={classnames(faq.icon, '!mbe-0 mie-1.5')} />}
                className='flex-row justify-start !min-is-full'
              />
            ))}
          </CustomTabList>
          <img
            src='/images/illustrations/characters-with-objects/1.png'
            className='max-md:hidden is-[230px]'
            alt='john image'
          />
        </Grid>
        <Grid item xs={12} sm={7} md={8} xl={9}>
          {filteredData.map((faq, index) => (
            <TabPanel key={index} value={faq.id} className='p-0'>
              <div className='flex items-center gap-4 mbe-4'>
                <CustomAvatar skin='light' color='primary' variant='rounded' size={50}>
                  <i className={classnames(faq.icon, 'text-3xl')} />
                </CustomAvatar>
                <div>
                  <Typography variant='h5'>{faq.title}</Typography>
                  <Typography>{faq.subtitle}</Typography>
                </div>
              </div>
              <div>
                {faq.questionsAnswers.map((items, index) => (
                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<i className='tabler-chevron-right' />}
                      aria-controls='panel1a-content'
                    >
                      <Typography>{items.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{items.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </TabPanel>
          ))}
        </Grid>
      </Grid>
    </TabContext>
  ) : (
    <div className='flex justify-center items-center'>
      <i className='tabler-alert-circle' />
      <Typography>No results found</Typography>
    </div>
  )
}

export default FAQ
