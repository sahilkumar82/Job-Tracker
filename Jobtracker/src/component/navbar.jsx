function Nav() {
    return (
        <nav className="navbar">

            <div className="nav-items">
                <input
                    type="text"
                    placeholder="Search application, companies, roles..."
                />
            </div>

            <div className="logo">
                <span className="logo-circle">Sk</span>

                <div className="logo-items">
                    Sahil Kumar
                </div>
            </div>

        </nav>
    );
}

export default Nav;