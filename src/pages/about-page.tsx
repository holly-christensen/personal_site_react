import "../styles.css";
import { aboutTextImageSection } from "../page-content/about-content";
import TextImageSection from "../layouts/TextImageSection";

export default function AboutPage() {
  return (
    <div>
      <TextImageSection post={aboutTextImageSection.post} />
    </div>
  );
}
