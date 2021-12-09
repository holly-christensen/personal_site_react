// prop type imports
import { PostHeaderProps } from "../PostHeader";
import { TextSectionProps } from "../layouts/TextSection";
import { ImageGalleryProps } from "../layouts/ImageGallery";
import { ImageFullProps } from "../layouts/ImageFull";
// image imports
import scout_header from "../img/headers/scout-header.png";
import { SIZES } from "../consts";
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
import persona from "../img/scout/persona.png";
import prototype1 from "../img/scout/prototype1.png";
import prototype2 from "../img/scout/prototype2.png";
import readyInfographic from "../img/scout/ready-infographic.png";
import experienceMap from "../img/scout/experience-map.png";
import { TextImageSectionProps } from "../layouts/TextImageSection";

export const scoutHeaderProps: PostHeaderProps = {
  post: {
    title: "Scout",
    imgPath: scout_header,
    imgAlt: "Scout header image",
    role: "UX Designer",
    what: "Designer at Northeastern's Design Studio",
    when: "Jan – April 2019",
    tools: "Illustrator, Indesign, Trello",
    linkText: "",
    linkUrl: "#",
    about: "",
  },
};

export const aboutTextSection: TextSectionProps = {
  post: {
    header: "Overview",
    subheaders: ["About", "Process", "Purpose", ""],
    bodies: [
      "During the Spring Semester of 2019, I was a member of Northeastern's student-led design studio Scout. I worked in a team of two other people, whose goal was to redesign the experience of students in IDEA, Northeastern's student-led venture accelerator. We used an agile process of conducting research, identifying pain points, designing solutions, and implementing those solutions as deliverables. We repeated this process for each of the three stages in IDEA: the Ready Stage, the Set Stage, and the Go Stage.",
      "As team members, we maintained close communication and held weekly meetings in which we critiqued each other's work and suggested possibilities for improvement. We also used this time to discuss what we had learned from interviews that week, and present the personas, journey maps, infographics, and anything else we had made during the week. We also met weekly with the client, where we presented the research and work we had done during the week, asked questions, set goals, and received feedback on the project direction.",
      "In the past 10 years of working with ventures, IDEA has reimagined and redesigned its venture accelerator process multiple times. The program, now much more streamlined, has little cohesion or clarity in its communication to ventures. Our team went into this project looking to find the major pain points of each stage, create relevant solution design, and ultimately design deliverables to better improve the venture process at IDEA.",
      "We decided to move through the process as a venture would. We first learned about the structure and flow of IDEA. Then we determined how to process and record our findings.",
    ],
  },
};

export const researchTextSection: TextSectionProps = {
  post: {
    header: "Research",
    subheaders: ["Ready Stage", "Set Stage", "Go Stage"],
    bodies: [
      "Throughout our investigation of the Ready Stage, our team attended the New Venture Orientation, the Ready Stage Workshop, Ready Stage Coaching Sessions, & several Ready Stage Pitches. We interviewed Ready Stage Ventures, Ready Stage Coaches, the Ready Stage Coordinator, the Director of Operations, and the IDEA Program Manager to locate the pain points of this stage. We created journey maps and personas for each round of interviews that we went through for the Ready, Set, and Go stages.",

      "Our research-gathering in the Set Stage involved attending the monthly Coaching Check-in and multiple Whiteboard Sessions/Set Stage Pitches. We interviewed a wide range of Set Stage Ventures, Set Stage Coaches, the IDEA Program Manager, the Set Stage Coordinator, the Entrepreneur-in-Residence, and the Community Lead. In particular, we focused on addressing coaching in this stage.",

      "In the Go stage, we interviewed a variety of Go Stage Ventures and Launched Stage Ventures, along with the Go Stage Coordinator, the Entrepreneur-in-Residence, and the Venture Mentor Network Associate Director.",
    ],
  },
};
export const interviewsTextImageSection: TextImageSectionProps = {
  post: {
    imgPath: persona,
    imgAlt: "Image of a persona for a Set Stage venture.",
    imgSize: SIZES.SMALL,
    caption:
      "Persona created from an interview with a venture in the Set Stage",
    header: "Interviews",
    body: "Our goals were to learn about how the venture journey works, discover ventures’ perspective on IDEA, understand what information gaps currently exist, learn how to design to resolve pain points, visualize and communicate the venture journey, and highlight the relationship between Scout & IDEA. Throughout the interviews, we sought to A) understand how they view the venture process and conceptualize the structure of IDEA, B) gain a better understanding of how they communicate with other ventures, IDEA coaches, and IDEA mentors and C) identify their biggest points of frustration and confusion.",
  },
};

export const readyStageTextSection: TextSectionProps = {
  post: {
    header: "Ready Stage Findings",
    subheaders: ["Pain Points", "Solution"],
    bodies: [
      "Lack of overall IDEA community\nLack of clarity in communicating available resources & stage purpose\nLittle venture engagement in mandatory stage-specific events\nMiscommunication to or lack of education for coaches\nOverloading of legal resources",

      "To resolve those pain points, we designed a Ready Stage Handbook, as well as a series of four How-To Guides. The handbook addressed the lack of clarity in communicating available resources and stage purpose, and the guides clarified key concepts that we found were often preventing ventures from moving forward in the process. Additionally, we renamed the “New Venture Orientation” as the “New Venture Information Session” and the “Ready Stage Workshop” as the “Ready Stage Orientation” to better reflect the purpose of the events.",
    ],
  },
};

export const readyInfographicImageFull: ImageFullProps = {
  post: {
    imgPath: readyInfographic,
    fitToScreenHeight: false,
    imgAlt:
      "An infographic depicting a loop that is segmented into each of the parts of the Ready Stage: New Venture Orientation, Ready Stage Workshop, Coaching Session, Value Proposition, Market Research, Customer Interviews, Minimum Viable Product, and Pitch.",
    caption:
      "An infographic I designed to show the cyclical/iterative structure of the Ready Stage.",
  },
};
export const experienceMapImageFull: ImageFullProps = {
  post: {
    imgPath: experienceMap,
    fitToScreenHeight: false,
    imgAlt:
      "An infographic depicting a loop that is segmented into each of the parts of the Ready Stage: New Venture Orientation, Ready Stage Workshop, Coaching Session, Value Proposition, Market Research, Customer Interviews, Minimum Viable Product, and Pitch.",
    caption:
      "An infographic I designed to show the cyclical/iterative structure of the Ready Stage.",
  },
};
export const readyGuideImageGallery: ImageGalleryProps = {
  post: {
    imgPaths: [prototype1, prototype2],
    imgAlts: ["", ""],
    captions: [
      "Venture-facing guide to help ventures understand how to create a prototype of their product. This guide is part of a set of four that cover the main pillars of the Ready Stage: Market Research, Prototype, User Interviews, and Value Proposition.",
      "",
    ],
  },
};

export const setStageTextSection: TextSectionProps = {
  post: {
    header: "Set Stage Findings",
    subheaders: ["Pain Points", "Solution"],
    bodies: [
      "Lack of coach engagement\nLack of venture engagement\nLack of support or professional development for coaches (in creating value of experience)\nNo clear expectations set by IDEA for ventures & coaches\nConfusion about Whiteboard Sessions & Set Stage Pitches\nLack of accessibility in resources\nLack of overall IDEA community",

      "To resolve those pain points, we created a venture-facing booklet and another coach-facing booklet to address the miscommunication on both sides. We included interactive goal-setting templates, as well as a guide to a first meeting between coach & venture. We helped IDEA set strict expectations and defined terms for this collaboration.",
    ],
  },
};

export const setGuideImageGallery: ImageGalleryProps = {
  post: {
    imgPaths: [coach1, coach2, coach3, coach4, coach5],
    imgAlts: ["", "", "", "", ""],
    captions: [
      "This venture facing guide helps ventures work with their coach efficiently and effectively. This is part of a pair of booklets. The other booklet is coach facing, to guide coaches while they work with ventures.",
      "",
      "",
      "",
      "",
    ],
  },
};

export const goStageTextSection: TextSectionProps = {
  post: {
    header: "Set Stage Findings",
    subheaders: ["Pain Points", "Solution"],
    bodies: [
      "Large confusion over Gap Funding: what constitutes a gap, what is eligible for funding, who makes decisions, etc.\nLack of venture engagement\nLack of information about the Venture Mentor Network given to ventures/lack of information about the progression of the network\nLack of clear direction\nLack of overall IDEA community",

      "We found that those who had not experienced success in pursuing the Gap funding option expressed frustration or anger with IDEA as a whole. Whether it involved the process, the people involved, or what eligibility looked like, it was clear there wasn’t much clarity to the ventures’ perspective. We looked through past case studies, specific notes from the Investment Committee, and venture feedback to create a guide to applying for the Gap Fund. This booklet covers the overview, process, examples, and pitch considerations necessary to gap.",
    ],
  },
};

export const goGuideImageGallery: ImageGalleryProps = {
  post: {
    imgPaths: [gap1, gap2, gap3, gap4, gap5],
    imgAlts: ["", "", "", "", ""],
    captions: [
      "This guide helps ventures navigate the Gap Fund application process and provides guidelines and tips from case studies. The Gap Fund awards up to $30,000 to ventures in increments no larger than $10,000 to a limited number of ventures in IDEA. In the past, the Gap Fund process has been a notorious pain point for ventures in IDEA.",
      "",
      "",
      "",
      "",
    ],
  },
};

export const summaryTextSection: TextSectionProps = {
  post: {
    header: "Summary",
    subheaders: ["Results", "Takeaways"],
    bodies: [
      "We found that IDEA primarily struggles with issues relating to communication, community, and clarity. These problems result from the individual approaches to and many fragmented changes that have occurred across IDEA as an organization. These specific issues are characteristic of a rapidly expanding organization with a high turnover rate. IDEA processes must be realigned and recommunicated in the coming years to maintain a smooth, engaging venture experience. To make future growth possible, creating a strong, yet flexible foundation is vital.",

      "This project was a valuable learning experience for me. Scout's teams usually create websites, brand images, and packaging design for startups, many of whom are ventures in IDEA. Our client was IDEA itself, which meant the project was open-ended and did not have a clear scope. Because of this, we frequently held meetings in which we assessed our scope and direction, and made changes to our short-term goals to align with the overall purpose of the project. It was necessary to establish a clear scope, direction, concrete goals in order to achieve a final product that was in line with what our client desired.",
    ],
  },
};
