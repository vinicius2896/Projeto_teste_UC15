import Produtos from "./produtos";

const Ls_produtos = () => {
    return (  
        <div className="FundoRosa">

            <h2> Produtos disponíveis:</h2>

            <Produtos emoji="👍" nameproduct="Livro de programação" price="250,00"/>

            <Produtos emoji="🎶" nameproduct="Curso de JavaScript" price="20,00"/>

            <Produtos emoji="👀" nameproduct="Mouse gamer enferrujado" price="50,00"/>

        </div>
    );
}
 
export default Ls_produtos;