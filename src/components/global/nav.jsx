import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import '@fontsource/red-hat-display'; 


import Logo from '../../res/logo.png';


const pages = ['Jak to działa?', 'Ceny', 'Przedmioty', 'Kontkat'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="sticky"  sx={{ backgroundColor: '#E49378' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img
            src={Logo}
            alt="Logo"
            style={{ width: 40, height: 40, display: { xs: 'none', md: 'flex' }, marginRight: '8px' }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex' },
              fontFamily: 'Red Hat Display',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            W KORKI
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ fontFamily: 'Red Hat Display', textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Red Hat Display' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          
          <Box sx='display: flex'>
          <Button
            variant="outlined"
            color="success"
            sx={{
              marginRight: 1,
              my: 2,
              color: 'white',
              fontFamily: 'Red Hat Display',
              fontSize: { xs: '0.65rem', sm: '0.875rem'}
            }}
          >
            Logowanie
          </Button>
            <Button
              variant="outlined"
              color="success"
              sx={{ my: 2, color: 'white', fontFamily: 'Red Hat Display', fontSize: { xs: '0.65rem', sm: '0.875rem'} }}
              
            >
              Rejestracja
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;