// prop type imports
import { PostHeaderProps } from "../PostHeader";
import { TextSectionProps } from "../layouts/TextSection";
import { ImageGalleryProps } from "../layouts/ImageGallery";
import { ImageFullProps } from "../layouts/ImageFull";
import { TextImageSectionProps } from "../layouts/TextImageSection";
import { SIZES } from "../consts";

// image imports
import emulate_header from "../img/headers/emu-header.png";
import loginAdmin from "../img/emulate/study-mgr/login_admin.png";
import loginDa from "../img/emulate/study-mgr/login_da.png";
import loginSm from "../img/emulate/study-mgr/login_sm.png";
import smBrainstorm from "../img/emulate/study-mgr/sm_brainstorm.png";
import smFlow from "../img/emulate/study-mgr/sm_flow.png";
import smGroups1 from "../img/emulate/study-mgr/sm_groups_1.png";
import smGroups2 from "../img/emulate/study-mgr/sm_groups_2.png";
import smGroups3 from "../img/emulate/study-mgr/sm_groups_3.png";
import smInfoCards from "../img/emulate/study-mgr/sm_info_cards.png";
import smInfoCardsNotes from "../img/emulate/study-mgr/sm_info_cards_notes.png";
import smNewStudy from "../img/emulate/study-mgr/sm_new_study.png";
import smOverview1 from "../img/emulate/study-mgr/sm_overview_1.png";
import smOverview2 from "../img/emulate/study-mgr/sm_overview_2.png";
import smTimelineIteration from "../img/emulate/study-mgr/sm_timeline_iteration.png";
import uiMap from "../img/emulate/zoe-ui/full_ui_map_1.png";
import stickyNotes from "../img/emulate/zoe-ui/sticky_notes_1.jpg";
import status1 from "../img/emulate/zoe-ui/zoe_status_1.png";
import status2 from "../img/emulate/zoe-ui/zoe_status_2.png";
import status3 from "../img/emulate/zoe-ui/zoe_status_3.png";
import settings from "../img/emulate/zoe-ui/zoe_settings.png";
import componentLibrary from "../img/emulate/zoe-ui/ui_components.png";
import alerts from "../img/emulate/zoe-ui/ui_alerts.png";
import beginEmu from "../img/emulate/zoe-ui/ui_begin_emu.png";
import zoeSettings from "../img/emulate/zoe-ui/ui_settings.png";

export const emulateHeaderProps: PostHeaderProps = {
  post: {
    title: "Emulate Co-op",
    imgPath: emulate_header,
    imgAlt: "Emulate header image",
    role: "UI & UX Designer",
    what: "Designer at Emulate, a biotech company in Cambridge",
    when: "Jan – June 2020",
    tools: "Sketch, Jira",
    linkText: "Emulate's Website",
    linkUrl: "https://emulatebio.com/",
    about:
      "During Spring 2020, I worked as an Interaction Design Co-op at Emulate, Inc. Working in small teams, I designed a proposed UI design system for a new cell-culture lab instrument UI, including UI components, layout standards, detailed mockups, and user flow diagrams. To guide the design process and form requirements, I conducted small-scale UX research through observation, contextual inquiry, and surveys, as well as small-scale user testing with a semi-functional UI prototype.\nIn addition to my work on the lab instrument UI, I designed new features and regular usability fixes and for Emulate’s experiment management software by applying user feedback and implementing project goals.",
  },
};

export const labUiTextSection: TextSectionProps = {
  post: {
    header: "Lab Instrument UI",
    subheaders: ["Interviews & Observation", "User Workflows"],
    bodies: [
      "To understand the wants, needs, behaviors, and values of the scientists who will be using the new lab instrument, we conducted semi-structured interviews, observations, contextual inquiries, and surveys. We observed scientists as they conducted research using the existing model of the lab instrument. From this research, we identified a set of requirements for the new instrument UI.",

      "After gathering requirements, we mapped out the different ways in which a user could interact with the instrument. Our goal was to identify every task that users should be able to complete on the instrument, and determine the steps and interactions the user would make to accomplish each task.",
    ],
  },
};

export const workflowMapImageFull: ImageFullProps = {
  post: {
    imgPath: uiMap,
    imgAlt: "A workflow map of the user interface for a new lab instrument.",
    caption:
      "An intermediate version of the full instrument workflow map that I created, which details the interactions for all tasks users can complete on the instrument.",
    fitToScreenHeight: false,
  },
};

export const stickyNotesImageFull: ImageFullProps = {
  post: {
    imgPath: stickyNotes,
    imgAlt: "A photograph of sticky notes on a large printed workflow map.",
    caption: "Feedback from the team after a workflow review meeting",
    fitToScreenHeight: false,
  },
};

export const wireframesTextSection: TextSectionProps = {
  post: {
    header: "",
    subheaders: ["Wireframes"],
    bodies: [
      "In this stage, I created and iterated on wireframes for the lab instrument UI. These wireframes were regularly shared with team members and potential users to ensure that information was displayed in a format that was logical to the scientists who would be using the instrument. I coordinated with mechanical and software engineers to discuss implementation details and constraints. I also developed a semi-functional prototype and conducted small-scale user testing with potential users. Their feedback was used to refine the design, functionality, and workflows of the user interface.",
    ],
  },
};

export const wireframesImageGallery: ImageGalleryProps = {
  post: {
    imgPaths: [status1, status2, status3, settings],
    imgAlts: [
      "Image of the first iteration of a wireframe for the instrument's status screen.",
      "Image of the second iteration of a wireframe for the instrument's status screen.",
      "Image of the third iteration of a wireframe for the instrument's status screen.",
      "Image of a wireframe for the instrument's settings screen.",
    ],
    captions: [
      "The first wireframe iteration of the instrument's status screen.",
      "The second wireframe iteration of the instrument's status screen.",
      "The third wireframe iteration of the instrument's status screen.",
      "An iteration of the instrument's settings screen.",
    ],
  },
};

export const mockupsTextSection: TextSectionProps = {
  post: {
    header: "",
    subheaders: ["Components & Mockups"],
    bodies: [
      "After refining the UI wireframes, I designed a library of components to be used on the instrument UI, based on Emulate's existing design library. The interface is divided into four distinct sections to simplify implementation and allow for future additions.",
    ],
  },
};

export const componentLibraryImageFull: ImageFullProps = {
  post: {
    imgPath: componentLibrary,
    imgAlt: "An image of numerous UI components in a Sketch library.",
    caption: "A section of the UI component library in Sketch.",
    fitToScreenHeight: false,
  },
};

export const interactionTextSection: TextSectionProps = {
  post: {
    header: "",
    subheaders: ["Interactions"],
    bodies: [
      "Additionally, I mapped out interaction details for the UI components, such as how the user would edit fields, clear alerts, and navigate menus with the instrument's rotary click-wheel.",
    ],
  },
};

export const interactionsImageGallery: ImageGalleryProps = {
  post: {
    imgPaths: [alerts, beginEmu, zoeSettings],
    imgAlts: [
      "Image of 14 different screens illustrating the instrument's alert processes.",
      "Image of 8 different screens illustrating the instrument's most common workflow.",
      "Image of 11 different screens illustrating the user's interactions with the screen using the instrument's click-wheel.",
    ],
    captions: [
      "Interactions for viewing and closing alerts on the instrument.",
      "Interaction details for beginning cycles on the instrument.",
      "Interactions for editing settings and detail about how the user will use the instrument's click-wheel to navigate the UI.",
    ],
  },
};

export const studyManagerTextSection: TextSectionProps = {
  post: {
    header: "Experiment Management Software",
    subheaders: ["Research", "Solutions"],
    bodies: [
      "I regularly interviewed and observed scientists as they used the web-based software to determine how to improve their experience. The focus was on identifying the pain points that kept them from using the application more frequently.",
      "One of our team's main goals was to increase the usage of the site. By talking to users and analyzing usage data, our team found that users were having trouble getting past the onboarding and training process. I designed features to improve the experience for new users, including a site walkthrough for new users, informational cards, and an in-depth 'Get Started Guide' covering the most important functions of the site.",
    ],
  },
};

export const infoCardsImageFull: ImageFullProps = {
  post: {
    imgPath: smInfoCards,
    imgAlt: "Image of various info cards components.",
    caption:
      "Information and action cards that appear when a new user creates a study.",
    fitToScreenHeight: false,
  },
};

export const infoCardsNotesImageFull: ImageFullProps = {
  post: {
    imgPath: smInfoCardsNotes,
    imgAlt: "Image of design notes for info card implementation",
    caption:
      "Design notes during the process of creating the information and action cards to help guide new users.",
    fitToScreenHeight: false,
  },
};

export const newStudyModalImageFull: ImageFullProps = {
  post: {
    imgPath: smNewStudy,
    imgAlt:
      "Image of a popup modal that guides users through creating a new Study.",
    caption: "Popup modal to guide users through creating a new study.",
    fitToScreenHeight: false,
  },
};
export const newStudyOverviewImageFull: ImageFullProps = {
  post: {
    imgPath: smOverview1,
    imgAlt:
      "Image of an overview page to help users manage their general study information.",
    caption:
      "New overview page, with added information and action cards to ensure that the user completes the necessary parts of the study creation process.",
    fitToScreenHeight: false,
  },
};

export const siteOrganizationTextSection: TextSectionProps = {
  post: {
    header: "",
    subheaders: ["Site Organization"],
    bodies: [
      "Another issue our team identified was that the conceptual model of grouping organ-chips was not clearly reflected in the organization of the site. We combined the 'Groups' and 'Chips' pages to make it easier for users to create and manage groups of organ-chips in a study.",
    ],
  },
};

export const groupsChips1ImageFull: ImageFullProps = {
  post: {
    imgPath: smGroups1,
    imgAlt: "Image of the web  UI for the Chip Groups page",
    caption:
      "Several Demonstrations of the new Groups page that now includes Chip information.",
    fitToScreenHeight: false,
  },
};
export const groupsChips2ImageFull: ImageFullProps = {
  post: {
    imgPath: smGroups2,
    imgAlt: "Image of the web  UI for the Chip Groups page",
    caption: "",
    fitToScreenHeight: false,
  },
};
