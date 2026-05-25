
import React from 'react';
import {createContext } from 'react';


export let aboutcontext=createContext()
const AboutCon = ({children}) => {
    let username="harshavardhan"
    let age=22
  return (

    <aboutcont.Provider value={{ username, age }}>
      {children}
      <h1>About Container</h1>
      <p>This is the about container component.</p>
       
    </aboutcont.Provider>
  );
};

export default AboutCon;