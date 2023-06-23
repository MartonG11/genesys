import { Avatar, Box, Button, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'

import { getSingleCharacter } from '../api/axios'
import InfoText from '../components/InfoText'
import Layout from '../components/Layout'
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
    <Layout>
      <Avatar
        src={profile.image}
        alt={profile.name}
        sx={{ width: 130, height: 130 }}
      />
      <Typography variant="h4" gutterBottom>
        {profile.name}
      </Typography>
      <Box sx={{ my: 2 }}>
        <InfoText title={'Gender'} text={profile.gender} />
        <InfoText title={'Species'} text={profile.species} />
        <InfoText title={'Type'} text={profile.type || 'N/A'} />
        <InfoText title={'Origin'} text={profile.origin.name} />
        <InfoText title={'Location'} text={profile.location.name} />
      </Box>
      <Button variant="contained" onClick={() => navigate('/')} size="medium">
        Back
      </Button>
    </Layout>
  )
}

export default Profile
