import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { Link } from 'react-router-dom'

import { Character } from '../types/Character'

const TableComponent = ({ data }: { data: Character[] }) => {
  return (
    <TableContainer component={Paper} sx={{ minWidth: '800px' }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="right">
              Species
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="center">
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((character: Character) => (
            <TableRow key={character.id}>
              <TableCell component="th" scope="row">
                <Avatar alt={character.name} src={character.image} />
              </TableCell>
              <TableCell>
                <Link to={`/profile/${character.id}`}>{character.name}</Link>
              </TableCell>
              <TableCell align="right">{character.species}</TableCell>
              <TableCell align="center">{character.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComponent
