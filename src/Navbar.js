import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './style.css';
const Navbar = () => {
  return (
    <AppBar position="fixed"
    sx={{
        background:
       " linear-gradient(90deg, rgba(28,133,209,1) 7%, rgba(89,89,219,1) 42%, rgba(161,9,202,1) 81%, rgba(169,9,192,1) 98%)",
       display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '64px',
      }}>
      <Toolbar>
        <Typography variant="h5">NON-GOVERNMENTAL ORGANIZATION </Typography>
        
    
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
