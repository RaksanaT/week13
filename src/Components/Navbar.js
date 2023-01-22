import React from "react";


export default function Navbar() {
    return <nav className="nav">
        <a href="/site" className="site-title">Fifth Element</a>
        <ul>
            <li>
                <a href="/pricing">Pricing</a>
            </li>    
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
}
