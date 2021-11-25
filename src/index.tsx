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

const postHeaderProps: PostHeaderProps = {
  post: {
    title: "Title",
    imgPath: image1,
    imgAlt: "alt text!",
    role: "role!",
    what: "what",
    when: "when",
    tools: "toolz",
    linkText: "a link!",
    linkUrl: "#",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante enim, pulvinar et massa et, pulvinar finibus erat. Maecenas porttitor pellentesque ante non tempus. Aenean nulla odio, efficitur a nisl ut, viverra posuere lectus. Quisque pulvinar dictum justo quis dignissim. Donec sit amet nulla accumsan, laoreet odio vitae, tristique erat. Pellentesque euismod sodales mollis. Sed rutrum congue pretium. Vestibulum pharetra convallis nisl. Duis a urna luctus, tempus sapien non, bibendum erat. Suspendisse massa velit, molestie non consectetur id, rutrum et metus. Integer pellentesque condimentum nisl, quis pulvinar massa rhoncus sed. Sed in posuere nulla, ut sodales mauris. In auctor nulla in velit iaculis, ac gravida nisl rhoncus. Donec nec porttitor nisl. Sed quis nibh elementum, maximus tortor eget, convallis est. Sed in posuere nulla, ut sodales mauris. In auctor nulla in velit iaculis, ac gravida nisl rhoncus. Donec nec porttitor nisl. Sed quis nibh elementum, maximus tortor eget, convallis.",
  },
};
const textSectionProps: TextSectionProps = {
  post: {
    header: "Section title",
    subheaders: ["header1", "header2", "header3"],
    bodies: [
      "Integer pellentesque condimentum nisl, quis pulvinar massa rhoncus sed.",
      "Sed quis nibh elementum, maximus tortor eget, convallis est. Sed in posuere nulla, ut sodales mauris.",
      "Quisque pulvinar dictum justo quis dignissim. Donec sit amet nulla accumsan, laoreet odio vitae, tristique erat. Pellentesque euismod sodales mollis.",
    ],
  },
};
const textImageSectionProps: TextImageSectionProps = {
  post: {
    imgPath: image1,
    imgAlt: "alt text!",
    caption: "this is a caption!!",
    header: "Section title",
    body: "Integer pellentesque condimentum nisl, quis pulvinar massa rhoncus sed. Sed quis nibh elementum, maximus tortor eget, convallis est. Sed in posuere nulla, ut sodales mauris. Quisque pulvinar dictum justo quis dignissim. Donec sit amet nulla accumsan, laoreet odio vitae, tristique erat. Pellentesque euismod sodales mollis.",
  },
};
const imageGalleryProps: ImageGalleryProps = {
  post: {
    imgPaths: [image1, image1, image1],
    imgAlts: ["alt text!", "sadfsf", "asdfas"],
    captions: ["this is a caption!!", "asefasdfsadf", "asfasdfasdfadsf"],
  },
};

const imageFullProps: ImageFullProps = {
  post: {
    imgPath: image1,
    imgAlt: "asdfasdfasdfsdfsdf",
    caption: "asdfsdfasfsdfasdfsdfsdfdsfdsfsdfsdf sdfsd",
  },
};

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <TypographyPage />
    {/* <Album /> */}
    {/* <PostHeader post={postHeaderProps.post} /> */}
    {/* <TextSection post={textSectionProps.post} /> */}
    {/* <TextImageSection post={textImageSectionProps.post} /> */}
    {/* <ImageGallery post={imageGalleryProps.post} /> */}
    {/* <ImageFull post={imageFullProps.post} /> */}
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
