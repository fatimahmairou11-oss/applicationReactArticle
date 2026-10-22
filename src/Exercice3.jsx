import { useState } from "react";
export const CalcIMC=()=>{
    const [formData,setFormData]=useState({poids:"",taille:"",IMC:""})
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!formData.poids || !formData.taille) return;
        const imc=Number( formData.poids/(formData.taille/100)**2)
        setFormData({...formData,IMC:imc.toFixed(2)})
        

    }
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value})

    }
    return(
        <div className="container">
            <h3>Calculer IMC</h3>
            <form onSubmit={handleSubmit}>
                <div className="mt-3">
                    <label htmlFor="poids" className="form-label">Poids</label>
                    <input type="number" className="form-control" value={formData.poids} name="poids" onChange={(e)=>handleChange(e)} id="poids"/>
                </div>
                <div className="mt-3">
                    <label htmlFor="taille" className="form-label">Taille</label>
                    <input type="number" className="form-control" value={formData.taille} name="taille" onChange={(e)=>handleChange(e)} id="taille"/>

                </div>

                <button type="submit" className="btn btn-info mt-3">Calculer</button>

            </form>
            <span className="fw-5">{formData.IMC}</span> <span className={formData.IMC < 19 ? "text-warning" : formData.IMC <= 25 ? "text-success" : "text-danger"}>{formData.IMC < 19 ? "Sous-Poids" : formData.IMC <= 25 ? "Normal" : "Surpoids"}</span>
        </div>
    )
}