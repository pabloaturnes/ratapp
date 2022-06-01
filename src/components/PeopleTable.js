import "./tables.css"
import PeopleRow from "./PeopleRow"

const PeopleTable = ({amigos,deleteFriend}) =>{

    let total = 0
    if(amigos.length !== 0){
        amigos.forEach(element => {
           total = parseInt(element.gastado)  + parseInt(total) 
        });
        
    }

    return (
        <article className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Amigo</th>
                        <th>Gastado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {amigos.length === 0?
                     (<tr><td colSpan="3">No hay amigos cargados</td></tr>) : 
                     ( amigos.map((el,index)=><PeopleRow data={el} key={index} id={index} deleteFriend={deleteFriend}  />)) }
                </tbody>
            </table>
            <h3>Lo gastado en total es: ${total}</h3>
        </article>
    )

}


export default PeopleTable