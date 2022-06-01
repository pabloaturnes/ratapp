
const PeopleRow = ({data,deleteFriend}) =>{

    let {nombre,gastado} = data

    return (    
        <tr>
            <td>{nombre}</td>
            <td>${gastado}</td>
            <td>
                <button onClick={ ()=> deleteFriend(data.nombre)} className="delete-people">Eliminar</button>
            </td>
        </tr>
    )

}


export default PeopleRow