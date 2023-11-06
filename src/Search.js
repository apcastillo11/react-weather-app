import React, { useState } from "react";
import "./styles.css";
export default function Search() {
  let [city, setCity] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    let showCity = document.querySelector("h2");
    showCity.innerHTML = `It is currently 72°F in ${city}`;
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a city"
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <h2 />
    </div>
  );
}
