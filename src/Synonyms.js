import React from "react";

export default function showSynonyms(props){
    if(props.synonyms){
         return (<div className="Synonyms">Synonyms:{props.synonyms.map(function(synonym, index){
             return <div key={index}>
            <ul>{synonym}</ul>
        </div>;
         })}</div>);
       
    }
    else{ return null;
    }
   
    
}