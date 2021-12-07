import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import React from "react";

export interface MyCardProps {
  title: string;
  titleColor: string;
  imgPath: string;
  imgAlt: string;
  linkPath: string;
  linkAlt: string;
}

export default function MyCard(props: MyCardProps) {
  const classNameToUse =
    props.titleColor == "light" ? "text_light" : "text_dark";
  return (
    <React.Fragment>
      <CssBaseline />
      <Link to={props.linkPath}>
        <Card className={"card hvr-grow-shadow"}>
          <CardMedia
            component="img"
            image={props.imgPath}
            alt={props.imgAlt}
            className={"card_media"}
          />
          <Typography className={`card_title ${classNameToUse}`}>
            {props.title}
          </Typography>
        </Card>
      </Link>
    </React.Fragment>
  );
}
