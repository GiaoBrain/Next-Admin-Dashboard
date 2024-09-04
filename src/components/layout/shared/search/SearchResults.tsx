// Third-party Imports
import { KBarResults, useKBar, useMatches } from 'kbar'
import type { ActionImpl } from 'kbar'

// Type Imports
import type { SearchData } from '@/data/searchData'

// Component Imports
import DefaultSuggestions from './DefaultSuggestions'
import NoResult from './NoResult'
import SearchResultItem from './SearchResultItem'

type Results = (string | ActionImpl)[]

// Filter the search result data by limiting the number of results per section to 3 if
// there is more than one section. Otherwise, limit the number of results to 5.
const getFilteredResults = (results: Results) => {
  const sectionIndices: number[] = []

  results.forEach((item, index) => {
    if (typeof item === 'string') {
      sectionIndices.push(index)
    }
  })

  if (sectionIndices.length === 1) {
    return results.slice(0, 6)
  }

  const data: Results = []

  sectionIndices.forEach((sectionIndex, index) => {
    const nextSectionIndex = sectionIndices[index + 1] || results.length
    const sectionResults = results.slice(sectionIndex, Math.min(sectionIndex + 4, nextSectionIndex))

    data.push(...sectionResults)
  })

  return data
}

const SearchResults = ({ currentPath, data }: { currentPath: string; data: SearchData[] }) => {
  // Vars
  let query: string | undefined

  // Hooks
  useKBar(state => {
    query = state.searchQuery
  })
  const { results, rootActionId } = useMatches()

  if (query === '') {
    return <DefaultSuggestions />
  }

  if (results.length === 0) {
    return <NoResult query={query} />
  }

  return (
    <KBarResults
      // eslint-disable-next-line lines-around-comment
      // If you do not want to filter the search data, you can remove `getFilteredResults`
      // function below and directly pass `results` to `items` prop.
      items={getFilteredResults(results)}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className='pbs-4 pbe-2 pli-4 text-[12px] leading-[1.16667] text-textDisabled uppercase tracking-[0.8px]'>
            {item}
          </div>
        ) : (
          <SearchResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId}
            currentPath={currentPath}
            data={data.filter(d => d.id === item.id)[0]}
          />
        )
      } // @ts-ignore
      maxHeight='100%'
    />
  )
}

export default SearchResults
