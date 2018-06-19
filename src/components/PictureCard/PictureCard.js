import React from "react";
import "./PictureCard.css";

const PictureCard = props => (
    <div className="col-4 girl-container" onClick={() => props.onClick(props.id)}>
        <img src={props.image} className="girl" alt="Which Korean girl is this?"/>
    </div>
)

export default PictureCard;