import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../css/urlshortener.css";

export default function UrlShortener() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [duration, setDuration] = useState(1);

  useEffect(() => {}, [shortUrl]);

  const handleGenerateShortUrl = async () => {
    try {
        const response = await axios.post('http://localhost:8080/short-url', {
            url: url,
            duration: duration
          });
          setShortUrl(response.data.url);
    } catch (error) {
        console.error("Axios Error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="url-shortener">
      <h2>Shorten Your URL</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your long URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <div className="select-box">
          <p>Link Duration:</p>
          <select onChange={(e) => setDuration(Number(e.target.value))}>
            <option value="1">1 Min</option>
            <option value="10">10 Min</option>
            <option value="30">30 Min</option>
          </select>
        </div>

        <button onClick={handleGenerateShortUrl}>Generate Short URL</button>
        {shortUrl && <div>Here is your short URL: {shortUrl}</div>}
      </div>
    </div>
  );
}