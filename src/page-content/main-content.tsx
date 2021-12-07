import { MainProps } from "../Main";
import { MyCardProps } from "../MyCard";
import typeCover from "../img/covers/type-cover.png";
import gdCover from "../img/covers/gd-cover.png";
import emuCover from "../img/covers/emu-cover.png";
import morseCover from "../img/covers/morse-cover.jpg";
import scoutCover from "../img/covers/scout-cover.png";
import freeCover from "../img/covers/free-cover.png";
import idCover from "../img/covers/id-cover.png";
import { COLORS, FA_ICONS } from "../consts";

export const typeCard: MyCardProps = {
  imgPath: typeCover,
  imgAlt: "Typography Card",
  title: "typography",
  titleColor: COLORS.DARK,
  linkAlt: "a link",
  linkPath: "/typography",
};
export const gdCard: MyCardProps = {
  imgPath: gdCover,
  imgAlt: "Graphic Design Card",
  title: "graphic design",
  titleColor: COLORS.DARK,
  linkAlt: "a link",
  linkPath: "/graphicdesign",
};

export const emuCard: MyCardProps = {
  imgPath: emuCover,
  imgAlt: "Emulate Card",
  title: "emulate co-op",
  titleColor: COLORS.DARK,
  linkAlt: "a link",
  linkPath: "/emulatecoop",
};

export const morseCard: MyCardProps = {
  imgPath: morseCover,
  imgAlt: "Morse Card",
  title: "MORSE co-op",
  titleColor: COLORS.LIGHT,
  linkAlt: "a link",
  linkPath: "/morsecoop",
};

export const scoutCard: MyCardProps = {
  imgPath: scoutCover,
  imgAlt: "Scout Card",
  title: "Scout",
  titleColor: COLORS.DARK,
  linkAlt: "a link",
  linkPath: "/scout",
};

export const freeCard: MyCardProps = {
  imgPath: freeCover,
  imgAlt: "Freelance Work Card",
  title: "Freelance Work",
  titleColor: COLORS.LIGHT,
  linkAlt: "a link",
  linkPath: "/freelancework",
};
export const idCard: MyCardProps = {
  imgPath: idCover,
  imgAlt: "Info Design Card",
  title: "Information Design & Visualization",
  titleColor: COLORS.LIGHT,
  linkAlt: "a link",
  linkPath: "/informationdesign",
};

export const mainProps: MainProps = {
  mainProps: {
    title: "holly lovejoy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet odio vitae mauris aliquet, nec interdum velit porta. Mauris ac malesuada sapien. Proin at odio vitae mi consequat volutpat vitae nec magna. Praesent lacinia ipsum eros, sit amet pellentesque felis molestie id. Vestibulum feugiat, mi cursus elementum consectetur, dui diam fringilla lorem, eget condimentum sem ex ut ante.",
    buttons: [
      {
        text: "GitHub",
        path: "https://github.com/holly-christensen",
        faIcon: FA_ICONS.GITHUB,
      },
      {
        text: "LinkedIn",
        path: "https://www.linkedin.com/in/hachristensen/",
        faIcon: FA_ICONS.LINKEDIN,
      },
      {
        text: "Email",
        path: "mailto:christensen.h@northeastern.edu",
        faIcon: FA_ICONS.EMAIL,
      },
    ],
    cards: [morseCard, emuCard, typeCard, gdCard, scoutCard, freeCard, idCard],
  },
};
