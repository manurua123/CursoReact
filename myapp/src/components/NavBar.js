import "bootstrap/dist/css/bootstrap.min.css"

function NavBar() {
    return (

        
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">TITULO</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="https://es.wikipedia.org/wiki/Waluigi" target="_blank">Waluigi</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://es.wikipedia.org/wiki/Wario" target="_blank">Wario</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://es.wikipedia.org/wiki/Bowser" target="_blank">Bowser</a>
            </li>
        </ul>
        </div>
        </div>
    </nav>
    
    
    
    
    )
}

export default NavBar;