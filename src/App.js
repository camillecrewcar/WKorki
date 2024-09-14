import * as React from 'react';
import ResponsiveAppBar from './components/nav';
import './App.css';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

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

        <Container>
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight={3000}
            marginTop={7}
            href="#app-bar-with-responsive-menu"
            sx={{
              color: 'inherit',
            }}
          >
            Dołącz do nas i czerp przyjemność z nauki!
          </Typography>
        </Container>
      </div>
    </ThemeProvider>
  );
}
