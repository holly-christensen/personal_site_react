import "../styles.css";
// layout imports
import PostHeader from "../PostHeader";
import TextSection from "../layouts/TextSection";
import ImageGallery from "../layouts/ImageGallery";
import ImageFull from "../layouts/ImageFull";
// image imports
import {
  componentLibraryImageFull,
  emulateHeaderProps,
  groupsChips1ImageFull,
  groupsChips2ImageFull,
  infoCardsImageFull,
  infoCardsNotesImageFull,
  interactionsImageGallery,
  interactionTextSection,
  labUiTextSection,
  mockupsTextSection,
  newStudyModalImageFull,
  newStudyOverviewImageFull,
  siteOrganizationTextSection,
  stickyNotesImageFull,
  studyManagerTextSection,
  wireframesImageGallery,
  wireframesTextSection,
  workflowMapImageFull,
} from "../page-content/emulate-content";
import NavBar from "../NavBar";
import { navLightProps } from "../page-content/nav-content";
import React from "react";

export default function EmulatePage() {
  return (
    <React.Fragment>
      <NavBar color={navLightProps.color} />
      <div className={"background_light"}>
        {/* Page Header */}
        <PostHeader post={emulateHeaderProps.post} />
        {/* Lab UI */}
        <TextSection post={labUiTextSection.post} />
        <ImageFull post={workflowMapImageFull.post} />
        <ImageFull post={stickyNotesImageFull.post} />
        <TextSection post={wireframesTextSection.post} />
        <ImageGallery post={wireframesImageGallery.post} />
        <TextSection post={mockupsTextSection.post} />
        <ImageFull post={componentLibraryImageFull.post} />
        <TextSection post={interactionTextSection.post} />
        <ImageGallery post={interactionsImageGallery.post} />
        {/* Study Manager */}
        <TextSection post={studyManagerTextSection.post} />
        <ImageFull post={infoCardsImageFull.post} />
        <ImageFull post={infoCardsNotesImageFull.post} />
        <ImageFull post={newStudyModalImageFull.post} />
        <ImageFull post={newStudyOverviewImageFull.post} />
        <TextSection post={siteOrganizationTextSection.post} />
        <ImageFull post={groupsChips1ImageFull.post} />
        <ImageFull post={groupsChips2ImageFull.post} />
      </div>
    </React.Fragment>
  );
}
