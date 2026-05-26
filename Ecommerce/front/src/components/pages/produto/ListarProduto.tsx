import { useEffect, useState } from "react";

//REGRAS PARA A CRIAÇÃO DE NOVOS COMPONENTES
//1 - O componente deve começar com uma letra maiúscula
//2 - O componente DEVE ser uma função
//3 - O componente deve ser exportado
//4 - O componente DEVE retornar apenas um elemento pai HTML

function ListarProdutos() {

    //Estados - Variáveis 
    const [produtos, setProdutos] = useState([]);

    //O useEffect é executado no carregamento do componente
    useEffect(() => {
        fetch("http://localhost:5273/api/produto/listar")
            .then(resposta => {
                return resposta.json();
            }).then(dados => {
                // console.table(dados);
                setProdutos(dados);
            });
    },[])

    return (
        <div className="ListarProdutos">
            <h1>Listar Produtos</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Criado Em</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto : any) => (
                        <tr>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.quantidade}</td>
                            <td>{produto.preco}</td>
                            <td>{produto.criadoEm}</td>
                        </tr>
                    ))}
                </tbody> 
            </table>
        </div>
    );
}

export default ListarProdutos;