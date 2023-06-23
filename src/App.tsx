import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
