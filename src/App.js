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
      <section className="navbar-section"><NavBar /></section>
      <section className="upper-section"><UpperPage /></section>
      <section className="lower1-section"><LowerPage1 /></section>
      <section className="lower2-section"><LowerPage2 /></section>
      <section className="lower3-section"><LowerPage3 /></section>
      <section className="footer-section"><Footer /></section>
    </>
  );
};

export default App;
