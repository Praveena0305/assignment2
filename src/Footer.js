import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './style.css';

const Footer = () => {
    return (
      <div className="footer">
        © {new Date().getFullYear()} NGO Events. All rights reserved.
      </div>
    );
  };
  
  export default Footer;
