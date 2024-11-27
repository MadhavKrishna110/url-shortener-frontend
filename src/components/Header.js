import React from 'react'
import "../css/header.css"
export default function Header() {
  return (
    <header className="header">
        <p>Short.ly</p>
          <div className='nav-bar' >
          <ul className="nav-list">
              <li>URL Shortener</li>
              <li>URL Analytics</li>
            </ul>
          </div>
      </header>
  )
}
