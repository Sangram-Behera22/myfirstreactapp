import React from 'react';
import web from "../src/images/img1.jpg";
import {NavLink} from 'react-router-dom';
import Common from './Common';
// import './App.css';
function Home() {
  return (
    <>
      <Common name='Grow Your Business with' imgsrc={web} visit='/service' btnname='Get Started'/>
    </>
  );
}

export default Home;