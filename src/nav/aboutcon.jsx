
import React from 'react';
import {createContext } from 'react';


export let aboutcont=createContext()
const AboutCon = () => {
    username="harshavardhan"
    age=22
  return (

    <aboutcont.Provider value={{ username, age }}>
      <h1>About Container</h1>
      <p>This is the about container component.</p>
    </aboutcont.Provider>
  );
};

export default AboutCon;