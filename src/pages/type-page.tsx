import PostHeader from "../PostHeader";
import TextSection from "../layouts/TextSection";
import "../styles.css";
import ImageGallery from "../layouts/ImageGallery";
import {
  typeHeaderProps,
  systemTextSection,
  systemGallery,
  mahlerTextImageSection,
  rubyTextImageSection,
  rubyProgressGallery,
  rubyWorkGallery,
} from "../page-content/type-content";
import TextImageSection from "../layouts/TextImageSection";
import React from "react";
import NavBar from "../NavBar";
import { navLightProps } from "../page-content/nav-content";

export default function TypographyPage() {
  return (
    <React.Fragment>
      {" "}
      <NavBar color={navLightProps.color} />
      <div className={"background_light"}>
        {/* page header */}
        <PostHeader post={typeHeaderProps.post} />
        {/* sterling ruby */}
        <TextImageSection post={rubyTextImageSection.post} />
        <ImageGallery post={rubyWorkGallery.post} />
        <ImageGallery post={rubyProgressGallery.post} />
        {/* system */}
        <TextSection post={systemTextSection.post} />
        <ImageGallery post={systemGallery.post} />
        {/* mahler */}
        <TextImageSection post={mahlerTextImageSection.post} />
      </div>
    </React.Fragment>
  );
}
