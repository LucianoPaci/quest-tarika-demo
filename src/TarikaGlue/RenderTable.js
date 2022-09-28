import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function renderHeaders(data) {
  let header = Object.keys((data && data[0]) || {})
  return header.map((key, index) => {
    return (
      <TableCell align="left" key={index}>
        {key.toUpperCase()}
      </TableCell>
    )
  })
}

function renderValues(data) {
  return (data?.data || []).map((val, key) => {
    let values = Object.values(val)
    return (
      <TableRow
        key={val.key}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        {values.map((each, key) => {
          return (
            <TableCell key={key} component="th" scope="row">
              {JSON.stringify(each)}
            </TableCell>
          )
        })}
      </TableRow>
    )
  })
}

export default function RenderTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>{renderHeaders(data?.data)}</TableRow>
        </TableHead>
        <TableBody>{renderValues(data)}</TableBody>
      </Table>
    </TableContainer>
  )
}
