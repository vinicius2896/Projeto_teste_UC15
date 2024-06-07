"use client"
import React from "react";
export default function Cabecalho(){

    const [ cliques, alteraCliques ] = React.useState(10);
    const [ medidor, alteraMedidor ] = React.useState("pou");
    const [ color , alteraCor] = React.useState("white");

    function verificaMedidor(){

        if(cliques > 10){
            alteraMedidor("médio");
            alteraCor("blue");
        }

        if(cliques > 15){
            alteraMedidor("muito");
            alteraCor("red");
        }

        if(cliques < 15){
            alteraMedidor("médio");
            alteraCor("blue");
        }

        if(cliques < 10){
            alteraMedidor("pou");
            alteraCor("white");
        }
    }

    function aumentarClicks(){
        alteraCliques(cliques + 1);

        verificaMedidor();
    }

    function diminuirClicks(){
        if(cliques >= 1){
            alteraCliques(cliques - 1);

            verificaMedidor();
        }
        
    }
    
    return(
        <div style={{background : "#666", color : "white"}}>
            <h1 style={{background: "red", color: "white"}}> Aula 02 de React</h1>

            <p>Nesta aula vamos aprender mais sobre componetes e estados</p>

            <p> <strong> Componentes: </strong> pedaços de HTML que podem ser injetados em qualquer lugar</p>
 
            <p> <strong> Estados: </strong> usado com variaveis para alterar algo na interface</p> 

            <p style={{color: color}}>Número de cliques = {cliques}, Você clicou {medidor}</p>

            <button onClick={ ()=>aumentarClicks()}>Aumentar número</button>

            <button onClick={ ()=>diminuirClicks() }>Abaixar número</button>

            <button onClick={ ()=>alteraCliques(10, alteraMedidor("pou"), alteraCor("white")) }>Resetar número</button>
        </div>
    );
}