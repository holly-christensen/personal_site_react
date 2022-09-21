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
    subheaders: ["What i'm up to"],
    bodies: [
      "I recently graduated from Northeastern University with a Bachelors of Science in Computer Science & Graphic Design. I'm currently available for Frontend Web Development, Software Engineering, and UI, UX, and Human Computer Interaction Engineer roles.",
    ],
  },
};
