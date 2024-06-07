const Lista = (props) => {
    return (  
        <div style= {props.style} >
            <p>{props.titulo}</p>
            <ul>

                <li>{props.item1}</li>

                <li>{props.item2}</li>

                <li>{props.item3}</li>

            </ul>
        </div>
    );
}
 
export default Lista;