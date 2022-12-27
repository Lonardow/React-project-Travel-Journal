import React from "react";
export default function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.item.imageUrl} alt="" />
      <div className="description">
        <img className="icon" src="../imagens/loc-icon.png" alt="" />
        <span className="location-text">{props.item.location}</span>
        <a className="gray" href={props.item.googleMapsUrl}>
          View on Google Maps
        </a>
        <br />
        <p className="title-text">{props.item.title}</p>
        <br />
        <p className="date-text">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="description-text">{props.item.description}</p>
        <hr />
      </div>
    </div>
  );
}
