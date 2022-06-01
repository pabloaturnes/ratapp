import {useState} from "react"
import PeopleForm from "./PeopleForm"
import PeopleTable from "./PeopleTable"
import ResultsTable from "./ResultsTable"
import Title from "./Title"

import "./home.css"

const Home = () =>{

    const [amigos, setAmigos] = useState([])

    const addFriend = (friend) =>{
        setAmigos([...amigos,friend])
    }

    const deleteFriend = (nombre) =>{
        let newAmigos = amigos.filter(amigo => amigo.nombre !== nombre)
        setAmigos(newAmigos)
    }

    return (
        <section>
            <Title title="Bienvenido a Ratapp 1.0" />
            <PeopleForm addFriend={addFriend}/>
            <PeopleTable amigos={amigos} deleteFriend={deleteFriend}/>
            <ResultsTable amigos={amigos} />
        </section>
    )

}


export default Home