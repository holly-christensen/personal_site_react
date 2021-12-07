import PostHeader from "../PostHeader";
import TextSection from "../layouts/TextSection";
import "../styles.css";
import ImageGallery from "../layouts/ImageGallery";
import { scoutHeaderProps } from "../page-content/scout-content";

import { memorialTextSection } from "../page-content/graphic-design-content";
import ImageFull from "../layouts/ImageFull";

export default function ScoutPage() {
  return (
    <div className={"background_light"}>
      <PostHeader post={scoutHeaderProps.post} />
    </div>
  );
}
