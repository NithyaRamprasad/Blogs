import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Login";

const NavBar = ({updateLoginStatus}) =>{
    const [username,setUserName] = useContext(UserContext);

    return (
        <nav className="navbar">
            <h1><Link to="/">Blogs</Link></h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <span  style={{margin : "16px"}}><strong>User : {username}</strong></span>
                <button onClick={updateLoginStatus} style={{margin : "1px"}}>Logout</button>
            </div>
        </nav>
    );
}

export default NavBar;