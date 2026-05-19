//Regras para a criação de um componente

//1 - Deve começar com a primeiro letra maiúsculo (Pascal Casing)
//2 - O componente deve ser uma função
//3 - Exportar o componente
//4 - Retonar sempre apenas um elemento pai HTML

function ComponenteModelo() {
    return (
        <div>
            <h1>Tarefas do dia</h1>
            <ul>
                <li>Ir ao mercado</li>
                <li>Pagar contas</li>
                <li>Limpar a casa</li>
            </ul>
        </div>
    );
}

export default ComponenteModelo;