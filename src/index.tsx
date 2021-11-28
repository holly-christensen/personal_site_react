import * as serviceWorker from "./serviceWorker";
import CssBaseline from "@mui/material/CssBaseline";
import ReactDOM from "react-dom";
import Main from "./Main";
import { mainProps } from "./page-content/main-content";
import "./styles.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import GraphicDesignPage from "./pages/graphic-design-page";
import TypographyPage from "./pages/type-page";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AboutPage from "./pages/about-page";

const theme = createTheme({
  typography: {
    h3: {
      fontSize: 40,
      fontFamily: [
        "Monotalic",
        "Karla",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
    h4: {
      marginBottom: 15,
    },
    h5: {
      fontSize: 17,
    },
    fontFamily: ["Open Sans", '"Helvetica Neue"', "Arial", "sans-serif"].join(
      ","
    ),
    fontSize: 13,
  },
  palette: {
    background: {
      default: "#000000",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      {/* NAV BAR */}
      <NavBar />
      {/* LINKS */}
      <Routes>
        <Route path="/" element={<Main {...mainProps} />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/resume" element={<ResumePage />} /> */}
        <Route path="/typography" element={<TypographyPage />} />
        <Route path="/graphicdesign" element={<GraphicDesignPage />} />
        {/* <Route path="/scout" element={<ScoutPage />} /> */}
        {/* <Route path="/emulatecoop" element={<EmulatePage />} /> */}
        {/* <Route path="/morsecoop" element={<MorsePage />} /> */}
        {/* <Route path="/freelancework" element={<FreelancePage />} /> */}
      </Routes>
      {/* FOOTER */}
      <Footer />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
