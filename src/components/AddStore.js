import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
export default function AddStore(props) {
  // creating state for storing data of new store
  const [formData, setFormData] = useState({
    shopName: "",
    ownerName: "",
    category: "",
    address: ""
  });
  //Updating the data of store from the form
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      };
    });
  }
  //Handline update of address seperately if user selects from dropdown list
  function handleAddress(city) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        address: city
      };
    });
  }
  //Adding new store to the original array and resetting the form
  function handleAdd() {
    props.addStore((prevArr) => [...prevArr, formData]);
    alert("Store Added Successfully!");
    setFormData(() => {
      return {
        shopName: "",
        ownerName: "",
        category: "",
        address: ""
      };
    });
  }
  return (
    <div className="container page">
        <Link to="/">
            <button className="btn btn-success btn-sm">Home</button>
        </Link>
      <div className="form-box">
        <h1>Add Your Store</h1>
        <form>
          <div className="form-group">
            <label>Shop Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Your Shop Name here"
              onChange={handleChange}
              name="shopName"
              value={formData.shopName}
            />
          </div>
          <div className="form-group">
            <label>Owner Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Owner's Name"
              onChange={handleChange}
              name="ownerName"
              value={formData.ownerName}
            />
            <label>Type of Shop</label>
            <select
              id="category"
              value={formData.category}
              onChange={handleChange}
              name="category"
              className="select"
            >
              <option value="">-- Choose --</option>
              <option value="General Store">General Store</option>
              <option value="Mall">Mall</option>
              <option value="SuperMarket">SuperMarket</option>
              <option value="Medical Store">Medical Store</option>
            </select>
          </div>
          <label>Address</label>
          <input
            className="form-control"
            type="text"
            placeholder="City"
            onChange={handleChange}
            name="address"
            value={formData.address}
          />
          <div className="dropdown">
            {/* Filtering address according to input and limiting number of rows */}
            {props.address
              .filter((data) =>
                data.address.city.toLowerCase().includes(formData.address)
              )
              .slice(0, 5)
              .map((item) => (
                <div
                  className="dropdown-row"
                  key={item.address.city}
                  onClick={() => handleAddress(item.address.city)}
                >
                  {item.address.city}
                </div>
              ))}
          </div>
        </form>
        <button className="btn btn-primary btn-success" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}
