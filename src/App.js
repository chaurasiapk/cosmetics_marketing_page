import React from 'react';
import { NavBar } from './component/navbar';
import { UpperPage } from './component/upperPage';
import { LowerPage1 } from './component/lowerPage1';
import { LowerPage2 } from './component/lowerPage2';
import { LowerPage3 } from './component/lowerPage3';
import { Footer } from './component/footer';
import './App.css';

const App = ()=>{
  return(
    <>
    
    <NavBar />
    <UpperPage />
    <LowerPage1 />
    <LowerPage2 />
    <LowerPage3 />
    <Footer />

    
    </>
  );

}

export default App;