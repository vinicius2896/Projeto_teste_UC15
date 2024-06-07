export default function Autenticacao(){
    return(
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
    )
}