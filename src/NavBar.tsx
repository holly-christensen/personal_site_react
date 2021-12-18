import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Link } from "react-router-dom";
import { COLORS } from "./consts";
import resumePdf from "./img/misc/lovejoy-resume-2021.pdf";

export interface NavBarProps {
  color: string;
}

export default function NavBar(props: NavBarProps) {
  const { color } = props;

  const backgroundColor =
    color === COLORS.LIGHT ? "background_light" : "background_dark";

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" elevation={0}>
        <Toolbar className={`nav-bar ${backgroundColor}`}>
          <Link to={"/"} className={`nav-bar_item`}>
            Portfolio
          </Link>
          {/* <Link to={"/about"} className={`nav-bar_item ${textColor}`}>
            About
          </Link> */}
          <a href={resumePdf} target={"_blank"} className={`nav-bar_item`}>
            Resume
          </a>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
