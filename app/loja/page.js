"use client"

import { useState } from "react";

export default function Loja(){

    const [ inputUsuario, alteraInputUsuario ] = useState("");
    const [ inputSenha, alteraInputSenha ] = useState("");

    const [ autenticado, alteraAutenticado ] = useState(false);

    const [ listaAtiva, alteraListaAtiva ] = useState("camisetas");

    function enviarFormulario(e){
        e.preventDefault();
        
        if( inputUsuario == "conrado" && inputSenha == "123123" ){
            alteraAutenticado( true );
        }else{
            alert("Usuário ou senha incorretos...");
        }
 
    }

    return(
        <div>
            
            <h1>Bem-vindo a loja </h1>

            { 
                autenticado == true ?
                <div>

                    <p>Conecte-se para continuar</p>
                    <form onSubmit={ (e)=> enviarFormulario(e) } >
                        <label>
                            Digite seu usuário 
                            <input onChange={ (e)=> alteraInputUsuario(e.target.value) } type="text" />
                        </label>
                        <br/>
                        <label>
                            Digite sua senha
                            <input onChange={ (e)=> alteraInputSenha(e.target.value) }  type="password" />
                        </label>
                        <br/>
                        <button>Entrar</button>
                    </form>

                </div>

                :

                <div>
                    <button onClick={ ()=> alteraAutenticado } >Desconectar</button>
                    <p>Confira os produtos da lojinha</p>

                    <div className="flex">
                    <div>
                        <h2>Menu</h2>
                        <ul>
                            <li onClick={ ()=> alteraListaAtiva("camisetas") } >Camisetas</li>
                            <li onClick={ ()=> alteraListaAtiva("calças") } >Calças</li>
                        </ul>
                    </div>

                    {
                        listaAtiva == "camisetas" ?
                            <div>
                                <h2 >Camisetas</h2>
                                <ul>
                                    <li>Camiseta Gola Polo</li>
                                    <li>Camiseta azul</li>
                                    <li>Camiseta cavada</li>
                                </ul>
                            </div>
                        :
                            <div>
                                <h2>Calças</h2>
                                <ul>
                                    <li>Calça Jeans</li>
                                    <li>Calça moletom</li>
                                </ul>
                            </div>
                    }
                    </div>

                </div>

            }


        </div>
    )
}