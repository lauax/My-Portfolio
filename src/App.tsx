
import { Button, Container } from '@mantine/core'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import LightBackgroundImage from './Images/LightmodeBackground.jpg'
import DarkBackgroundImage from './Images/background.jpg'
import { FooterBottom } from './components/Footer'
import { HeaderMiddle } from './components/Header'

function App() {
  const headerLinks = [
    { link: '', label: 'Homepage' },
    { link: '/portfolio', label: 'Portfolio' },
  ]
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleBackgroundImage = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  const backgroundImage = isLightMode ? LightBackgroundImage : DarkBackgroundImage;


  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', position:'absolute', width:'100vw' }}>
      <HeaderMiddle links={headerLinks}/>
      <Button onClick={toggleBackgroundImage}>Toggle Background Image</Button>
      <Container size="xl">
        <Outlet />
      </Container>
      <FooterBottom></FooterBottom>
      </div>
  )
}

export default App
