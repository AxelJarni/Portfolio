
function Nav() {
    return(
        <nav class="navbar navbar-expand-lg bg-dark fixed-top">
            <div class="container-fluid">
                <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a href="#home" className="nav-link mx-5">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link mx-2">Projets</a>
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
            </div>
        </nav>
    );
}

export default Nav;