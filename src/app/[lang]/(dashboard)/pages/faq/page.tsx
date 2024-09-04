// Component Imports
import FAQ from '@views/pages/faq'

const getFaqData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/pages/faq`)

  if (!res.ok) {
    throw new Error('Failed to fetch faqData')
  }

  return res.json()
}

const FAQPage = async () => {
  // Vars
  const data = await getFaqData()

  return <FAQ data={data} />
}

export default FAQPage
