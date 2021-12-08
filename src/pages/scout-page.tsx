import "../styles.css";
import PostHeader from "../PostHeader";
import TextSection from "../layouts/TextSection";
import TextImageSection from "../layouts/TextImageSection";
import ImageFull from "../layouts/ImageFull";
import ImageGallery from "../layouts/ImageGallery";
import {
  aboutTextSection,
  experienceMapImageFull,
  goGuideImageGallery,
  goStageTextSection,
  interviewsTextImageSection,
  readyGuideImageGallery,
  readyInfographicImageFull,
  readyStageTextSection,
  researchTextSection,
  scoutHeaderProps,
  setGuideImageGallery,
  setStageTextSection,
} from "../page-content/scout-content";

export default function ScoutPage() {
  return (
    <div className={"background_light"}>
      {/* page header */}
      <PostHeader post={scoutHeaderProps.post} />
      <TextSection post={aboutTextSection.post} />
      <TextSection post={researchTextSection.post} />
      <TextImageSection post={interviewsTextImageSection.post} />
      <TextSection post={readyStageTextSection.post} />
      <ImageFull post={readyInfographicImageFull.post} />
      <ImageFull post={experienceMapImageFull.post} />
      <ImageGallery post={readyGuideImageGallery.post} />
      <TextSection post={setStageTextSection.post} />
      <ImageGallery post={setGuideImageGallery.post} />
      <TextSection post={goStageTextSection.post} />
      <ImageGallery post={goGuideImageGallery.post} />
    </div>
  );
}
