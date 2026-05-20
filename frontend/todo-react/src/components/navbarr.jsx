import React from "react";
import { Link } from "react-router-dom";
function NavBarr()
{
    return(
        <nav className="navi">
            <ul className="Navibar">
                <li><Link to= '/home'>home</Link></li>
                <li><Link to='/about'>about</Link></li>
                <li><Link to='/task'>task</Link></li>
            </ul>
        </nav>
    )
}
export default NavBarr;