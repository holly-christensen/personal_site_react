import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MyCard, { MyCardProps } from "./MyCard";
import { Link } from "react-router-dom";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Holly Lovejoy
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

export interface MainProps {
  mainProps: {
    title: string;
    description: string;
    buttons: {
      text: string;
      path: string;
      faClasses: string;
    }[];
    cards: MyCardProps[];
  };
}

const theme = createTheme();

export default function Main(props: MainProps) {
  const { mainProps } = props;
  const { title, description, buttons, cards } = mainProps;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* NAV BAR */}
      <AppBar position="relative">
        <Toolbar>
          <Link to={"/"} className="nav_link">
            Portfolio
          </Link>
          <Link to={"/typography"} className="nav_link">
            Typography
          </Link>
          <Link to={"/"} className="nav_link">
            Resume
          </Link>
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
              className="main_name"
            >
              {title}
            </Typography>

            {/* DESCRIPTION TEXT */}
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              {description}
            </Typography>

            {/* CTA BUTTONS */}
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {buttons.map((button) => {
                return (
                  <Button variant="contained" href={button.path}>
                    {button.text}
                  </Button>
                );
              })}
            </Stack>
          </Container>
        </Box>

        {/* GRID */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <MyCard
                  title={card.title}
                  imgAlt={card.imgAlt}
                  imgPath={card.imgPath}
                  linkPath={card.linkPath}
                  linkAlt={card.linkAlt}
                ></MyCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Personally designed and developed
        </Typography>
        {/* <Copyright /> */}
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
