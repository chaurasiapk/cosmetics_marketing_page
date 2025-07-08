import React from "react";
import { NavBar } from "./components/Navbar/Navbar";
import { UpperPage } from "./components/UpperPage/UpperPage";
import { LowerPage1 } from "./components/LowerPage1/LowerPage1";
import { LowerPage2 } from "./components/LowerPage2/LowerPage2";
import { LowerPage3 } from "./components/LowerPage3/LowerPage3";
import { Footer } from "./components/Footer/Footer";
import "./styles/App.scss";

import "remixicon/fonts/remixicon.css";

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
