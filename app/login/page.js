import Link from "next/link";

const page = () => {
    return (  
        <div>
            <h1>Página de login</h1>
            <Link href={"../"}>Voltar para Home</Link>
        </div>
    );
}
 
export default page;