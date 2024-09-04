'use client'

// React Imports
import { useMemo, useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Checkbox from '@mui/material/Checkbox'

// Third-party Imports
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import type { ColumnDef } from '@tanstack/react-table'

// Type Imports
import type { DataType } from './data'

// Style Imports
import styles from '@core/styles/table.module.css'

// Data Imports
import defaultData from './data'

// Column Definitions
const columnHelper = createColumnHelper<DataType>()

const RowSelection = () => {
  // States
  const [rowSelection, setRowSelection] = useState({})
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(() => defaultData)

  // Hooks
  const columns = useMemo<ColumnDef<DataType, any>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <div className='flex items-center'>
            <Checkbox
              {...{
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: table.getToggleAllRowsSelectedHandler()
              }}
            />
          </div>
        ),
        cell: ({ row }) => (
          <div className='flex items-center'>
            <Checkbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler()
              }}
            />
          </div>
        )
      },
      columnHelper.accessor('fullName', {
        cell: info => info.getValue(),
        header: 'Name'
      }),
      columnHelper.accessor('email', {
        cell: info => info.getValue(),
        header: 'Email'
      }),
      columnHelper.accessor('start_date', {
        cell: info => info.getValue(),
        header: 'Date'
      }),
      columnHelper.accessor('experience', {
        cell: info => info.getValue(),
        header: 'Experience'
      }),
      columnHelper.accessor('age', {
        cell: info => info.getValue(),
        header: 'Age'
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    filterFns: {
      fuzzy: () => false
    }
  })

  return (
    <Card>
      <CardHeader title='Row Selection' />
      <div className='overflow-x-auto'>
        <table className={styles.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, 10)
              .map(row => {
                return (
                  <tr key={row.id} {...(row.getIsSelected() && { className: 'selected' })}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                    ))}
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default RowSelection
