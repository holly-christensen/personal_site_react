import PostHeader from "../PostHeader";
import TextSection from "../layouts/TextSection";
import "../styles.css";
import ImageGallery from "../layouts/ImageGallery";
import {
  gdHeaderProps,
  liloLightFull,
  liloDarkFull,
  liloTextSection,
  memorialGallery,
  stampGallery,
  stampTextSection,
} from "../page-content/graphic-design-content";

import { memorialTextSection } from "../page-content/graphic-design-content";
import ImageFull from "../layouts/ImageFull";
import React from "react";
import NavBar from "../NavBar";
import { navLightProps } from "../page-content/nav-content";

export default function GraphicDesignPage() {
  return (
    <React.Fragment>
      <NavBar color={navLightProps.color} />
      <div className={"background_light"}>
        {/* page header */}
        <PostHeader post={gdHeaderProps.post} />
        {/* memorial system */}
        <TextSection post={memorialTextSection.post} />
        <ImageGallery post={memorialGallery.post} />
        <TextSection post={stampTextSection.post} />
        <ImageGallery post={stampGallery.post} />
        {/* lilo */}
        <TextSection post={liloTextSection.post} />
        <ImageFull post={liloDarkFull.post} />
        <ImageFull post={liloLightFull.post} />
      </div>
    </React.Fragment>
  );
}
