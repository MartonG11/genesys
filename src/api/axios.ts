import axios from 'axios'

export const client = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/character',
})

export const getCharacters = async (page = 1, term?: string) => {
  const response = await client.get(`?page=${page}&name=${term}`)

  return response.data
}

export const getSingleCharacter = async (id: number) => {
  const response = await client.get(`/${id}`)

  return response.data
}
