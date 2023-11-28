function Navbar() {
    return (  
        <nav className="navbar justify-content-between">
            <h5 className="text-secondary m-0">Test React website by Nabil</h5>
            <div className="d-flex align-items-center">
                <a href="" className="link-primary p-2 ">Social Links</a>
                <a href="" className="link-secondary p-2 ">Education</a>
                <a href="" className="link-success p-2 ">Projects</a>
                <a href="" className="link-danger p-2 ">Contact me</a>
            </div>
        </nav>
    );
}

export default Navbar;