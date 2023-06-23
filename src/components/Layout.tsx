import { Container } from '@mui/material'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      {children}
    </Container>
  )
}

export default Layout
