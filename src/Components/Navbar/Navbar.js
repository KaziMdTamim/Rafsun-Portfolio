import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {

    return (
       <div className='navbar'>
              <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="nav-icon navbar-toggler-icon">Menu</span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
        <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#about">About</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="">Blog</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.behance.net/rafsanrohan?fbclid=IwAR1BjZWSV980immEFC_RhVxBHss4FKew6wkWHiqNoYqfvCZTsjCkzOGmlBQ" target="blank">Portfolio</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
       </div>
    );
};

export default Navbar;