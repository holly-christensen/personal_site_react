// prop type imports
import { PostHeaderProps } from "../PostHeader";
import { TextSectionProps } from "../layouts/TextSection";
import { ImageGalleryProps } from "../layouts/ImageGallery";
import { ImageFullProps } from "../layouts/ImageFull";
// image imports
import scout_header from "../img/headers/scout-header.png";
import coach1 from "../img/scout/coach-1.png";
import coach2 from "../img/scout/coach-2.png";
import coach3 from "../img/scout/coach-3.png";
import coach4 from "../img/scout/coach-4.png";
import coach5 from "../img/scout/coach-5.png";
import gap1 from "../img/scout/gap-1.png";
import gap2 from "../img/scout/gap-2.png";
import gap3 from "../img/scout/gap-3.png";
import gap4 from "../img/scout/gap-4.png";
import gap5 from "../img/scout/gap-5.png";

export const scoutHeaderProps: PostHeaderProps = {
  post: {
    title: "Scout",
    imgPath: scout_header,
    imgAlt: "Scout header image",
    role: "UX Designer",
    what: "Designer at Northeastern's Design Studio",
    when: "Jan – April 2019",
    tools: "Illustrator, Indesign, Trello",
    linkText: "Research Report",
    linkUrl: "#",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris mi, tristique quis odio vel, molestie iaculis enim. Aliquam ultrices turpis a lectus dignissim, id viverra dolor dapibus. Vestibulum eu quam commodo, luctus nunc sit amet, malesuada est. Nunc finibus laoreet magna vitae convallis. Nam accumsan libero ac libero aliquet, quis rhoncus odio iaculis. Nunc interdum odio ut diam vulputate, at faucibus nulla posuere. Sed neque massa, venenatis sit amet dapibus a, mattis sit amet felis.",
  },
};
