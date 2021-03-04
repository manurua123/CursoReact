import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import CartWidget from './CartWidget';

function NavBar() {
    return (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a class="navbar-brand" href="#">TITULO</a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Opcion 1</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Opcion 2</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Opcion 2</a>
                </li>
                </ul>
                <button type="button" class="btn btn-light"><CartWidget/></button> 
            </div>
        </nav>
    </>
    )
}

export default NavBar;