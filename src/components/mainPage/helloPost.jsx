import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Girl from '../../res/happy_girl.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';

function HelloPost() {
    return(
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
                  <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                    <li  style={{ display: 'flex', alignItems: 'center', gap: 5}}>
                      <CheckCircleIcon sx={{ color: 'white'}} /> Doświadczeni korepetytorzy
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: 5}}>
                      <CheckCircleIcon sx={{ color: 'white' }} /> Poprawa pewności siebie
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: 5}}>
                      <CheckCircleIcon sx={{ color: 'white'}} /> Elastyczne godziny zajęć
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: 5}}>
                      <CheckCircleIcon sx={{ color: 'white'}} /> Darmowa lekcja próbna
                    </li>
                  </ul>
                </Typography>

              </Grid>
            </Grid>
            
          </Paper>
    )
}
export default HelloPost;