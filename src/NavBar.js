import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Login";
import { logout } from './Redux/Users/userSlice'
import { useDispatch } from 'react-redux';

const NavBar = () =>{
    const [username,setUserName] = useContext(UserContext);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <nav className="navbar">
            <h1><Link to="/">Blogs</Link></h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <span  style={{margin : "16px"}}><strong>User : {username}</strong></span>
                <button onClick={handleLogout} style={{margin : "1px"}}>Logout</button>
            </div>
        </nav>
    );
}

export default NavBar;