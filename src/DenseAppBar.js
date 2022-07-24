import * as React from 'react';
import { AppBar, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
//import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';


export default function DenseAppBar() {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Sign Language Detection
          </Typography>
          <Button variant="contained" sx={{marginLeft: "auto"}} color="success" href='/src/pages/cam/index.js'>
            Open Camera
          </Button>
        </Toolbar>
      </AppBar>
    </Box> 
  );
}
