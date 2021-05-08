import React, {useState} from "react";
import axios from "axios";
import "./SearchEngine.css";
import Results from "./Results";

export default function SearchWord(props){
let[keyWord, setkeyWord]= useState(props.defaultKeyword);
let[results, setResults]= useState(null);
let[loaded, setLoaded] = useState(false);

    function Search(){
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handleKeyWord(event){
        setkeyWord(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        Search();
    }
    function load(){
        setLoaded(true);
        Search();
    }
    if(loaded){
    return(
        <div className="SearchEngine">
            <form onSubmit={handleSubmit}>
             <input type="search" placeholder="Type..." autoFocus onChange={handleKeyWord}></input>
      <input type="submit" value="Search" autoFocus></input></form>
      <Results results={results}/>
        </div>
    )}else{
        load();
        return "Loading";
    }
}