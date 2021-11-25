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
import MyCard, { MyCardProps } from "./MyCard";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cardProps: MyCardProps = {
  imgPath: "https://source.unsplash.com/random",
  imgAlt: "a picture of something",
  title: "Title",
};

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* NAV BAR */}
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" className="nav_link" noWrap>
            Portfolio
          </Typography>
          <Typography variant="h6" color="inherit" className="nav_link" noWrap>
            About
          </Typography>
          <Typography variant="h6" color="inherit" className="nav_link" noWrap>
            Resume
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        {/* HERO UNIT*/}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            {/* CENTER PAGE TITLE */}
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>

            {/* DESCRIPTION TEXT */}
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>

            {/* CTA BUTTONS */}
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>

        {/* GRID */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <MyCard
                  imgAlt={cardProps.imgAlt}
                  imgPath={cardProps.imgPath}
                  title={card.toString()}
                  //   sx={{
                  //     height: "100%",
                  //     display: "flex",
                  //     flexDirection: "column",
                  //   }}
                ></MyCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
