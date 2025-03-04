import {Link, NavLink} from "react-router-dom"

const NavBar = () => {
    return(
        <nav>
            <Link to="/">Home</Link>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/aboutus">About us</NavLink>
        </nav>
    )
} 

export default NavBar