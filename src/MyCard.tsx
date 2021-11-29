import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import React from "react";

export interface MyCardProps {
  title: string;
  imgPath: string;
  imgAlt: string;
  linkPath: string;
  linkAlt: string;
}

export default function MyCard(props: MyCardProps) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
