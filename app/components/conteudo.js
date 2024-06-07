import Lista from "./lista";

export default function Conteudo(){
    return(
        <div style={{background : "black", color : "white"}}>
            <h2 style={{color : "yellow"}}>Conteúdos da UC 15</h2>
            
            <Lista style= {{color : "red"}} titulo="Para o front-end:" item1="HTML" item2="CSS" item3="React"/>

            <Lista style= {{color : "blue"}} titulo="Para o back-end e APIs:" item1="Next" item2="Axios" item3="JavaScript"/>
        </div>
    );
}