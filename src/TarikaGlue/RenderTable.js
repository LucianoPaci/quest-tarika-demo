import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

export default function RenderTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>User ID</b>
            </TableCell>
            <TableCell align="center">
              <b>ID</b>
            </TableCell>
            <TableCell align="center">
              <b>Title</b>
            </TableCell>
            <TableCell align="center">
              <b>Body</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(data?.data || []).map((val, key) => (
            <TableRow
              key={val.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {val.userId}
              </TableCell>
              <TableCell align="center">{val.id}</TableCell>
              <TableCell align="center">{val.title}</TableCell>
              <TableCell align="center">{val.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
