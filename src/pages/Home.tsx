import { useState } from 'react'
import { useQuery } from 'react-query'
import { getCharacters } from '../api/axios'

const Home = () => {
  const term = ''
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading, error } = useQuery(
    ['characters', currentPage, term],
    () => getCharacters(currentPage, term),
    {
      keepPreviousData: true,
    }
  )

  const handlePrevPage = () => {
    setCurrentPage((prevPage: number) => prevPage - 1)
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage: number) => prevPage + 1)
  }

  return (
    <div>
      <h2>Characters:</h2>
      {data.results.map((character: any) => (
        <p key={character.id}>{character.name}</p>
      ))}
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous Page
      </button>
      <button
        onClick={handleNextPage}
        disabled={data.info.pages === currentPage}
      >
        Next Page
      </button>
      <h4>Current page: {currentPage}</h4>
    </div>
  )
}

export default Home
