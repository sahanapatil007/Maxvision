import React from "react";
import '../App.css';

function Navbar() {
    return (
        <div>
            <div class="nav">
                <div class="nav-right">
                    <h3 style={{ fontSize: "32px" }}>Max</h3>
                    <h4 style={{ fontSize: "28px" , paddingLeft : "20px" }}><i className="ri-infinity-fill"></i>Vision
                    </h4>
                </div>
                <div class="nav-left">
                    <a href="#eye">Eyeglasses</a>
                    <a href="#contact">Contactlens</a>
                    <a href="#about">Why Us</a>
                    <a href="contact.html">Contact-Us</a>
                    <a href="trct.html">Track ur order
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
