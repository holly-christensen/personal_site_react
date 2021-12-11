// prop type imports
import { PostHeaderProps } from "../PostHeader";
import { TextSectionProps } from "../layouts/TextSection";
import { ImageGalleryProps } from "../layouts/ImageGallery";
// image imports
import gd_header from "../img/headers/gd-header.png";
import memorial1 from "../img/gd/numbers.jpg";
import memorial2 from "../img/gd/remember.jpg";
import memorial3 from "../img/gd/tower.jpg";
import memorial4 from "../img/gd/grate.jpg";
import memorial5 from "../img/gd/carnation.jpg";
import poster1 from "../img/gd/poster_1.png";
import poster2 from "../img/gd/poster_2.png";
import poster3 from "../img/gd/poster_3.png";
import germany from "../img/gd/germany.png";
import poland from "../img/gd/poland.png";
import norway from "../img/gd/norway.png";
import netherlands from "../img/gd/netherlands.png";
import france from "../img/gd/france.png";
import liloDark from "../img/gd/lilo_dark.png";
import liloLight from "../img/gd/lilo_light.png";
import { ImageFullProps } from "../layouts/ImageFull";

export const gdHeaderProps: PostHeaderProps = {
  post: {
    title: "Graphic Design",
    imgPath: gd_header,
    imgAlt: "Graphic Design header image.",
    role: "Student",
    what: "Graphic Design I & II, personal projects",
    when: "Sep 2019 – Nov 2021",
    tools: "Illustrator, Indesign",
    linkText: "",
    linkUrl: "#",
    about: [
      "This page shows a combination of personal projects and few of the graphic design projects that I have worked on in my courses over the past 2-3 years.",
    ],
  },
};

// __________ HOLOCAUST MEMORIAL __________
export const memorialTextSection: TextSectionProps = {
  post: {
    header: "Holocaust Memorial Project",
    subheaders: [""],
    bodies: [
      "I spent an hour at the New England Holocaust Memorial and documented my experience with photos and notes. This visit provided a foundation for the following poster and stamp systems.",
    ],
  },
};

export const memorialGallery: ImageGalleryProps = {
  post: {
    imgPaths: [memorial1, memorial2, memorial3, memorial4, memorial5],
    imgAlts: ["memorial1", "memorial2", "memorial3", "memorial4", "memorial5"],
    captions: [
      "",
      "",
      "",
      "",
      "The memorial reflects the idea of remembering the past while moving towards a better future. I created this illustration of barbed wire morphing into carnations (a symbol of hope and growth) with that idea in mind.",
    ],
  },
};

export const memorialPosterGallery: ImageGalleryProps = {
  post: {
    imgPaths: [poster1, poster2, poster3],
    imgAlts: ["poster1", "poster2", "poster3"],
    captions: ["Posters for the Jewish International Film Festival", "", ""],
  },
};

// __________ STAMPS __________

export const stampTextSection: TextSectionProps = {
  post: {
    header: "",
    subheaders: ["Holocaust Memorial Stamp System", ""],
    bodies: [
      "Each stamp represents one of the following countries: France, Germany, Poland, Norway, and the Netherlands. They incorporate line art of the country's national flower, as well as images of artwork from the country that was lost or stolen during the Holocaust.",
      "The stamps represent the beauty of the country and communicate how the lives lost during the Holocaust were invaluable and irreplaceable, much like the artwork that was stolen and destroyed.",
    ],
  },
};

export const stampGallery: ImageGalleryProps = {
  post: {
    imgPaths: [germany, poland, norway, netherlands, france],
    imgAlts: ["germany", "poland", "norway", "netherlands", "france"],
    captions: ["", "", "", "", ""],
  },
};

// __________ LILO __________

export const liloTextSection: TextSectionProps = {
  post: {
    header: "Song Cover Illustration",
    subheaders: ["", ""],
    bodies: [
      "Each stamp represents one of the following countries: France, Germany, Poland, Norway, and the Netherlands. They incorporate line art of the country's national flower, as well as images of artwork from the country that was lost or stolen during the Holocaust.",
      "The stamps represent the beauty of the country and communicate how the lives lost during the Holocaust were invaluable and irreplaceable, much like the artwork that was stolen and destroyed.",
    ],
  },
};

export const liloDarkFull: ImageFullProps = {
  post: {
    imgPath: liloDark,
    fitToScreenHeight: true,
    imgAlt: "Lilo dark version",
    caption: "",
  },
};
export const liloLightFull: ImageFullProps = {
  post: {
    imgPath: liloLight,
    fitToScreenHeight: true,
    imgAlt: "Lilo light version",
    caption: "",
  },
};
