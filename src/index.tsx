import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import MyCard, { MyCardProps } from "./MyCard";
import * as serviceWorker from "./serviceWorker";
import Album from "./Album";
import PostHeader, { PostHeaderProps } from "./PostHeader";
import image1 from "./img/headers/type-header.png";
import TextSection, { TextSectionProps } from "./layouts/TextSection";
import "./styles.css";
import TextImageSection, {
  TextImageSectionProps,
} from "./layouts/TextImageSection";
import ImageGallery, { ImageGalleryProps } from "./layouts/ImageGallery";
import ImageFull, { ImageFullProps } from "./layouts/ImageFull";
import TypographyPage from "./pages/type";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    h3: {
      fontSize: 40,
      fontFamily: [
        "Monotalic",
        "Karla",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
    h4: {
      marginBottom: 15,
    },
    h5: {
      fontSize: 17,
    },
    fontFamily: ["Open Sans", '"Helvetica Neue"', "Arial", "sans-serif"].join(
      ","
    ),
    fontSize: 11,
  },
});

ReactDOM.render(
  <React.Fragment>
    {/* <CssBaseline /> */}
    <ThemeProvider theme={theme}>
      <TypographyPage />
      {/* <Album /> */}
      {/* <PostHeader post={postHeaderProps.post} /> */}
      {/* <TextSection post={textSectionProps.post} /> */}
      {/* <TextImageSection post={textImageSectionProps.post} /> */}
      {/* <ImageGallery post={imageGalleryProps.post} /> */}
      {/* <ImageFull post={imageFullProps.post} /> */}
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
