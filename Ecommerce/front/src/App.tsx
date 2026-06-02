import React from 'react';
import ListarProdutos from './components/pages/produto/ListarProduto';
import CadastrarProduto from './components/pages/produto/CadastrarProduto';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages/produto/cadastrar">Cadastrar Produto</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ListarProdutos/>} />
          <Route path="/pages/produto/cadastrar" 
            element={<CadastrarProduto/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
