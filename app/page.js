import Image from "next/image";
import Cabecalho from "./components/cabecalho";
import Conteudo from "./components/conteudo";
import Ls_produtos from "./components/Lista_de_produtos";
import Rodape from "./components/rodape";


export default function Home() {
  return (
    <div>

      <Cabecalho/>

      <hr/>

      <Conteudo/>

      <hr/>

      <Ls_produtos/>

      <hr/>

      <Rodape/>

    </div>
  );
}
