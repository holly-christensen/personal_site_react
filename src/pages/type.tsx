import PostHeader from "../PostHeader";
import TextSection from "../layouts/TextSection";
import "../styles.css";
import ImageGallery from "../layouts/ImageGallery";
import ImageFull from "../layouts/ImageFull";
import {
  typeHeaderProps,
  systemTextSection,
  systemGallery,
  mahlerTextImageSection,
  mahlerFullImage,
  rubyTextImageSection,
  rubyFullImage,
  rubyProgressGallery,
  rubyWorkGallery,
} from "../page-content/type-content";
import TextImageSection from "../layouts/TextImageSection";

export default function TypographyPage() {
  return (
    <div>
      <PostHeader post={typeHeaderProps.post} />
      {/* system */}
      <TextSection post={systemTextSection.post} />
      <ImageGallery post={systemGallery.post} />
      {/* mahler */}
      <TextImageSection post={mahlerTextImageSection.post} />
      {/* <ImageFull post={mahlerFullImage.post} /> */}
      {/* ruby */}
      <TextImageSection post={rubyTextImageSection.post} />
      {/* <ImageFull post={rubyFullImage.post} /> */}
      <ImageGallery post={rubyWorkGallery.post} />
      <ImageGallery post={rubyProgressGallery.post} />
    </div>
  );
}
