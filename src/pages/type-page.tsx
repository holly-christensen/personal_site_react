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

export default function TypographyPage() {
  return (
    <div className={"background_light"}>
      {/* page header */}
      <PostHeader post={typeHeaderProps.post} />
      {/* system */}
      <TextSection post={systemTextSection.post} />
      <ImageGallery post={systemGallery.post} />
      {/* mahler */}
      <TextImageSection post={mahlerTextImageSection.post} />
      {/* sterling ruby */}
      <TextImageSection post={rubyTextImageSection.post} />
      <ImageGallery post={rubyWorkGallery.post} />
      <ImageGallery post={rubyProgressGallery.post} />
    </div>
  );
}
