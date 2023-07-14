import { Button, Container } from '@mantine/core';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LightBackgroundImage from './Images/LightmodeBackground.jpg';
import DarkBackgroundImage from './Images/background.jpg';
import { FooterBottom } from './components/Footer';
import { HeaderMiddle } from './components/Header';
import './media.css';

export const textColor = 'black'; 

export function App() {
  const headerLinks = [
    { link: '', label: 'Homepage' },
    { link: '/portfolio', label: 'Portfolio' }
  ];
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleBackgroundImage = () => {
    setIsLightMode((prevMode) => !prevMode);
  };
  
  const backgroundImage = isLightMode ? LightBackgroundImage : DarkBackgroundImage;

  const Is768px = window.innerWidth <= 768;

  return (
    <div className={Is768px ? 'media-query-styles' : ''} style={{ width: '99%', backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', position: 'absolute' }}>
      <HeaderMiddle links={headerLinks} />
      <Button style={{ backgroundColor: 'light' }} onClick={toggleBackgroundImage}>Dark | Light</Button>
      <Container size="xl">
        <Outlet />
      </Container>
      <FooterBottom />
    </div>
  );
}

export default App;
