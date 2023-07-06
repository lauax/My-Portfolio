import { Button, Card, Image, Text } from '@mantine/core';
import image2 from '../Images/Apple.jpg';
import image3 from '../Images/Catchat.jpg';
import image4 from '../Images/Quiz.jpg';
import image5 from '../Images/STEPUP.jpg';
import image6 from '../Images/Shareigator.jpg';
import image from '../Images/Starbomb.jpg';

const projects = [
  {
    title: 'Quiz',
    description: 'Quiz spel välj mellan 3,5,7,10 frågor svarar du rätt på på mer än 50% får du glad smile annars en ledsen frågor är utmanad och kul för vänner och familj',
    link: 'https://quizzi-game.netlify.app/',
    image: image4
  },
  {
    title: 'Star-bomb',
    description: 'Star-bomb är ett spel där du spelar 1 mot 1 och ska göra mål med bomberna eller få över bomberna på motståndarens sida innan dem sprängs de är roliga sound effects och bra musik',
    link: 'https://star-bomb.netlify.app/',
    image: image
  },
  {
    title: 'Apple',
    description: 'En kopia på Apples hemsida',
    link: 'https://lauax.github.io/Apples-hemsida/',
    image: image2
  },
  {
    title: 'Chat-app',
    description: 'Chatta hemsida kopiera projekt för att se',
    link: 'https://github.com/lauax/socket-client-server.git',
    image: image3
  },
  {
    title: 'Step-up',
    description: 'Hemsida med databas för användare, produkter, ordrar samt en trevlig design',
    link: 'https://github.com/lauax/slutprojekt8-main',
    image: image5
  },
  {
    title: 'Shareigator',
    description: 'Följ readme filen i projektet. Det är en social platform med aligator tema ',
    link: 'https://github.com/plugga-tech/react-express-user-content-ts-ehg',
    image: image6
  },
];

const Portfolio = () => {
  return (
    <div style={{marginTop:'1rem' }}>
      <div style={{margin:'auto' }}>
        {projects.map((project, index) => (
          <Card key={index} shadow="xs" padding="lg" style={{ marginBottom: '20px' }}>
            <Image src={project.image} alt={project.title} height={200} style={{ marginBottom: '10px' }} />
            <Text size="lg" weight={700} style={{ marginBottom: '5px' }}>
              {project.title}
            </Text>
            <Text size="sm" style={{ marginBottom: '10px' }}>
              {project.description}
            </Text>
            <Button component="a" href={project.link} target="_blank" variant="light">
              {project.link}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
