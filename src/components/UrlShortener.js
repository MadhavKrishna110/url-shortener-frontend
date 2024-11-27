import React, { useState, useEffect } from "react";
import "../css/urlshortener.css";
import axios from "axios";

export default function UrlShortener() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [duration, setDuration] = useState(1);

  useEffect(() => {}, [shortUrl]);

  const handleGenerateShortUrl = async () => {
    fetch("http://localhost:8080/shorten", {
      method: "POST",
      body: JSON.stringify({ url: url }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setShortUrl(response.url);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className="url-shortener">
      <h2> Shorten Your URL</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your long URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <div className="select-box">
          <p> Link Duration: </p>
          <select onChange={(e) => setDuration(e.target.value)}>
            <option value="1 Day">1 Day</option>
            <option value="7 Days">7 Days</option>
            <option value="30 Days">30 Days</option>
          </select>
        </div>

        <button onClick={handleGenerateShortUrl}>Generate Short URL</button>
        {shortUrl && <div> Here is your short Url : {shortUrl} </div>}
      </div>
    </div>
  );
}
