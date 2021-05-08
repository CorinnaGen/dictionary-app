import React from "react";

export default function showExamples(props){
    if(props.example){
         return (<div className="Examples">Examples: {props.synonyms.map(function(example, index){
             return <div key={index}>
            <ul>{example}</ul>
        </div>;
         })}</div>);
       
    }
    else{ return null;
    }
   
    
}