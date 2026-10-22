import { Link } from "react-router-dom";
export const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-around">
            <Link className="navbar-brand" to="/">My App</Link>
            <div className="navbar-nav d-flex justify-content-between gap-2">
                <Link className="nav-link" to="/">ArticlesListe</Link>
                <Link className="nav-link" to="/Ajouter">ADD</Link>
            </div>

        </nav>
    )
}