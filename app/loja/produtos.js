export default function Produtos(){
    return(
        <div>
            <button onClick={ ()=> alteraAutenticado(false) } >Desconectar</button>
            <p>Confira os produtos da lojinha</p>
        </div>
    )
}