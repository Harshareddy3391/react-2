import { useContext } from "react";
import React from "react";
import { aboutcont } from "./aboutcon";


let About= ( )=>{
    let data=useContext(aboutcont)

    return(
    <>

    

    <p>{json.stringfy(data)}</p>
    <p>hiiii</p>

    </>
    )
}