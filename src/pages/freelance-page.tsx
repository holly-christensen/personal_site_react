import "../styles.css";
// layout imports
import PostHeader from "../PostHeader";
// image imports
import { freelancePostHeader } from "../page-content/freelance-content";
import React from "react";
import NavBar from "../NavBar";
import { navLightProps } from "../page-content/nav-content";
import Footer from "../Footer";

export default function FreelancePage() {
  return (
    <React.Fragment>
      <NavBar color={navLightProps.color} />
      <div className={"background_light"}>
        {/* Page Header */}
        <PostHeader post={freelancePostHeader.post} />
      </div>
      <Footer color={navLightProps.color} />
    </React.Fragment>
  );
}
