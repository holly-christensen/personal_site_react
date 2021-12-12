import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" className={"background_dark"}>
        <Toolbar className={"nav-bar"}>
          <Link to={"/"} className={"nav-bar_item"}>
            Portfolio
          </Link>
          {/* <Link to={"/about"} className={"nav-bar_item"}>
            About
          </Link> */}
          <Link to={"/resume"} className={"nav-bar_item"}>
            Resume
          </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
