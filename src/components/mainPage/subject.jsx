import * as React from 'react';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';

const theme = createTheme({
    palette: {
      primary: {
        main: '#E49378'
      }
    }
  });
function Subject() {
    return(

        <ThemeProvider theme={theme}>
            
            <Paper elevation={3} 
            sx={{width: 200,
                height: 200,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 4,
                borderColor: 'primary.main',
                flexDirection: 'column' }}>
                <CalculateRoundedIcon sx={{ fontSize: 120, color: "primary.main"}}></CalculateRoundedIcon>
                <h3>
                    Matematyka
                </h3>
            </Paper>
        </ThemeProvider>
    )
}
export default Subject;