import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meaning.css";


export default function showMeaning(props){
    return(
    <div className= "meaning"><section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index){
            return(<div key={index}>
                <strong></strong>{definition.definition}
                <br/>
                <Examples examples={definition.example}/>
                <br/>
                <Synonyms synonyms={definition.synonyms}/>

                </div>);
        })}
        </section>
    </div>);
}