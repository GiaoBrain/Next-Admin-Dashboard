// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

const CardActionsTable = () => {
  return (
    <Card>
      <CardHeader title='Card Actions' />
      <CardContent>
        <TableContainer>
          <Table className={tableStyles.table}>
            <TableHead>
              <TableRow>
                <TableCell>Action</TableCell>
                <TableCell>Icon</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Collapse</TableCell>
                <TableCell>
                  <i className='tabler-chevron-up text-xl' />
                </TableCell>
                <TableCell>Collapse card content using collapse action</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Refresh Content</TableCell>
                <TableCell>
                  <i className='tabler-refresh text-xl' />
                </TableCell>
                <TableCell>Refresh your card content using refresh action</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Remove Card</TableCell>
                <TableCell>
                  <i className='tabler-x text-xl' />
                </TableCell>
                <TableCell>Remove card from page using remove card action</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}

export default CardActionsTable
