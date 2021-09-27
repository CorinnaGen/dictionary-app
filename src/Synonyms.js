import React from "react";
import "./Synonyms.css";

export default function showSynonyms(props){
    if(props.synonyms){
         return (<div className="Synonyms"><h4>Synonyms:</h4>{props.synonyms.map(function(synonym, index){
             return <div key={index}>
            <ul><li>{synonym}</li></ul>
        </div>;
         })}</div>);
       
    }
    else{ return null;
    }
   
    
}