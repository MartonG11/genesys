import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { getCharacters } from '../api/axios'
import { Character } from '../types/Character'
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
    <div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search character..."
        />
        <button onClick={clearSearch} disabled={!searchTerm.length}>
          X
        </button>
      </div>
      <h2>Characters:</h2>
      {data?.results.map((character: Character) => (
        <div key={character.id}>
          <Link to={`/profile/${character.id}`}>
            <p>{character.name}</p>
          </Link>
        </div>
      ))}
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous Page
      </button>
      <button
        onClick={handleNextPage}
        disabled={data?.info.pages === currentPage}
      >
        Next Page
      </button>
      <h4>Current page: {currentPage}</h4>
    </div>
  )
}

export default Home
