
import React from 'react';
import {createContext } from 'react';


let aboutcont=createContext()
const AboutCon = () => {
    username="harshavardhan"
  return (

    <aboutcont.Provider value={username}>
      <h1>About Container</h1>
      <p>This is the about container component.</p>
    </aboutcont.Provider>
  );
};

export default AboutCon;