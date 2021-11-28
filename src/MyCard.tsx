import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export interface MyCardProps {
  title: string;
  imgPath: string;
  imgAlt: string;
  linkPath: string;
  linkAlt: string;
}

export default function MyCard(props: MyCardProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Link to={props.linkPath}>
        <Card className={"card"}>
          <CardMedia
            component="img"
            image={props.imgPath}
            alt={props.imgAlt}
            className={"card_media"}
          />
          <Typography variant="h6" className={"card_title"}>
            {props.title}
          </Typography>
        </Card>
      </Link>
    </ThemeProvider>
  );
}
