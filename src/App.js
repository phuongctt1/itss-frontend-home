import React from 'react';

import './App.css';
import { Header } from './components/header/Header';
//import { Home1 } from './components/home1/home1';
import { Content } from './components/content/content';
import { Contents } from './components/contents/contents';
import { Contentss } from './components/contentss/contentss';
import { Footer } from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <div className="headerr"><Header/></div> 
      <div className="contentt">
        <div className="component1"><Content/></div>
        <div className="component2"><Contents/></div>
        <div classname="component3"><Contentss/></div>
      </div>
      <div className="footer"><Footer/></div> 
    </div>
  );
}
export default App;
