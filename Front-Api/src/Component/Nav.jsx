import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

 
return (
    <>
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/Add"}>Add</NavLink>
    <NavLink to={"/MusicList"}>List</NavLink>
    </>
)
}

export default NavBar;