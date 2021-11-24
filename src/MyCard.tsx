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
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export interface MyCardProps {
  imgPath: string;
  imgAlt: string;
  title: string;
}

export default function MyCard(props: MyCardProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          //   sx={{
          //     // 16:9
          //     // pt: "56.25%",
          //     pt: "0%",
          //   }}
          image={props.imgPath}
          //   image="https://source.unsplash.com/random"
          alt={props.imgAlt}
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" className={"card_title"}>
            {props.title}
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
