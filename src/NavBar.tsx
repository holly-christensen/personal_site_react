import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Link to={"/"} className="nav_link">
            Portfolio
          </Link>
          <Link to={"/about"} className="nav_link">
            About
          </Link>
          <Link to={"/resume"} className="nav_link">
            Resume
          </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
