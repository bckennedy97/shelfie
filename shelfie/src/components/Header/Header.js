import React from "react";
import {NavLink} from "react-router-dom";

export default function Header(){
    return(
        <div>
            Shelfie
            <NavLink to={"/"}>Dashboard</NavLink>
            <NavLink to={"/add"}>Add Inventory</NavLink>
        </div>
    )
}