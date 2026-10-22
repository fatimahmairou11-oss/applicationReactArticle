import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const ArticleList = () => {
    const articles = useSelector(s => s.articles);
    const dispatch = useDispatch();

    return (
        <div className="container mt-3">
            <ul className="list-group p-3">
                {articles.map(p => (
                    <li className="list-group-item d-flex justify-content-between align-items-center gap-3" key={p.id}>
                        <div>
                            <span className="fw-bold me-3">{p.designation}</span>
                            <span className="text-muted">({p.famille})</span>
                        </div>
                        <div className="d-flex gap-2">
                            <Link to={`/article/${p.id}`} className="btn btn-warning btn-sm">Modifier</Link>
                            <button 
                                className="btn btn-danger btn-sm" 
                                onClick={() => dispatch({ type: "DELETE_ARTICLE", payload: p.id })}>
                                Supprimer
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};