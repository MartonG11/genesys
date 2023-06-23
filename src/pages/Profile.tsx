import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleCharacter } from '../api/axios'
import { Character } from '../types/Character'

const Profile = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const {
    data: profile,
    isLoading,
    isError,
    error,
  } = useQuery<Character, Error>(['profile', id], () =>
    getSingleCharacter(Number(id))
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {(error as Error).message}</div>
  }

  if (!profile) {
    return <div>No data found for ID: {id}</div>
  }

  return (
    <div>
      <button onClick={() => navigate('/')}>Back</button>
      <h1>Profile</h1>
      <h3>name: {profile.name}</h3>
    </div>
  )
}

export default Profile
