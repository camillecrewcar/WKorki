import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E49378'
    }
  }
});

function Subject({ icon: Icon, subject }) {
  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={3}
        sx={{
          width: 180,
          height: 180,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 2,
          borderColor: 'primary.main',
          flexDirection: 'column'
        }}
      >
        <Icon sx={{ fontSize: 100, color: "primary.main" }} />
        <h3>{subject}</h3>
      </Paper>
    </ThemeProvider>
  );
}

Subject.propTypes = {
  icon: PropTypes.elementType.isRequired, // Ensures that an icon component is passed
  subject: PropTypes.string.isRequired    // Ensures that a string is passed for the subject
};

export default Subject;
