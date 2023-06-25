import { Clear } from '@mui/icons-material'
import { Box, Button, IconButton, TextField } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'

import { getCharacters } from '../api/axios'
import TableComponent from '../components/Table'
import { Response } from '../types/Response'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)

  const { data, isLoading, isError, error } = useQuery<Response, Error>(
    ['characters', currentPage, searchTerm],
    () => getCharacters(currentPage, searchTerm),
    {
      keepPreviousData: true,
    }
  )

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const clearSearch = () => {
    setSearchTerm('')
  }

  const handlePrevPage = () => {
    setCurrentPage((prevPage: number) => prevPage - 1)
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage: number) => prevPage + 1)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {(error as Error).message}</div>
  }

  if (!data) {
    return <div>No data found</div>
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minWidth: '800px',
          mb: 1,
        }}
      >
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <TextField
            label="Search character..."
            variant="outlined"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            size="small"
          />
          <IconButton
            onClick={clearSearch}
            disabled={!searchTerm.length}
            aria-label="Clear"
          >
            <Clear />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            variant="contained"
          >
            Previous
          </Button>
          <Button
            onClick={handleNextPage}
            disabled={data?.info.pages === currentPage}
            variant="contained"
          >
            Next
          </Button>
        </Box>
      </Box>
      <Box sx={{ maxHeight: '600px', overflowY: 'scroll' }}>
        <TableComponent data={data.results} />
      </Box>
    </>
  )
}

export default Home
