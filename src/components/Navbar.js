
const Navbar = ({userName, loggedIn}) =>{
    return (
        (!loggedIn)?
        <nav className="navbar">
            <div className="nav-logo">
                Hi, {userName}
            </div>
            <ul className="nav-links">
                <li><a href="#">Profile</a></li>
                <li><a href="#">Notification</a></li>
                <li><a href="#">Logout</a></li>
                {/* <li><a href="#">Signup</a></li> */}
            </ul>
        </nav>: null
    );
}

export default Navbar;