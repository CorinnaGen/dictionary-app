import React from "react";
import "./Examples.css";

export default function showExamples(props){
    if (props.example){
        return <div className="Examples"><h5>Examples:</h5><p>{props.example}</p></div>
    }else{
        return null;
    }
}