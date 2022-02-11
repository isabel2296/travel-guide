import React from "react"
import location_icon from "../images/locicon.png"

// function CardImage(props){
//     return(
//         <div>
//             <img src={props.imageUrl} className="card-image"/>
//         </div>
//     )
// }

export default function TravelCard(props){
    
    return(  
        <div className="card">
            <div className="card-main">
                <img src={props.imageUrl} className="card-image" alt="location"/>
                <div className="card-main-info">
                    <div className="card-location">
                        <img src={location_icon} className="loc-icon" alt="location icon"/>
                        <p className="card-loc">{props.location} </p>
                        <a className="card-loc-link" href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <div className="card-info">
                        <h2>{props.title}</h2>
                        <p className="card-info-date">{props.startDate} - {props.endDate}</p>
                        <p className="card-info-description">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

// {
//     id: 2,
//     title: ,
//     location: ,
//     googleMapsUrl: ,
//     startDate: ,
//     endDate: ,
//     description: ,
//     imageUrl: 
// },