import React from "react";
import Synonyms from "./Synonyms";




export default function showMeaning(props){
    return(
    <div className= "Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map((definition, index) =>{
            return(<ul className="list-group"  key={index}>
                <li className="list-group-item list-group-item-success">
                {definition.definition}
                </li>
                <li className="list-group-item">{definition.example ? definition.example : null }</li>
                
                <Synonyms synonyms={definition.synonyms}/>

                </ul>);
        })}
    
    </div>);
}