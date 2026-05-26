import { AnyARecord } from "dns";
import { useState } from "react";

function CadastrarProduto(){

    const [nome, setNome] =  useState("");

    function digitar(e : any){
        setNome(e.target.value);
    }

    function enviar(){
        console.log("Produto cadastrado!")
        //Criar o objeto de produto
        //Enviar o objeto em uma requisição com fetch
        //Utilizar a AXIOS para as requisições
    }

    return(
        <div className="CadastrarProduto">
            <h1>Cadastrar Produto</h1>
            <form onSubmit={enviar}>
                <div>
                    <label>Nome:</label>
                    <input required type="text" onChange={digitar}/>
                </div>
                <div>
                    <button type="submit">
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CadastrarProduto;