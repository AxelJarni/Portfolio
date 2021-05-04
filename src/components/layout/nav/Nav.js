
function Nav() {
    return(
        <header>
            <div>  
                <ul className="nav bg-dark d-flex justify-content-end px-5">
                    <li className="nav-item">
                        <a href="/" className="nav-link mx-5">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a href="/projects" className="nav-link mx-2">Projets</a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link mx-2">A propos</a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-link mx-2">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="/resume" className="nav-link mx-2">C.V.</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Nav;