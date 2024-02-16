'use client';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../app/shared/media/logo.svg';

// mui imports
import { Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import WineBarOutlinedIcon from '@mui/icons-material/WineBarOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';

const navLinks = [
  { id: '1', href: '/', name: 'Home', icon: <HomeOutlinedIcon /> },
  { id: '2', href: '/cocktails', name: 'Browse', icon: <WineBarOutlinedIcon /> },
  { id: '3', href: '/favourites', name: 'My list', icon: <FavoriteBorderOutlinedIcon /> },
  { id: '4', href: '/create', name: 'Add new', icon: <AddOutlinedIcon /> }
];

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 640px)');

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">
          <Image
            src={logo}
            width={40}
            height={40}
            alt="bartender shaker"
            priority={false}
          />
        </Link>
      </div>

      <div className={styles.header__aside}>
        {!isMobile && (
          <nav>
            {navLinks.map(link => (
              <Link key={link.id} href={link.href}>
                <Button startIcon={link.icon}>
                  {link.name}
                </Button>
              </Link>
            ))}

            <Link href="/signup">
              <Button variant="outlined">
                Sign Up
              </Button>
            </Link>
          </nav>
        )}

        {isMobile && (
          <Button onClick={toggleDrawer(true)} variant="outlined">
            Menu
          </Button>
        )}

        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
        >
          <List>
            {navLinks.map(link => (
              <Link key={link.id} href={link.href}>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      {link.icon}
                    </ListItemIcon>
                    <ListItemText primary={link.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}

            <ListItem>
              <ListItemButton>
                <ListItemText primary="Sign Up" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </div>
    </header>
  );
}
