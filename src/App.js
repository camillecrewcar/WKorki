import * as React from 'react';
import ResponsiveAppBar from './components/global/nav';
import './App.css';
import HelloPost from './components/mainPage/helloPost';
import Subject from './components/mainPage/subject';

import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';



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
          <Grid container spacing={2}>
            <Grid size={2}>
              <Subject>

              </Subject>
            </Grid>
            <Grid size={4}>
            </Grid>
            <Grid size={4}>
            </Grid>
            <Grid size={8}>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}
