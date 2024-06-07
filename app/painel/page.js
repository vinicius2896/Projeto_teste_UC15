export default function Painel() {
    const usuarios = [
        {
            id: 0,
            nome: "Pedro",
            idade: 5
        }, 
        {
            id: 1,
            nome: "José",
            idade: 6
        },
        {
            id: 2,
            nome: "Danilo",
            idade: 12
        } 
    ];

    const produtos = [
        {
            id: 0,
            nome: "Camiseta",
            preco: 29.90,
            estoque: 59
        },
        {
            id: 1,
            nome: "Calça",
            preco: 109.00,
            estoque: 0
        },
        {
            id: 2,
            nome: "Sapato",
            preco: 150.00,
            estoque: 0
        },
        {
            id: 3,
            nome: "Chinelo",
            preco: 45.00,
            estoque: 155
        },
    ];

    return (
        <div>
            <h1>Painel do administrador</h1>
            <hr/>
            <h2>Lista de usuários:</h2>
            <ul>
                {
                    usuarios.map(u => {
                        return <li key={u.id}>Nome: {u.nome}, idade: {u.idade} anos</li>;
                    })
                }
            </ul>
            <hr/>
            <h2>Lista de produtos:</h2>
            <ul>
                {
                    produtos.map(p => {
                        return (
                            <li key={p.id}>
                                <p>{p.nome}</p>
                                <p>R$ {p.preco}</p>
                                { 
                                    p.estoque > 0 ? 
                                        <p>{p.estoque} disponíveis - <button>Comprar</button></p>
                                    :
                                        <p>Produto fora de estoque</p>
                                } 
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}
