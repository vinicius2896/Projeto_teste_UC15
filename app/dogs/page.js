"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";

export default function Dogs() {
    const [racas, alteraRacas] = useState([]);
    const [imagens, alteraImagens] = useState([]);
    const [nome, alteraNome] = useState('');

    function buscarRacas() {
        axios.get("https://dog.ceo/api/breeds/list/all")
            .then(function(response) {
                alteraRacas(Object.keys(response.data.message));
            })
            .catch(function(error) {
                console.error("Erro ao buscar raças: ", error);
            });
    }

    function buscarImagens(racaCachorro = null) {
        if (racaCachorro) {
            alteraNome(racaCachorro);
        } else {
            alteraNome('Todas as raças');
        }

        let url = racaCachorro 
            ? `https://dog.ceo/api/breed/${racaCachorro}/images`
            : "https://dog.ceo/api/breeds/image/random/20";

        axios.get(url)
            .then(function(response) {
                alteraImagens(response.data.message);
            })
            .catch(function(error) {
                console.error("Erro ao buscar imagens: ", error);
            });
    }

    useEffect(() => {
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
                <div className="layout-menu">
                    <ul>
                        <li key="todas" onClick={() => buscarImagens()}>Todas as raças</li>
                        { 
                            racas.map((raca, index) => (
                                <li key={raca} onClick={() => buscarImagens(raca)}>
                                    {raca}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                { /* Painel de fotos dos cachorros */ }
                <div>
                    <h2>{nome}</h2>
                    {imagens.map((imagem, index) => (
                        <img key={index} src={imagem} alt={`Dog ${index}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}
