
import { Container } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import './App.css'
import { HeaderMiddle } from './components/Header'

function App() {
  const headerLinks = [
    { link: '', label: 'About me' },
    { link: '/portfolio', label: 'Portfolio' },
  ]

  return (
    <div>
      <HeaderMiddle links={headerLinks}/>
      <Container size="xl">
        <Outlet />
      </Container>
    </div>
  )
}

export default App
