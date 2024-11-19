import React from 'react';
import { Box, useMediaQuery, Link, Card, Button } from '@mui/material';
import Girl from '../src/res/thumbs_up_girl.png';


export default function MathPage() {
  return (
    <Box sx={{display: 'flex', gap: 5, flexDirection: 'column'}}>
      <Card elevation={3} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#e49278'}}>
      <Box sx={{padding: 5}}>
        <h1>Matematyka</h1>
        <h2>Zakres nauczania:</h2>
        <ul>
          <li>szkoła podstawowa</li>
          <li>szkoła śrdenia na poziomie podstawowym</li>
          <li>szkoła średnia na poziomie rozszerzonym</li>
        </ul>
      </Box>
      <img
        src={Girl}
        alt="Logo"
        style={{ height: 300, display: { xs: 'none', md: 'flex'}, marginRight: '8px' }}
      />
      </Card>
      <Box sx={{textAlign:'center'}}>
        <p>Skontaktuj się z nami i razem zrealizujmy twój cel w nauce tego przedmiotu! Zwiększ pewność siebie, pracuj z doświadczonymi korepetytorami i czerp przyjemność z zajęć online, już teraz umów się na darmową lekcję próbną z przedmiotu: Matematyka</p>
        <Button>
          Darmowa lekcja próbna
        </Button>
      </Box>

    </Box>
  );
}
