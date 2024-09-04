'use client'

// React Imports
import { useEffect, useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// Third-party Imports
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import type { ColumnDef, Row, RowData, Column, Table } from '@tanstack/react-table'

// Type Imports
import type { DataType } from './data'

// Style Imports
import styles from '@core/styles/table.module.css'

// Data Imports
import defaultData from './data'

// Column Definitions
const columnHelper = createColumnHelper<DataType>()

const columns = [
  columnHelper.accessor('fullName', {
    header: 'Name'
  }),
  columnHelper.accessor('email', {
    header: 'Email'
  }),
  columnHelper.accessor('start_date', {
    header: 'Date'
  }),
  columnHelper.accessor('experience', {
    header: 'Experience'
  }),
  columnHelper.accessor('age', {
    header: 'Age'
  })
]

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void
  }
}

// Custom cell component that handles input with state and side-effects
interface EditableCellProps<TData extends RowData> {
  getValue: () => unknown
  row: Row<TData>
  column: Column<TData>
  table: Table<TData>
}

const EditableCell = <TData extends RowData>({ getValue, row, column, table }: EditableCellProps<TData>) => {
  // Vars
  const initialValue = getValue()

  // States
  const [value, setValue] = useState(initialValue)

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value)
  }

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <input value={value as string} onChange={e => setValue(e.target.value)} onBlur={onBlur} />
}

// Give our default column cell renderer editing superpowers!
const defaultColumn: Partial<ColumnDef<DataType>> = {
  cell: ({ getValue, row, column, table }) => {
    return <EditableCell getValue={getValue} row={row} column={column} table={table} />
  }
}

const EditableDataTables = () => {
  // States
  const [data, setData] = useState(() => defaultData)

  // Hooks
  const table = useReactTable({
    data,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    filterFns: {
      fuzzy: () => false
    },

    // Provide our updateData function to our table meta
    meta: {
      updateData: (rowIndex, columnId, value) => {
        setData(old =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex]!,
                [columnId]: value
              }
            }

            return row
          })
        )
      }
    }
  })

  return (
    <Card>
      <CardHeader title='Editable Table' />
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
                  <tr key={row.id}>
                    {row.getVisibleCells().map(cell => {
                      return (
                        <td key={cell.id} className={styles.cellWithInput}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default EditableDataTables
