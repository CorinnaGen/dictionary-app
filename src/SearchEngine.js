import React, {useState} from "react";
import axios from "axios";
import "./SearchEngine.css";
import Results from "./Results";

export default function SearchWord(){
let[keyWord, setkeyWord]= useState(null);
let[results, setResults]= useState(null);

    function Search(event){
        event.preventDefault();
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handleKeyWord(event){
        setkeyWord(event.target.value);
    }
    return(
        <div className="SearchEngine">
            <form onSubmit={Search}>
             <input type="search" placeholder="Type..." autoFocus onChange={handleKeyWord}></input>
      <input type="submit" value="Search" autoFocus></input></form>
      <Results results={results}/>
        </div>
    )
}