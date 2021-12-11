// image imports
import profile from "../img/misc/headshot_1.jpg";
import { TextImageSectionProps } from "../layouts/TextImageSection";
import { SIZES } from "../consts";

// __________ ABOUT __________

export const aboutTextImageSection: TextImageSectionProps = {
  post: {
    imgPath: profile,
    imgAlt: "Profile image",
    imgSize: SIZES.SMALL,
    caption: "",
    header: "Hi, I'm Holly",
    subheaders: ["What i'm up to", "what i like"],
    bodies: [
      "I'm currently completing my final year studying Computer Science & Design at Northeastern University.",
    ],
  },
};
