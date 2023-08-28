import { ActionIcon, Container, Group, Header, Title, createStyles, rem } from '@mantine/core';
import { IconBrandGithub, IconBrandGmail } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rem(56),

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: rem(260),

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(4)} ${rem(6)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}

export function HeaderMiddle({ links }: HeaderMiddleProps) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      to={link.link}
      key={link.label}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));



  return (
    <Header style={{ marginBottom: 0 }} height={56} mb={120}>
      <Container className={classes.inner}>
          <Group className={classes.links}  spacing={5}>
            {items}
          </Group>
          <Title className='title' style={{ fontSize: '1.5rem', color: 'black' }}>Lucas Alfredsson</Title>
        <Group spacing={0} className={classes.social} position="right" noWrap>
          <a href="mailto:lucas12alfredsson@gmail.com">
            <ActionIcon size="lg">
              <IconBrandGmail size="1.1rem" stroke={1.5} />
            </ActionIcon>
          </a>
          <a href="https://github.com/lauax">
            <ActionIcon size="lg">
              <IconBrandGithub size="1.1rem" stroke={1.5} />
            </ActionIcon>
          </a>
        </Group>
      </Container>
    </Header>
  );
}
