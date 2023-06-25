import { Box, Container } from '@mui/material'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Box sx={{ my: 2 }}>
        <img src="rick-and-morty.png" alt="rick and morty" />
      </Box>
      {children}
    </Container>
  )
}

export default Layout
