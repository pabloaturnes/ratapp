
const ResultsRow = ({nombre,puso,debe,recibe}) =>{


    return (    
        <tr>
        <td>{nombre}</td>
        <td>${puso}</td>
        <td>${debe}</td>
        <td>${recibe}</td>
    </tr>
    )

}


export default ResultsRow