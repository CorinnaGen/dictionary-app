import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meaning.css";


export default function showMeaning(props){
    return(
    <div className= "Meaning"><section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index){
            return(<div  key={index}>
                <p>
                {definition.definition}
                </p>
                <br/><br/>
                <Examples example={definition.example}/>
                <br/><br/>
                <Synonyms synonyms={definition.synonyms}/>

                </div>);
        })}
        </section>
    </div>);
}