import Link from "next/link";

export default function Rodape(){
    return(
        <div>
        
        <p>Acesse a pagina de login <Link href={"/login"}>clicando aqui</Link></p>
    
        </div>
    );
}