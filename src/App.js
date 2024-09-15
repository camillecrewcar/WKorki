import * as React from 'react';
import ResponsiveAppBar from './components/nav';
import './App.css';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Girl from './res/happy_girl.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


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
          <Paper
            elevation={3}
            sx={{
              backgroundColor: '#e49278'
            }}>

            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, paddingTop: 2, paddingLeft: 2, paddingRight: 2}}>
              <Grid size={{sm: 12, md: 4}}>
              <Typography
                variant="h3"
                textAlign="center"
                fontWeight={3000}
                href="#app-bar-with-responsive-menu"
                sx={{
                  color: 'inherit',
                }}
              >
                Korepetycje dopasowane do twoich potrzeb
              </Typography>
              </Grid>
            
              <Grid size={4}  sx={{ display: { xs: 'none', md: 'flex'}, justifyContent: 'center'}} >
                <img
                  src={Girl}
                  alt="Logo"
                  style={{ height: 300, display: { xs: 'none', md: 'flex'}, marginRight: '8px' }}
                />
              </Grid>
              <Grid sx={{display: 'flex', justifyContent: 'center'}} size={{sm: 12, md: 4}}>
                <Typography
                  variant="h6"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    color: 'inherit',
                  }}
                >
                  <ul style={{ listStyle: 'none', paddingLeft: 0 }}> {/* Removing default bullet points */}
                    <li>
                      <CheckCircleIcon sx={{ color: 'white'}} /> Doświadczeni korepetytorzy
                    </li>
                    <li>
                      <CheckCircleIcon sx={{ color: 'white' }} /> Natychmiastowa poprawa ocen
                    </li>
                    <li>
                      <CheckCircleIcon sx={{ color: 'white'}} /> Elastyczne godziny zajęć
                    </li>
                    <li>
                      <CheckCircleIcon sx={{ color: 'white'}} /> Darmowa lekcja próbna
                    </li>
                  </ul>
                </Typography>

              </Grid>
            </Grid>
            
          </Paper>
        </Container>
      </div>
    </ThemeProvider>
  );
}
