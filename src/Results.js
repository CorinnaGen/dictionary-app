import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import Phonetics from "./Phonetics";

export default function showResults(props){
    if(props.results){
    return (<div className="Results"><section><h2>{props.results.word}</h2>
{props.results.phonetics.map(function(phonetic, index){
    return <div key={index}>
        <Phonetics phonetic={phonetic}/>
    </div>
})}</section>
    {props.results.meanings.map(function(meaning, index){
        return (<div key={index}> <Meaning meaning={meaning}/></div>);
     })}
</div>)
} else{
    return null;}}
