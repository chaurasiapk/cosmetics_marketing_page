// Import React and all main page components
import React from "react";
import {
  Footer,
  LowerPage1,
  LowerPage2,
  LowerPage3,
  NavBar,
  UpperPage,
} from "./components";
import "remixicon/fonts/remixicon.css";

import "./styles/App.scss";

// App component: main entry point for the page layout
const App = () => {
  return (
    <>
      <NavBar />
      <UpperPage />
      <LowerPage1 />
      <LowerPage2 />
      <LowerPage3 />
      <Footer />
    </>
  );
};

export default App;
