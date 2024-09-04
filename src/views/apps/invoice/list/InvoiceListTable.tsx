'use client'

// React Imports
import { useState, useEffect, useMemo } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
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
import type { ThemeColor } from '@core/types'
import type { InvoiceType } from '@/types/apps/invoiceTypes'
import type { Locale } from '@configs/i18n'

// Component Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'
import TablePaginationComponent from '@components/TablePaginationComponent'
import CustomTextField from '@core/components/mui/TextField'

// Util Imports
import { getInitials } from '@/utils/getInitials'
import { getLocalizedUrl } from '@/utils/i18n'

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

type InvoiceTypeWithAction = InvoiceType & {
  action?: string
}

type InvoiceStatusObj = {
  [key: string]: {
    icon: string
    color: ThemeColor
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

// Vars
const invoiceStatusObj: InvoiceStatusObj = {
  Sent: { color: 'secondary', icon: 'tabler-send-2' },
  Paid: { color: 'success', icon: 'tabler-check' },
  Draft: { color: 'primary', icon: 'tabler-mail' },
  'Partial Payment': { color: 'warning', icon: 'tabler-chart-pie-2' },
  'Past Due': { color: 'error', icon: 'tabler-alert-circle' },
  Downloaded: { color: 'info', icon: 'tabler-arrow-down' }
}

// Column Definitions
const columnHelper = createColumnHelper<InvoiceTypeWithAction>()

const InvoiceListTable = ({ invoiceData }: { invoiceData: InvoiceType[] }) => {
  // States
  const [status, setStatus] = useState<InvoiceType['invoiceStatus']>('')
  const [rowSelection, setRowSelection] = useState({})
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(...[invoiceData])
  const [globalFilter, setGlobalFilter] = useState('')

  // Hooks
  const { lang: locale } = useParams()

  const columns = useMemo<ColumnDef<InvoiceTypeWithAction, any>[]>(
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
      columnHelper.accessor('id', {
        header: '#',
        cell: ({ row }) => (
          <Typography
            component={Link}
            href={getLocalizedUrl(`apps/invoice/preview/${row.original.id}`, locale as Locale)}
            color='primary'
          >{`#${row.original.id}`}</Typography>
        )
      }),
      columnHelper.accessor('invoiceStatus', {
        header: 'Status',
        cell: ({ row }) => (
          <Tooltip
            title={
              <div>
                <Typography variant='body2' component='span' className='text-inherit'>
                  {row.original.invoiceStatus}
                </Typography>
                <br />
                <Typography variant='body2' component='span' className='text-inherit'>
                  Balance:
                </Typography>
                {row.original.balance}
                <br />
                <Typography variant='body2' component='span' className='text-inherit'>
                  Due Date:
                </Typography>
                {row.original.dueDate}
              </div>
            }
          >
            <CustomAvatar skin='light' color={invoiceStatusObj[row.original.invoiceStatus].color} size={28}>
              <i className={classnames('bs-4 is-4', invoiceStatusObj[row.original.invoiceStatus].icon)} />
            </CustomAvatar>
          </Tooltip>
        )
      }),
      columnHelper.accessor('name', {
        header: 'Client',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            {getAvatar({ avatar: row.original.avatar, name: row.original.name })}
            <div className='flex flex-col'>
              <Typography className='font-medium' color='text.primary'>
                {row.original.name}
              </Typography>
              <Typography variant='body2'>{row.original.companyEmail}</Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('total', {
        header: 'Total',
        cell: ({ row }) => <Typography>{`$${row.original.total}`}</Typography>
      }),
      columnHelper.accessor('issuedDate', {
        header: 'Issued Date',
        cell: ({ row }) => <Typography>{row.original.issuedDate}</Typography>
      }),
      columnHelper.accessor('balance', {
        header: 'Balance',
        cell: ({ row }) => {
          return row.original.balance === 0 ? (
            <Chip label='Paid' color='success' size='small' variant='tonal' />
          ) : (
            <Typography color='text.primary'>{row.original.balance}</Typography>
          )
        }
      }),
      columnHelper.accessor('action', {
        header: 'Action',
        cell: ({ row }) => (
          <div className='flex items-center'>
            <IconButton>
              <i className='tabler-trash text-[22px] text-textSecondary' />
            </IconButton>
            <IconButton>
              <Link
                href={getLocalizedUrl(`apps/invoice/preview/${row.original.id}`, locale as Locale)}
                className='flex'
              >
                <i className='tabler-eye text-[22px] text-textSecondary' />
              </Link>
            </IconButton>
            <OptionMenu
              iconClassName='text-[22px] text-textSecondary'
              options={[
                {
                  text: 'Download',
                  icon: 'tabler-download text-[22px]',
                  menuItemProps: { className: 'flex items-center gap-2 text-textSecondary' }
                },
                {
                  text: 'Edit',
                  icon: 'tabler-pencil text-[22px]',
                  href: getLocalizedUrl(`apps/invoice/edit/${row.original.id}`, locale as Locale),
                  linkProps: {
                    className: 'flex items-center is-full plb-2 pli-4 gap-2 text-textSecondary'
                  }
                },
                {
                  text: 'Duplicate',
                  icon: 'tabler-copy text-[22px]',
                  menuItemProps: { className: 'flex items-center gap-2 text-textSecondary' }
                }
              ]}
            />
          </div>
        ),
        enableSorting: false
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const table = useReactTable({
    data: data as InvoiceType[],
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
        pageSize: 10
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

  const getAvatar = (params: Pick<InvoiceType, 'avatar' | 'name'>) => {
    const { avatar, name } = params

    if (avatar) {
      return <CustomAvatar src={avatar} skin='light' size={34} />
    } else {
      return (
        <CustomAvatar skin='light' size={34}>
          {getInitials(name as string)}
        </CustomAvatar>
      )
    }
  }

  useEffect(() => {
    const filteredData = invoiceData?.filter(invoice => {
      if (status && invoice.invoiceStatus.toLowerCase().replace(/\s+/g, '-') !== status) return false

      return true
    })

    setData(filteredData)
  }, [status, invoiceData, setData])

  return (
    <Card>
      <CardContent className='flex justify-between flex-col items-start md:items-center md:flex-row gap-4'>
        <div className='flex items-center justify-between gap-4'>
          <div className='flex items-center gap-2'>
            <Typography className='hidden sm:block'>Show</Typography>
            <CustomTextField
              select
              value={table.getState().pagination.pageSize}
              onChange={e => table.setPageSize(Number(e.target.value))}
              className='is-[70px]'
            >
              <MenuItem value='10'>10</MenuItem>
              <MenuItem value='25'>25</MenuItem>
              <MenuItem value='50'>50</MenuItem>
            </CustomTextField>
          </div>
          <Button
            variant='contained'
            component={Link}
            startIcon={<i className='tabler-plus' />}
            href={getLocalizedUrl('apps/invoice/add', locale as Locale)}
            className='is-full sm:is-auto'
          >
            Create Invoice
          </Button>
        </div>
        <div className='flex flex-col sm:flex-row is-full sm:is-auto items-start sm:items-center gap-4'>
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder='Search Invoice'
            className='is-[250px]'
          />
          <CustomTextField
            select
            id='select-status'
            value={status}
            onChange={e => setStatus(e.target.value)}
            className='is-[160px]'
            SelectProps={{ displayEmpty: true }}
          >
            <MenuItem value=''>Invoice Status</MenuItem>
            <MenuItem value='downloaded'>Downloaded</MenuItem>
            <MenuItem value='draft'>Draft</MenuItem>
            <MenuItem value='paid'>Paid</MenuItem>
            <MenuItem value='partial-payment'>Partial Payment</MenuItem>
            <MenuItem value='past-due'>Past Due</MenuItem>
            <MenuItem value='sent'>Sent</MenuItem>
          </CustomTextField>
        </div>
      </CardContent>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <>
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
                      </>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {table.getFilteredRowModel().rows.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                  No data available
                </td>
              </tr>
            </tbody>
          ) : (
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
          )}
        </table>
      </div>
      <TablePagination
        component={() => <TablePaginationComponent table={table} />}
        count={table.getFilteredRowModel().rows.length}
        rowsPerPage={table.getState().pagination.pageSize}
        page={table.getState().pagination.pageIndex}
        onPageChange={(_, page) => {
          table.setPageIndex(page)
        }}
        onRowsPerPageChange={e => table.setPageSize(Number(e.target.value))}
      />
    </Card>
  )
}

export default InvoiceListTable
