import React from "react";


export default function showSynonyms(props){
    if(props.synonyms){
         return (<div className="Synonyms">{props.synonyms.map((synonym, index)=>{
             return <div key={index}>
            <ul><li>{synonym}</li></ul>
        </div>;
         })}</div>);
       
    }
    else{ return null;
    }
   
    
}