import React from "react";


export default function showPhotos(props){
   if (props.photos){
    return(
        <section className="Photos">
            <h6>Images:</h6>
            <div className="row">{props.photos.map(function( photo, index){
            return <div className="col-4" key={index}>
                <img src={photo.src.landscape} alt="of the query" className="img-fluid"/></div>;
        })}</div>
        </section>);
    } else {
        return null;
    }}
    

