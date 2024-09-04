'use client'

// React Imports
import { useEffect, useMemo, useState } from 'react'

// MUI Imports
import AvatarGroup from '@mui/material/AvatarGroup'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import Card from '@mui/material/Card'
import Checkbox from '@mui/material/Checkbox'
import CardHeader from '@mui/material/CardHeader'
import TablePagination from '@mui/material/TablePagination'
import type { TextFieldProps } from '@mui/material/TextField'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'
import type { ColumnDef, FilterFn } from '@tanstack/react-table'
import type { RankingInfo } from '@tanstack/match-sorter-utils'

// Type Imports
import type { ProjectTableRowType } from '@/types/pages/profileTypes'

// Component Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'
import CustomTextField from '@core/components/mui/TextField'
import TablePaginationComponent from '@/components/TablePaginationComponent'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<TextFieldProps, 'onChange'>) => {
  // States
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <CustomTextField {...props} value={value} onChange={e => setValue(e.target.value)} />
}

// Column Definitions
const columnHelper = createColumnHelper<ProjectTableRowType>()

const ProjectTables = ({ projectTable }: { projectTable?: ProjectTableRowType[] }) => {
  // States
  const [rowSelection, setRowSelection] = useState({})
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(...[projectTable])
  const [globalFilter, setGlobalFilter] = useState('')

  // Hooks
  const columns = useMemo<ColumnDef<ProjectTableRowType, any>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler()
            }}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler()
            }}
          />
        )
      },
      columnHelper.accessor('title', {
        header: 'Project',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            <CustomAvatar src={row.original.avatar} size={34} />
            <div className='flex flex-col'>
              <Typography className='font-medium' color='text.primary'>
                {row.original.title}
              </Typography>
              <Typography variant='body2'>{row.original.subtitle}</Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('leader', {
        header: 'Leader',
        cell: ({ row }) => <Typography color='text.primary'>{row.original.leader}</Typography>
      }),
      columnHelper.accessor('avatarGroup', {
        header: 'Team',
        cell: ({ row }) => (
          <AvatarGroup max={4} className='flex items-center pull-up'>
            {row.original.avatarGroup.map((avatar, index) => (
              <CustomAvatar key={index} src={avatar} size={26} />
            ))}
          </AvatarGroup>
        ),
        enableSorting: false
      }),
      columnHelper.accessor('status', {
        header: 'Progress',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            <LinearProgress color='primary' value={row.original.status} variant='determinate' className='is-20' />
            <Typography color='text.primary'>{`${row.original.status}%`}</Typography>
          </div>
        )
      }),
      columnHelper.accessor('actions', {
        header: 'Actions',
        cell: () => (
          <OptionMenu
            iconClassName='text-textSecondary'
            options={[
              'Details',
              'Archive',
              { divider: true },
              { text: 'Delete', menuItemProps: { className: 'text-error' } }
            ]}
          />
        ),
        enableSorting: false
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const table = useReactTable({
    data: data as ProjectTableRowType[],
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      rowSelection,
      globalFilter
    },
    initialState: {
      pagination: {
        pageSize: 5
      }
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  return (
    <Card>
      <CardHeader
        className='flex-wrap gap-x-4 gap-y-2'
        title='Project List'
        action={
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder='Search Project'
          />
        }
      />

      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div
                        className={classnames({
                          'flex items-center': header.column.getIsSorted(),
                          'cursor-pointer select-none': header.column.getCanSort()
                        })}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: <i className='tabler-chevron-up text-xl' />,
                          desc: <i className='tabler-chevron-down text-xl' />
                        }[header.column.getIsSorted() as 'asc' | 'desc'] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, table.getState().pagination.pageSize)
              .map(row => {
                return (
                  <tr key={row.id} className={classnames({ selected: row.getIsSelected() })}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                    ))}
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      <TablePagination
        rowsPerPageOptions={[5, 7, 10]}
        component={() => <TablePaginationComponent table={table} />}
        count={table.getFilteredRowModel().rows.length}
        rowsPerPage={table.getState().pagination.pageSize}
        page={table.getState().pagination.pageIndex}
        onPageChange={(_, page) => {
          table.setPageIndex(page)
        }}
      />
    </Card>
  )
}

export default ProjectTables
