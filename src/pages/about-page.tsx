import "../styles.css";
import { aboutTextImageSection } from "../page-content/about-content";
import TextImageSection from "../layouts/TextImageSection";

export default function AboutPage() {
  return (
    <div className={"background_dark"}>
      <TextImageSection post={aboutTextImageSection.post} />
    </div>
  );
}
