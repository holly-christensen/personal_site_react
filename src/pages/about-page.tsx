import "../styles.css";
import { aboutTextImageSection } from "../page-content/about-content";
import TextImageSection from "../layouts/TextImageSection";
import React from "react";
import NavBar from "../NavBar";
import { navLightProps } from "../page-content/nav-content";
import Footer from "../Footer";

export default function AboutPage() {
  return (
    <React.Fragment>
      <NavBar color={navLightProps.color} />
      <div className={"background_dark"}>
        <TextImageSection post={aboutTextImageSection.post} />
      </div>
      <Footer color={navLightProps.color} />
    </React.Fragment>
  );
}
