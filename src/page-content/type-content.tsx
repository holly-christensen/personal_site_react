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
    about: "This page shows a few of my projects from Typography I and II. ",
  },
};

// __________ SYSTEM __________
export const systemTextSection: TextSectionProps = {
  post: {
    header: "System Project",
    subheaders: [""],
    bodies: [
      "I designed a brochure for the Northeastern University College of Arts, Media, and Design, showcasing ten different artistic tracks. Each page includes a description, title, image, and page number. I focused on pacing, visual interest, and cohesion.",
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
    imgSize: "large",
    imgAlt: "Mahler Symphony Poster",
    caption: "Mahler Symphony Poster for Typography I",
    header: "Mahler Symphony Poster",
    subheaders: [""],
    bodies: [
      "In Typography I, I designed a poster for the Mahler Symphony No.9. The poster focuses on the relationships between type, image, and message.",
    ],
  },
};

export const mahlerFullImage: ImageFullProps = {
  post: {
    imgPath: mahler,
    fitToScreenHeight: true,
    imgAlt: "Mahler Symphony Poster",
    caption: "Mahler Symphony Poster for Typography I",
  },
};

// __________ STERLING RUBY __________

export const rubyTextImageSection: TextImageSectionProps = {
  post: {
    imgPath: ruby_final,
    imgSize: "large",
    imgAlt: "Sterling Ruby Exhibition Poster",
    caption: "Sterling Ruby Exhibition Poster for Typography I",
    header: "Sterling Ruby Exhibition Poster",
    subheaders: [" ", " "],
    bodies: [
      "In Typography II, I designed a potential exhibition poster for Sterling Ruby's exhibition at ICA / Boston. The exhibition critiques the structures of modernism and traditional institutions in the United States. It addresses the repressed underpinnings of U.S. culture and the coding of power and violence.",
      "My work was inspired by the following visual qualities of Sterling Ruby's artwork: polyurethane, layered paint, textured fabrics, etched lettering, collage, sculpture, ceramics, welding, quilting, and photography.",
    ],
  },
};

export const rubyFullImage: ImageFullProps = {
  post: {
    imgPath: ruby_final,
    fitToScreenHeight: true,
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
