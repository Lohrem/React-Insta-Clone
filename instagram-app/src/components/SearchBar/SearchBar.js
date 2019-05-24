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
      <a href="index.html"><i class="far fa-compass"></i></a>
      <a href="index.html"><i class="far fa-heart"></i></a>
      <a href="index.html"><i class="far fa-user"></i></a>
    </header>
  )

}

export default SearchBar