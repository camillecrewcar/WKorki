import * as React from 'react';
import { Box, useMediaQuery, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Logo from '../../res/logo.png';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import PetsIcon from '@mui/icons-material/Pets';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Footer() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [openParent, setOpenParent] = React.useState(false);
  const [openStudent, setOpenStudent] = React.useState(false);

  const handleParentClick = () => {
    setOpenParent(!openParent);
  };

  const handleStudentClick = () => {
    setOpenStudent(!openStudent);
  };
  return (
    <Box className="footer" sx={{ backgroundColor: '#E49378', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 2 }}>
      <Grid container sx={{ display: 'flex', justifyContent: 'center'}}>
        <Grid item size={{lg: 3, sm: 5}} sx={{ display: { xs: 'none', sm: 'flex'}, alignItems: 'center', flexDirection: 'column'}}>
          <h1>Dla rodzica:</h1>
          <ul style={{ listStyleType: isMobile ? 'none' : 'disc', padding: 0 }}>
            <li>
              <Link underline="hover" color="inherit">Dysfunkcje</Link>
            </li>
            <li>
              <Link underline="hover" color="inherit">Niepełnosprawności</Link>
            </li>
            <li>
              <Link underline="hover" color="inherit">Kim jesteśmy</Link>
            </li>
            <li>
              <Link underline="hover" color="inherit">Ceny</Link>
            </li>
          </ul>
        </Grid>
        <List
          sx={{ width: '100%', display: { sx: 'block', sm: 'none'} }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleParentClick}>
            <ListItemIcon>
              <PetsIcon></PetsIcon>
            </ListItemIcon>
            <ListItemText primary="Dla rodzica" />
            {openParent ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openParent} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <Link underline="hover" color="inherit">
              <ListItemButton sx={{ pl: 4 }}>
              
                <ListItemIcon>
                  <FiberManualRecordIcon sx={{fontSize: 'small'}} />
                </ListItemIcon>
                <ListItemText primary="Dysfunkcje" />
              </ListItemButton>
              </Link>
              <Link underline="hover" color="inherit">
              <ListItemButton sx={{ pl: 4 }}>
              
                <ListItemIcon>
                  <FiberManualRecordIcon sx={{fontSize: 'small'}} />
                </ListItemIcon>
                <ListItemText primary="Niepełnosprawności" />
              </ListItemButton>
              </Link>
              <Link underline="hover" color="inherit">
              <ListItemButton sx={{ pl: 4 }}>
              
                <ListItemIcon>
                  <FiberManualRecordIcon sx={{fontSize: 'small'}} />
                </ListItemIcon>
                <ListItemText primary="Kim jesteśmy" />
              </ListItemButton>
              </Link>
              <Link underline="hover" color="inherit">
              <ListItemButton sx={{ pl: 4 }}>
              
                <ListItemIcon>
                  <FiberManualRecordIcon sx={{fontSize: 'small'}} />
                </ListItemIcon>
                <ListItemText primary="Ceny" />
              </ListItemButton>
              </Link>
            </List>
          </Collapse>
        </List>

        <Grid item size={{lg: 3, sm: 5}}  sx={{ display: { xs: 'none', sm: 'flex'}, alignItems: 'center', flexDirection: 'column'}}>
          <h1>Dla ucznia:</h1>
          <ul style={{ listStyleType: isMobile ? 'none' : 'disc', padding: 0 }}>
            <li>
              <Link underline="hover" color="inherit">Jak wygląda lekcja</Link>
            </li>
            <li>
              <Link underline="hover" color="inherit">Co wyniesiesz z lekcji</Link>
            </li>
          </ul>
        </Grid>

        <List
          sx={{ width: '100%', display: { sx: 'block', sm: 'none'} }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleStudentClick}>
            <ListItemIcon>
              <PetsIcon></PetsIcon>
            </ListItemIcon>
            <ListItemText primary="Dla ucznia" />
            {openStudent ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openStudent} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <Link underline="hover" color="inherit">
              <ListItemButton sx={{ pl: 4 }}>
              
                <ListItemIcon>
                  <FiberManualRecordIcon sx={{fontSize: 'small'}} />
                </ListItemIcon>
                <ListItemText primary="Jak wygląda lekcja" />
              </ListItemButton>
              </Link>
              <Link underline="hover" color="inherit">
              <ListItemButton sx={{ pl: 4 }}>
              
                <ListItemIcon>
                  <FiberManualRecordIcon sx={{fontSize: 'small'}} />
                </ListItemIcon>
                <ListItemText primary="Co wyniesiesz z lekcji" />
              </ListItemButton>
              </Link>
            </List>
          </Collapse>
        </List>

        <Grid item size={{lg: 3, sm: 5}}  sx={{ display: { xs: 'none', sm: 'flex'}, alignItems: 'center', flexDirection: 'column'}}>
          <h1>Kontakt:</h1>
          <ul style={{ listStyleType: isMobile ? 'none' : 'disc', padding: 0 }}>
            <li>
              Email: <Link underline="hover" color="inherit">wkorki@wp.pl</Link>
            </li>
            <li>
              Telefon: <Link underline="hover" color="inherit">+48 530 552 656</Link>
            </li>
          </ul>
        </Grid>

        <Grid item size={{lg: 3, sm: 5}}  sx={{ display: { xs: 'none', sm: 'flex'}, alignItems: 'center', flexDirection: 'column'}} >
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
        </Grid>
      </Grid>
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
