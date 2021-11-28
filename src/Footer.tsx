import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography
          variant="subtitle2"
          align="center"
          color="text.secondary"
          component="p"
        >
          Personally designed and developed
        </Typography>
      </Box>
    </React.Fragment>
  );
}
