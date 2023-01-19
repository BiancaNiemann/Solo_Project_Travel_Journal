import React from "react"

export default function Main(props){
    return(
        <div className="travel-card">
            <img className="image" src={`../Images/${props.place.imageUrl}`} alt="Image of destination"/>
            <div className="travel-info">
                <div className="top-line">
                    <i className="fa-solid fa-location-dot"></i>
                    <h4 className="location-info">{props.place.location}</h4>
                    <a className="maps-link" href={props.place.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h3 className="place-title">{props.place.title}</h3>
                <h4 className="start-end">{props.place.startDate} - {props.place.endDate}</h4>
                <p className="description">{props.place.description}</p>
            </div>
        </div>
    )
}