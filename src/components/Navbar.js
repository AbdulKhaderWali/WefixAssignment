import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  function handleChange(event) {
    props.setQuery(event.target.value);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="/">
            <span className="first">Shop</span>
            <span className="second">List</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleChange}
                name="search"
                value={props.query}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
