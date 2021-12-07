// prop type imports
import { ImageFullProps } from "../layouts/ImageFull";

// image imports
import profile from "../img/misc/headshot_1.jpg";
import { TextImageSectionProps } from "../layouts/TextImageSection";

// __________ ABOUT __________

export const profileFull: ImageFullProps = {
  post: {
    imgPath: profile,
    imgAlt: "Profile photo",
    caption: "",
  },
};

export const aboutTextImageSection: TextImageSectionProps = {
  post: {
    imgPath: profile,
    imgAlt: "Profile image",
    imgSize: "small",
    caption: "",
    header: "Hi, I'm Holly",
    body: " Who I am... Integer maximus at nibh et cursus. Nullam maximus justo velit, eget elementum tortor elementum et. Sed id lobortis velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas congue magna eget ex suscipit, eget dapibus nisi cursus. Fusce risus orci, rhoncus quis ullamcorper quis, consectetur eget lectus. Phasellus varius tincidunt orci id hendrerit. Nunc vulputate dui vel ex cursus, pharetra rhoncus enim pellentesque.",
  },
};
