import { Link } from "react-router-dom";

const NavBar = ({updateLoginStatus}) =>{

    return (
        <nav className="navbar">
            <h1><Link to="/">Blogs</Link></h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <span  style={{margin : "16px"}}><strong>User : {sessionStorage.getItem('userName')}</strong></span>
                <button onClick={updateLoginStatus} style={{margin : "1px"}}>Logout</button>
            </div>
        </nav>
    );
}

export default NavBar;