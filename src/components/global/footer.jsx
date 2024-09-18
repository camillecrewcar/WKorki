import * as React from 'react';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';



function Footer() {
  return (
      <Box className = "footer" sx = {{height: 600, backgroundColor: '#E49378', borderTopLeftRadius: 10, borderTopRightRadius: 10, display: 'flex', justifyContent: 'center', gap: 10}}>
        <Box>
          <h1>Dla rodzica:</h1>
            <ul>
              <li>
                <Link underline="hover" color='inherit'>Dysfunkcje</Link>
              </li>
              <li>
                <Link underline="hover" color='inherit'>Niepełnosprawności</Link>
              </li>
              <li>
                <Link underline="hover" color='inherit'>Ceny</Link>
              </li>
            </ul>
        </Box>
        <Box>
          <h1>Dla ucznia:</h1>
            <ul>
              <li>
              <Link underline="hover" color='inherit'>Jak wygląda lekcja</Link>
              </li>
              <li>
              <Link underline="hover" color='inherit'>Co wyniesiesz z lekcji</Link>
              </li>
            </ul>
        </Box>
        <Box>
          <h1>Kontakt:</h1>
            <ul>
              <li>
                Email: <Link underline="hover" color='inherit'>wkorki@wp.pl</Link>
              </li>
              <li>
                Telefon: <Link underline="hover" color='inherit'>+48 530 552 656</Link>
              </li>
            </ul>
        </Box>
      </Box>
  );
}


export default Footer;
