import React from "react";


export default function showPhonetics(props){
    return (<div className="Phonetics">
    <a href={props.phonetic.audio} target="_blank" rel="noreferrer">Listen</a>
    <br/>
    <p>
    {props.phonetic.text}
    </p>
    </div>
    )}