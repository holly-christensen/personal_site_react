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
    caption: "",
    header: "Hi, I'm Holly",
    body: "Recently, I worked on UI, UX, and interaction design as an intern at Emulate, Inc. I had the opportunity to work in a small team of product designers, software engineers, and mechanical engineers, to design user interfaces for web applications and a lab instrument. I currently do part-time freelance work. Much of my recent work has been with Timberrise, designing marketing and informational brochures, memos, and documents, as well as implementing Squarespace websites with custom HTML, CSS & JS. Previously, I've had the opportunity to work as a designer for Northeastern's student-led design studio Scout, conducting user experience research and designing a series of deliverables to improve the experience of ventures in Northeastern's venture accelerator. Check out my resume to see more.",
  },
};
