import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { COLORS } from "./consts";

export interface FooterProps {
  color: string;
}
export default function Footer(props: FooterProps) {
  const { color } = props;
  const backgroundColor =
    color === COLORS.LIGHT ? "background_light" : "background_dark";
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className={`footer_box ${backgroundColor}`}>
        <Typography className={"footer_text"} variant="subtitle2">
          Personally designed and developed
        </Typography>
      </Box>
    </React.Fragment>
  );
}
