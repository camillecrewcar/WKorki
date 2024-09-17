import * as React from 'react';
import ResponsiveAppBar from './components/global/nav';
import './App.css';
import HelloPost from './components/mainPage/helloPost';
import Subject from './components/mainPage/subject';

import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';
import ScienceIcon from '@mui/icons-material/Science';
import TranslateIcon from '@mui/icons-material/Translate';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
export default function App() {
  let theme = createTheme({
    typography: {
      h3: {
        fontFamily: 'Red Hat Display',
      },
    },
  });

  theme = responsiveFontSizes(theme); 

  return (
    <ThemeProvider theme={theme}>
      <div>
        <ResponsiveAppBar />
        <Container sx={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 6 }}>
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight={3000}
            href="#app-bar-with-responsive-menu"
            sx={{
              color: 'black',
            }}
          >
            Dołącz do nas i czerp przyjemność z nauki!
          </Typography>
          <HelloPost></HelloPost>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight={3000}
            href="#app-bar-with-responsive-menu"
            sx={{
              color: 'black',
            }}
          >
            Przedmioty których uczymy:
          </Typography>
          <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center' }} > 
            <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Subject icon={CalculateRoundedIcon} subject="Matematyka" />
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Subject icon={ScienceIcon} subject="Chemia" />
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Subject icon={TranslateIcon} subject="Angielski" />
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Subject icon={ComputerRoundedIcon} subject="Informatyka" />
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}
