import { useEffect, useState } from "react";

function ListarProdutos(){

    //Estados = Variável
    const [ regiao, setRegiao ] = useState("");
    
    //Serve para executar quaquer código quando o componente
    //for executado (carregamento do componente)
    useEffect(() => {        
        //Utilizar a biblioteca AXIOS para as requisições
        fetch("https://viacep.com.br/ws/01001000/json/")
            .then(resposta => {
                return resposta.json();
            })
            .then(dados => {
                console.log(dados.localidade);
                console.log(dados.regiao);

                setRegiao(dados.regiao);
            });
    },[])
    
    return(
        <div>
            <h1>Consultar CEP</h1>
            { regiao }
        </div>
    )
}

export default ListarProdutos;

//EXERCÍCIO
//Consumir a lista de produtos da API

//1 - Rodar a API
//2 - Vai acontecer um erro de CORS
//3 - Mostrar de alguma forma todos os produtos no HTML