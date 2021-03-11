export const Navbar: React.FC = () => {
    return (
        <header className="indigo">
            <div className="container">
                <nav className="pxNav">
                    <div className="nav-wrapper">
                    <a href="/" className="brand-logo">ToDo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Information</a></li>
                        <li><a href="/">Contacts</a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        </header>
        
    )
}