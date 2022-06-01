import "./peopleForm.css"
import { useState } from "react"
import ErrorMsj from "./ErrorMsj"

const PeopleForm = ({addFriend}) =>{

    const initialForm = {
        nombre : "",
        gastado : ""
    }

    const [form, setForm] = useState(initialForm)
    const [error, setError] = useState(null)
    
    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!form.nombre || !form.gastado){
            setError("Error, no puede haber campos vacios! ")
            return
        }else{
            setError(null)
        }
        
        if(form.gastado < 0){
            setError("Error, no se permiten numeros negativos ")
            return
        } 


        let friend = {
            "nombre" : form.nombre,
            "gastado" : form.gastado
        }
        addFriend(friend)
        setForm(initialForm)

    }

    const handleChange = (e) =>{
        setForm({...form,[e.target.name]: e.target.value})
    }

    return (
        <article>
        <h2>Ingresa el nombre todos tus amigos</h2>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre..." name="nombre" value={form.nombre} onChange={handleChange}/>
            <input type="number" placeholder="Gastado..." name="gastado" value={form.gastado} onChange={handleChange}/>
            <input type="submit" value ="Registrar"/>
        </form>
            {error && <ErrorMsj msj={error} />}
        </article>
    )

}


export default PeopleForm