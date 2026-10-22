import { useEffect,useState } from "react";
import axios from "axios";
export const Exo2=()=>{
    const [articles,setArticles]=useState([]);
    useEffect(()=>{axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5").then(reponse=>setArticles(reponse.data)).catch(error=>console.log("Erreur :",error));
    },[])

    
            if(articles.length===0) {
                 return <p>Pas d'elements</p>
            }
            return(
                <div className="container">
                    {articles.map((p,pos)=>(
                        <p key={p.id}>{p.title}</p>
                        
                    ))}
                </div>
            )
            
        
       
}

