import React from "react"
import navlogo from "../images/navlogo.png"

export default function Navbar(){
    return(
        <nav className="nav-bar">
            <img src={navlogo} className="nav-logo"/>
            <h1> my travel journal.</h1>
        </nav>
    )
}