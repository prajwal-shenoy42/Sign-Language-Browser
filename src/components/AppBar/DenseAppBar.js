import * as React from "react";
import { AppBar, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function DenseAppBar({ show,showCam }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Sign Language Detection
          </Typography>
          {show ? (
            <Button
              onClick={showCam}
              variant="contained"
              sx={{ marginLeft: "auto" }}
              color="success"
            >
              Close Camera
            </Button>
          ) : (
            <Button
              onClick={showCam}
              variant="contained"
              sx={{ marginLeft: "auto" }}
              color="success"
            >
              Open Camera
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
