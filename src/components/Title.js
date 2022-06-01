import "./title.css"
import logo from "./logo.jpg"

const Title = ({title}) =>{

    return (
        <article>
            <h1>{title}</h1>
            <img src={logo} />
        </article>
    )

}


export default Title