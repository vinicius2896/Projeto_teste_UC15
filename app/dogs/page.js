"use client"

import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";

export default function Dogs() {
    const [racas, alteraRacas] = useState([]);
    const [imagens, alteraImagens] = useState([]);
    const [nome, alteraNome] = useState([]);
    

    function buscarRacas() {
        axios.get("https://dog.ceo/api/breeds/list/all")
            .then(function(response) {
                alteraRacas(Object.keys(response.data.message));
            });
    }

    function buscarImagens(racaCachorro) {

        alteraNome (racaCachorro)

        let url = "http://dog.ceo/api/breed/"+racaCachorro+"/images";

        if(racaCachorro == null){
            url = "https://dog.ceo/api/breeds/image/random/20";
        }

        axios.get(url)
            .then(function(response) {
                alteraImagens(response.data.message);
            });
        }

    
 

    useEffect( ()=> {
        buscarRacas();
        buscarImagens();
    }, []);


    return (
        <div id="dog">
            <h1>Página dos dogs</h1>
            <p>Consulte e encontre fotos de cachorros fofos</p>
            <button onClick={() => buscarRacas()}>Carregar raças</button>
            <button onClick={() => buscarImagens('husky')}>Carregar imagens</button>

            <div className="layout-central">
                { /* Menu com a lista das raças para clicar */ }
                <div className="layout-menu" >
                    
                    <li onClick={() => buscarImagens()}>Todas as raças</li>
                    
                    <ul>
                        { 
                            racas.map(r => (
                                <li key={r} onClick={() => bucarImagens(r)}>
                                    {r}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                { /* Painel de fotos dos cachorros */ }
                <div>
                <h2> {nome}</h2>
                    {imagens.map((imagem, index) => (
                        <img key={index} src={imagem} alt="Husky Dog" />
                    ))}
                </div>
            </div>
        </div>
    );
}