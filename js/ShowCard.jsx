import React from "react";
import { shape, string } from "prop-types";

const ShowCard = props => (
  <div className="show-card">
    <img
      src={`../public/img/posters/${props.poster}`}
      alt={`${props.title} show poster`}
    />
    <h3>{props.title}</h3>
    <h4>{props.year}</h4>
    <p>{props.description}</p>
  </div>
);

// ShowCard.propTypes = {
//   show: shape({
//     poster:string.isRequired,
//     title: string.isRequired,
//     year: string.isRequired,
//     description: string.isRequired,
//   }).isRequired
// };


export default ShowCard;
