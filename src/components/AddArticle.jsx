import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
export const AddArticle=()=>{
    const { id }=useParams();
    const navigate=useNavigate();
    const articles=useSelector(s=>s.articles);
    const dispatch=useDispatch();

    const [formData,setFormData]=useState({designation: "",famille:""});

    useEffect(()=>{
        if(id){
            const articleToEdit=articles.find(a=>a.id===Number(id));
            if(articleToEdit){
                setFormData({
                    designation:articleToEdit.designation,
                    famille:articleToEdit.famille
                });
            }
        }
    },[id, articles]);

    const handleChange=(e)=>{
        const {name, value}=e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!formData.designation.trim() || !formData.famille.trim()) return;
        if(!id){
            //Mode Ajout
            const newArticle = {
                id:Date.now(),designation: formData.designation, famille: formData.famille
            }
            dispatch({ type:"ADD_ARTICLE",payload: newArticle});
        }else{
            //Mode Edit
            dispatch({
                type:"UPDATE_ARTICLE",
                payload:{id:Number(id),designation:formData.designation,famille: formData.famille}
            })
        }
        setFormData({ designation:"", famille:""});
        navigate("/");
    };
    return(
        <div className="container mt-4">
            <h3>{id?"Modifier l'article":"Ajouter un article"}</h3>
            <form onSubmit={handleSubmit}>
                <div className="mt-3">
                    <label htmlFor="desig" className="form-label">Designation</label>
                    <input type="text" className="form-control" id="desig" value={formData.designation} onChange={handleChange} name="designation" />
                </div>
                <div className="mt-3">
                    <label htmlFor="famille" className="form-label">Famille</label>
                    <input type="text" className="form-control" name="famille" value={formData.famille} onChange={handleChange}  id="famille" />
                </div>
                <button type="submit" className={`mt-3 btn ${id?'btn-warning': 'btn-info'}`}>
                    {id? "Modifier":"Ajouter"}
                </button>
            </form>
        </div>
    )
}