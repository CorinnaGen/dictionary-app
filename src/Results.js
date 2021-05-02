import React from "react";
import "./Results.css";

export default function showResults(props){
    if(props.result){
    return (<div className="Results"><h2>{props.results.word}</h2>
    
</div>)
} else{
    return (<div className="noResults">We don't know what that means either</div>);}}
