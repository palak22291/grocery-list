import "./Navbar.css"
import React from "react";

function Navbar(){

    return(
        <nav className="navbar">
        <div className="logo">
        Grocery Buddy
        </div>

        <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Recipes</li>
        <li>Contact</li>
        </ul>
        </nav>
    )

}


export default Navbar;