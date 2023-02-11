import axios from "axios";
import "./index.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddStore from "./components/AddStore";
function App() {
  const [query, setQuery] = useState("");
  const [address, setAddress] = useState([]);
  async function fetchData() {
    try {
      const res = await axios.get(
        `https://random-data-api.com/api/v2/users?size=50&is_xml=true`
      );
      const data = await res.data;
      setAddress(() => data);
    } catch (error) {
      console.log("API error", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  let [shopList, setShopList] = useState([
    {
      shopName: "Beautiful Charm",
      category: "General Store",
      address: "Hyderabad",
      ownerName: "John"
    },
    {
      shopName: "Ambrosia Store",
      category: " Mall",
      address: "Hyderabad",
      ownerName: "John"
    },
    {
      shopName: "Bend the Trend",
      category: "SuperMarket",
      address: "Hyderabad",
      ownerName: "John"
    },
    {
      shopName: "Colors",
      category: "Medical Store",
      address: "Hyderabad",
      ownerName: "John"
    },
    {
      shopName: "Cybershop",
      category: "Medical Store",
      address: "Hyderabad",
      ownerName: "John"
    },
    {
      shopName: "Cornermall",
      category: "General Store",
      address: "Hyderabad",
      ownerName: "John"
    }
  ]);

  return (
    <div className="main">
      <Navbar setQuery={setQuery} query={query} />
      <Routes>
        <Route path="/" element={<Home shopList={shopList} query={query} />} />
        <Route
          path="/addstore"
          element={<AddStore address={address} addStore={setShopList} />}
        />
      </Routes>
    </div>
  );
}
export default App;
