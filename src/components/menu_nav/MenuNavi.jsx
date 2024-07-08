
import { Link, NavLink, Outlet } from "react-router-dom";
import './MenuNav.css'
import TeanCherry from '../../../public/Team_Cherry.png'
export default function MenuNav(){
    return(
        <>
            <nav>
                <div className="container-navigation-menu-items" style={{justifyContent:"start"}}>
                    <Link to="/">
                        <img src={TeanCherry} alt="TeanCherry" width={45}/>
                    </Link>
                </div>
                <div className="container-navigation-menu-items" style={{justifyContent:"end"}}>
                    {/* <Link className="navi-link-container">
                        item 1
                    </Link>
                    <Link className="navi-link-container">
                        item 2
                    </Link> */}
                   <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                       isActive ? "navi-link-selected-container" : "navi-link-container"}
                    >
                        Blog
                    </NavLink>
                    <NavLink
                    to="/contact_us"
                    className={({ isActive }) =>
                       isActive ? "navi-link-selected-container" : "navi-link-container"}
                    >
                        Contact Us
                    </NavLink>
                </div>
            </nav>
             <Outlet/>
        </>
        
    )
}