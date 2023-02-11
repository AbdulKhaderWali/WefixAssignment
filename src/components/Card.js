import React from "react";
import "../index.css";
// Card having details of a single store
export default function Card(props) {
  return (
    <div className="card" style={{ width: "18rem", margin: "0.5rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6>
          <span className="card-details">Category</span> : {props.category}
        </h6>
        <h6>
          <span className="card-details">Address</span> : {props.address}
        </h6>
        <h6>
          <span className="card-details">Owner</span> : {props.owner}
        </h6>
      </div>
    </div>
  );
}
