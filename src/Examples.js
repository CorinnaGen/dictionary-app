import React from "react";
import "./Examples.css";

export default function showExamples(props){
    if(props.example){
         return (<div className="Examples"><h5>Examples:</h5> {props.synonyms.map(function(example, index){
             return <div key={index}>
            <ul>{example}</ul>
        </div>;
         })}</div>);
       
    }
    else{ return null;
    }
   
    
}