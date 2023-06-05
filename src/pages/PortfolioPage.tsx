import { Button, Card, Text } from '@mantine/core';

const projects = [
  {
    title: 'Quiz',
    description: 'Quiz spel välj mellan 3,5,7,10 frågor svarar du rätt på på mer än 50% får du glad smile annars en ledsen frågor är utmanad och kul för vänner och familj',
    link: 'quizzi-game.netlify.app',
  },
  {
    title: 'Star-bomb',
    description: 'Star-bomb är ett spel där du spelar 1 mot 1 och ska göra mål med bomberna eller få över bomberna på motståndarens sida innan dem sprängs de är roliga sound effects och bra musik',
    link: 'https://star-bomb.netlify.app/',
  },
  {
    title: 'Apple',
    description: 'En kopia på Apples hemsida',
    link: 'https://lauax.github.io/Apples-hemsida/',
  },
  {
    title: 'Chat-app',
    description: 'Chatta hemsida kopiera projekt för att se',
    link: 'https://github.com/lauax/socket-client-server.git',
  },
  {
    title: 'Step-up',
    description: 'Hemsida med databas för användare, produkter, ordrar samt en trevlig design',
    link: 'https://github.com/lauax/slutprojekt8-main',
  },
  {
    title: 'Shareigator',
    description: 'Följ readme filen i projektet. Det är en social platform med aligator tema ',
    link: 'https://github.com/plugga-tech/react-express-user-content-ts-ehg',
  },
];

const Portfolio = () => {
  return (
    <div>
      <Text size="xl" weight={700} style={{ marginBottom: '10px' }}>
        Your Name
      </Text>
      <Text size="sm" style={{ marginBottom: '20px' }}>
        Email: your.email@example.com | Phone: (123) 456-7890
      </Text>

      <div style={{ marginBottom: '30px' }}>
        <Text size="lg" weight={700} style={{ marginBottom: '5px' }}>
          Summary
        </Text>
        <Text size="sm">Your summary goes here.</Text>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <Text size="lg" weight={700} style={{ marginBottom: '5px' }}>
          Experience
        </Text>
        <Text size="md">Job Title, Company</Text>
        <Text size="sm" style={{ marginBottom: '10px' }}>
          Duration: Month Year - Month Year
        </Text>
        <ul style={{ marginLeft: '20px' }}>
          <li>Responsibility 1</li>
          <li>Responsibility 2</li>
          <li>Responsibility 3</li>
        </ul>
      </div>

      <div>
        <Text size="lg" weight={700} style={{ marginBottom: '10px' }}>
          Portfolio
        </Text>
        {projects.map((project, index) => (
          <Card key={index} shadow="xs" padding="lg" style={{ marginBottom: '20px' }}>
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
