import React, {useState} from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchWord(){
let[keyWord, setkeyWord]= useState(null);

    function Search(event){
        event.preventDefault();
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleResponse(response){
        console.log(response);
    }

    function handleKeyWord(event){
        setkeyWord(event.target.value);
    }
    return(
        <div className="SearchEngine">
            <form onSubmit={Search}>
             <input type="text" placeholder="Type..." autoFocus onChange={handleKeyWord}></input>
      <input type="submit" value="Search" autoFocus></input></form>
        </div>
    )
}