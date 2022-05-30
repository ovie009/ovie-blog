const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Ovie blog</h1>
            <ul className="nav-list">
                <li className="list-items">
                    <a href="/">Home</a>
                </li>
                <li className="list-items">
                    <a href="/create">New Blog</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;