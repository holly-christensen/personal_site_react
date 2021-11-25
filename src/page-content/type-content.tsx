// prop type imports
import { PostHeaderProps } from "../PostHeader";
import { TextSectionProps } from "../layouts/TextSection";
import { ImageGalleryProps } from "../layouts/ImageGallery";
import { ImageFullProps } from "../layouts/ImageFull";
import { TextImageSectionProps } from "../layouts/TextImageSection";
// image imports
import type_header from "../img/headers/type-header.png";
import system1 from "../img/type/system.png";
import system2 from "../img/type/system2.png";
import system3 from "../img/type/system3.png";
import system4 from "../img/type/system4.png";
import system5 from "../img/type/system5.png";
import system6 from "../img/type/system6.png";
import system7 from "../img/type/system7.png";
import system8 from "../img/type/system8.png";
import system9 from "../img/type/system9.png";
import system10 from "../img/type/system10.png";
import mahler from "../img/type/mahler.png";
import ruby_final from "../img/type/ruby-final.png";
import ruby_progress_1 from "../img/type/ruby-progress-1.png";
import ruby_progress_2 from "../img/type/ruby-progress-2.png";
import ruby_progress_3 from "../img/type/ruby-progress-3.png";
import ruby_work_1 from "../img/type/ruby-work-1.jpg";
import ruby_work_2 from "../img/type/ruby-work-2.png";
import ruby_work_3 from "../img/type/ruby-work-3.jpg";

export const typeHeaderProps: PostHeaderProps = {
  post: {
    title: "Typography",
    imgPath: type_header,
    imgAlt: "Typography header image.",
    role: "Student",
    what: "Typography I & II",
    when: "Sep 2019 – Nov 2021",
    tools: "Illustrator, Indesign",
    linkText: "",
    linkUrl: "#",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris mi, tristique quis odio vel, molestie iaculis enim. Aliquam ultrices turpis a lectus dignissim, id viverra dolor dapibus. Vestibulum eu quam commodo, luctus nunc sit amet, malesuada est. Nunc finibus laoreet magna vitae convallis. Nam accumsan libero ac libero aliquet, quis rhoncus odio iaculis. Nunc interdum odio ut diam vulputate, at faucibus nulla posuere. Sed neque massa, venenatis sit amet dapibus a, mattis sit amet felis.",
  },
};

// __________ SYSTEM __________
export const systemTextSection: TextSectionProps = {
  post: {
    header: "System Project",
    subheaders: [""],
    bodies: [
      "Design a brochure for the Northeastern University College of Arts, Media, and Design, showcasing ten different artistic tracks. Include a description, title, image, and page number. Focus on pacing and visual interest. Draw inspiration from Swedish and Dutch design.",
    ],
  },
};

export const systemGallery: ImageGalleryProps = {
  post: {
    imgPaths: [
      system1,
      system2,
      system3,
      system4,
      system5,
      system6,
      system7,
      system8,
      system9,
      system10,
    ],
    imgAlts: [
      "system1",
      "system2",
      "system3",
      "system4",
      "system5",
      "system6",
      "system7",
      "system8",
      "system9",
      "system10",
    ],
    captions: ["", "", "", "", "", "", "", "", "", ""],
  },
};

// __________ MAHLER __________
export const mahlerTextImageSection: TextImageSectionProps = {
  post: {
    imgPath: mahler,
    imgAlt: "Mahler Symphony Poster",
    caption: "Mahler Symphony Poster for Typography I",
    header: "Mahler Symphony Poster",
    body: "Design a poster for the Mahler Symphony No.9 as a means of communicating a musical event. Address critical relationships between type, image, and message at a larger scale. Use the following concepts: grid, type hierarchy, image, and color.",
  },
};

export const mahlerFullImage: ImageFullProps = {
  post: {
    imgPath: mahler,
    imgAlt: "Mahler Symphony Poster",
    caption: "Mahler Symphony Poster for Typography I",
  },
};

// __________ STERLING RUBY __________

export const rubyTextImageSection: TextImageSectionProps = {
  post: {
    imgPath: ruby_final,
    imgAlt: "Sterling Ruby Exhibition Poster",
    caption: "Sterling Ruby Exhibition Poster for Typography I",
    header: "Sterling Ruby Exhibition Poster",
    body: "In vel augue ornare, varius ligula et, posuere quam. Curabitur augue lacus, sagittis ac nisi ac, tincidunt feugiat sapien. Vestibulum a sem et turpis porttitor auctor. Phasellus a mauris vulputate, placerat lorem id, eleifend est. Fusce diam nibh, consectetur vitae sollicitudin a, scelerisque volutpat augue. Duis non pharetra diam, in vehicula ipsum.",
  },
};

export const rubyFullImage: ImageFullProps = {
  post: {
    imgPath: ruby_final,
    imgAlt: "Sterling Ruby Exhibition Poster",
    caption: "Sterling Ruby Exhibition Poster for Typography I",
  },
};

export const rubyWorkGallery: ImageGalleryProps = {
  post: {
    imgPaths: [ruby_work_1, ruby_work_2, ruby_work_3],
    imgAlts: [
      "Sterling Ruby's work",
      "Sterling Ruby's work",
      "Sterling Ruby's work",
    ],
    captions: ["Sterling Ruby's work from the 2021 ICA exhibition.", "", ""],
  },
};
export const rubyProgressGallery: ImageGalleryProps = {
  post: {
    imgPaths: [ruby_progress_1, ruby_progress_2, ruby_progress_3],
    imgAlts: ["Week 1 progress.", "Week 2 progress.", "Week 3 progress."],
    captions: ["Week 1 progress", "Week 2 progress", "Week 3 progress"],
  },
};
