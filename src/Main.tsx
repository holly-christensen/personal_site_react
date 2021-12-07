import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MyCard, { MyCardProps } from "./MyCard";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export interface MainProps {
  mainProps: {
    title: string;
    description: string;
    buttons: {
      text: string;
      path: string;
      faIcon: IconDefinition;
    }[];
    cards: MyCardProps[];
  };
}

export default function Main(props: MainProps) {
  const { mainProps } = props;
  const { title, description, buttons, cards } = mainProps;

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={"background_dark"}>
        {/* HERO UNIT*/}
        <Box className={"hero_box"}>
          <Container maxWidth="lg">
            {/* CENTER PAGE TITLE */}
            <Typography
              className="hero_title"
              component="h2"
              variant="h2"
              gutterBottom
            >
              {title}
            </Typography>

            {/* DESCRIPTION TEXT */}
            <Typography paragraph>{description}</Typography>

            {/* CTA BUTTONS */}
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="left"
            >
              {buttons.map((button) => {
                return (
                  <a href={button.path} target="_blank">
                    <FontAwesomeIcon
                      icon={button.faIcon}
                      size="2x"
                      className={"icon"}
                    />
                  </a>
                );
              })}
            </Stack>
          </Container>
        </Box>

        {/* GRID */}
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={6}>
                <MyCard
                  title={card.title}
                  titleColor={card.titleColor}
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
    </React.Fragment>
  );
}
