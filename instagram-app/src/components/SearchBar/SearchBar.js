import React from 'react'
import './SearchBar.css'
import logo from '../../imgs/logo.png'
import insta from '../../imgs/insta.PNG'

const SearchBar = () => {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="Instagram Logo"></img>
      <div className="break"></div>
      <img src={insta} className="insta" alt="Instagram"></img>
      <input type="text" placeholder="Search..." className="search-input"></input>
    </header>
  )

}

export default SearchBar