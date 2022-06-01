import "./tables.css"
import ResultsRow from "./ResultsRow"

const ResultsTable = ({amigos}) =>{

    let total = 0
    
    amigos.forEach(element => {
        total = parseInt(element.gastado)  + parseInt(total) 
     });

    let promedio = Math.round(total / amigos.length) 
    

    
    amigos.map(amigo =>{
        let deuda = Math.round(promedio - amigo.gastado) 
        amigo.debe = Math.round(deuda < 0? 0 : deuda)
        amigo.recibe = Math.round(deuda < 0? deuda * -1 : 0)
    })  



     

    return (
        <article className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Amigo</th>
                        <th>Puso</th>
                        <th>Debe</th>
                        <th>Recibe</th>
                    </tr>
                </thead>
                <tbody>
                {amigos.length === 0?
                     (<tr><td colSpan="4">No hay amigos cargados</td></tr>) : 
                     ( amigos.map((el,index)=><ResultsRow nombre={el.nombre} puso={el.gastado} debe={el.debe} recibe={el.recibe} key={index} />)) }
                    
                </tbody>
            </table>
            {amigos.length !== 0? <h3>Cada uno tiene que poner ${promedio}</h3> : "" }
        </article>
    )
    

}


export default ResultsTable