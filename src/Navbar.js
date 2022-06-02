import './Navbar.css';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1 className='logo'>Ovie blog</h1>
            <ul className="nav-list">
                <li className="list-items">
                    <a href="/">Home</a>
                </li>
                <li className="list-items" style={{ backgroundColor: "var(--themeColor4)", borderRadius: '5px'}}>
                    <a href="/create" style={{color: 'white'}}>New Blogs</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;