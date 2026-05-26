import React from 'react';
import ListarProdutos from './components/pages/produto/ListarProduto';
import CadastrarProduto from './components/pages/produto/CadastrarProduto';

function App() {
  return (
    <div className="App">
      <h1>Meu segundo projeto em React</h1>
      <ListarProdutos/>
      <CadastrarProduto/>
    </div>
  );
}

export default App;
