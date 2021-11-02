import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function SearchWord(props){
let[keyWord, setkeyWord]= useState(props.defaultKeyword);
let[results, setResults]= useState(null);
let[loaded, setLoaded] = useState(false);
let[photos, setPhotos]= useState(null);

    function Search(){
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
        axios.get(apiUrl).then(handleResponse);
        let pexelsApiKey="563492ad6f917000010000018e2ac49757854677882884c695cc4b9b";
        let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyWord}&per_page=3`;
        let headers={Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers: headers}).then(handleImageResponse);
    }
    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handleImageResponse(response){
        setPhotos(response.data.photos);

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
            <section>
            <form className="mb-3" onSubmit={handleSubmit}>
            <label htmlFor="exampleFormControlInput1" className="form-label" aria-label="Search a word">Search a word!</label>
             <input type="search" placeholder="Type and press enter..." autoFocus onChange={handleKeyWord}></input>
     </form>
      </section>
      <div className= "list-group list-group-flush">
      <Results results={results}/>
      <Photos photos={photos}/>
      </div>
        </div>
    )}else{
        load();
        return "Loading";
    }
}