import * as React from 'react';
import { Grid2, useMediaQuery, Link, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Logo from '../../res/logo.png';

function Footer() {
  // Media query to check if the screen is small (mobile)
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box className="footer" sx={{ backgroundColor: '#E49378', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 2 }}>
      <Grid2 container sx={{ justifyContent: 'center', gap: 4 }}>
        {/* First Column: Dla rodzica */}
        <Grid2 xs={12} sm={6} md={3}>
          <h1>Dla rodzica:</h1>
          <ul style={{ listStyleType: isMobile ? 'none' : 'disc', padding: 0 }}>
            <li>
              <Link underline="hover" color="inherit">Dysfunkcje</Link>
            </li>
            <li>
              <Link underline="hover" color="inherit">Niepełnosprawności</Link>
            </li>
            <li>
              <Link underline="hover" color="inherit">Ceny</Link>
            </li>
          </ul>
        </Grid2>

        {/* Second Column: Dla ucznia */}
        <Grid2 xs={12} sm={6} md={3}>
          <h1>Dla ucznia:</h1>
          <ul style={{ listStyleType: isMobile ? 'none' : 'disc', padding: 0 }}>
            <li>
              <Link underline="hover" color="inherit">Jak wygląda lekcja</Link>
            </li>
            <li>
              <Link underline="hover" color="inherit">Co wyniesiesz z lekcji</Link>
            </li>
          </ul>
        </Grid2>

        {/* Third Column: Kontakt */}
        <Grid2 xs={12} sm={6} md={3}>
          <h1>Kontakt:</h1>
          <ul style={{ listStyleType: isMobile ? 'none' : 'disc', padding: 0 }}>
            <li>
              Email: <Link underline="hover" color="inherit">wkorki@wp.pl</Link>
            </li>
            <li>
              Telefon: <Link underline="hover" color="inherit">+48 530 552 656</Link>
            </li>
          </ul>
        </Grid2>

        {/* Fourth Column: Zaglądnij też tu */}
        <Grid2 xs={12} sm={6} md={3} >
          <h1>Zaglądnij też tu:</h1>
          <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
            <Link href="https://www.facebook.com/profile.php?id=61562963636507" target="_blank" sx={{ display: 'flex', alignItems: 'center' }} underline="hover" color="inherit">
              <FacebookIcon fontSize="large" /> W Korki
            </Link>
            <Link href="https://www.instagram.com/wkorki/" target="_blank" sx={{ display: 'flex', alignItems: 'center' }} underline="hover" color="inherit">
              <InstagramIcon fontSize="large" /> @wkorki
            </Link>
            <Link href="https://www.tiktok.com/@wkorki" target="_blank" sx={{ display: 'flex', alignItems: 'center' }} underline="hover" color="inherit">
              <MusicNoteIcon fontSize="large" /> wkorki
            </Link>
          </Box>
        </Grid2>
      </Grid2>

      <br />
      <hr />
      <br />

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, alignItems: 'center' }}>
        <Box sx={{ width: 80, height: 80, backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: 40, height: 40, display: { xs: 'none', md: 'flex' } }}
          />
        </Box>
        Copyright 2024 - Wkorki - All rights reserved.
      </Box>
    </Box>
  );
}

export default Footer;
