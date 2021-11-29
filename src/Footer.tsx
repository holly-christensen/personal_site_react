import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className={"footer_box background_dark"}>
        <Typography className={"footer_text"} variant="subtitle2">
          Personally designed and developed
        </Typography>
      </Box>
    </React.Fragment>
  );
}
