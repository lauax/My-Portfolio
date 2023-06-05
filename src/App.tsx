
import { Container } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import './App.css'
import { HeaderMiddle } from './components/Header'
import Portfolio from './pages/PortfolioPage'

function App() {
  const headerLinks = [
    { link: '', label: 'About me' },
    { link: '/portfolio', label: 'Portfolio' },
  ]

  return (
    <div>
      <HeaderMiddle links={headerLinks}/>
      <Container size="xl">
        <Portfolio/>
        <Outlet />
      </Container>
    </div>
  )
}

export default App
