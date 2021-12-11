// prop type imports
import { PostHeaderProps } from "../PostHeader";

// image imports
import morse_header from "../img/headers/morse-header.png";
import { TextSectionProps } from "../layouts/TextSection";

export const morseHeaderProps: PostHeaderProps = {
  post: {
    title: "MORSE Corp Co-op",
    imgPath: morse_header,
    imgAlt: "MORSE Corp header image",
    role: "Human-Computer Interaction Engineer",
    what: "Software Developer and UI Designer at MORSE Corp",
    when: "Jan – July 2021",
    tools: "React, Redux, Bitbucket, Jira, Sketch, InVision",
    linkText: "MORSE's Website",
    linkUrl: "https://www.morsecorp.com/",
    about: [
      "During my 7-month co-op at MORSE Corp, I worked on a complex React/Redux website, developing new features, providing bug fixes, increasing text coverage, and refactoring outdated code. I worked with the Esri ArcGIS map engine, as well as the Electron offline version of the application. I also used Sketch and InVision to design the UI for new product features and review them with the customer.",
      " My typical work involved assessing an issue, creating mockup designs in Sketch, iterating and improving them, and then fully implementing those designs in the product's code. I had the opportunity to take features all the way from inception to implementation.",
      " Due to the confidentiality of the product, I have not included any images or descriptions of the projects I worked on at MORSE.",
    ],
  },
};
