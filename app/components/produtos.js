const Produtos = (props) => {
    return (  
        <div>
            <h3>{props.nameproduct}</h3>

            <p>{props.emoji} Preço: R${props.price} <button>Comprar</button></p>
        </div>
    );
}
 
export default Produtos;