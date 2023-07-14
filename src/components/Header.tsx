import { ActionIcon, Burger, Container, Group, Header, Title, createStyles, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandGithub, IconBrandGmail, IconBrandInstagram } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from "react-router-dom";

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
      display: 'none',
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
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
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

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
    <Header style={{marginBottom:0}} height={56} mb={120}>
      <Container className={classes.inner}>
        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>
<Title style={{fontSize:'1.5rem'}}>Lucas Alfredsson</Title>
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
          <a href="https://www.instagram.com/lucasalfredsson/">
          <ActionIcon size="lg" >
            <IconBrandInstagram size="1.1rem" stroke={1.5} />
          </ActionIcon>
          </a>
        </Group>
      </Container>
      
    </Header>
  );
}