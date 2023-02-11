import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "../index.css";
// Displaying all the stores
export default function Home(props) {
  return (
    <div className="d-grid container">
      <div className="container">
        <Link to="/addstore">
          <button className="btn btn-success btn-sm">Add Store</button>
        </Link>
      </div>
      <div className="d-flex flex-wrap">
        {props.shopList
          .filter((prod) => prod.shopName.toLowerCase().includes(props.query))
          .map((item) => (
            <Card
              name={item.shopName}
              category={item.category}
              address={item.address}
              owner={item.ownerName}
              key={item.shopName}
            />
          ))}
      </div>
    </div>
  );
}
