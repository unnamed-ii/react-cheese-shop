import React from 'react';
import {MainNavConstants} from "./constants";
import {Link} from "react-router-dom";

export const DropDownLinks = () => {
    return (
        <div className="nav__ingredients-link__dropdown">
            {MainNavConstants.dropDownList.map((link, idx) => (
                <Link to="/category" className="dropdown-link" key={idx}>
                    {link}
                </Link>
            ))}
        </div>
    )
}