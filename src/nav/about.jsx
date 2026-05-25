import { useContext } from "react";
import React from "react";
import {aboutcontext } from "./aboutcon";

let About = () => {

    let data = useContext(aboutcontext);

    return (
        <>
                        <p>{data.age}</p>
        </>
    );
}

export default About;