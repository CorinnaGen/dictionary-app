import React, {useState} from "react";
import "./SearchEngine.css";

export default function SearchWord(){
let[keyWord, setkeyWord]= useState(null);

    function Search(event){
        event.preventDefault();
        alert(`Searching for the meaning of ${keyWord}`);
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