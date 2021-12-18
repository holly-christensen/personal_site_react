import "../styles.css";
// layout imports
import PostHeader from "../PostHeader";
// image imports
import { morseHeaderProps } from "../page-content/morse-content";
import React from "react";
import NavBar from "../NavBar";
import { navLightProps } from "../page-content/nav-content";

export default function MorsePage() {
  return (
    <React.Fragment>
      <NavBar color={navLightProps.color} />
      <div className={"background_light"}>
        {/* Page Header */}
        <PostHeader post={morseHeaderProps.post} />
      </div>{" "}
    </React.Fragment>
  );
}
