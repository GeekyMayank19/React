import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";



const  Menu = ({ history })=> (
        <div>
            <ul className="navbar navbar-dark bg-dark">
                <li className="nav-item">
                <Link  className="nav-link" to="/">
                    Home
                    </Link>
                </li>
            </ul>
        </div>
       
    )


export default Menu
