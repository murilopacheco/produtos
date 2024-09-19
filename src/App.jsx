import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import {ListaProdutos} from "./components/Lista-Produtos"
import { useState } from "react";
import { CadastroProduto } from "./components/CadastroProduto";


import './styles.css';
import { Checkout } from "./components/Checkout";


export function App() {

  const [produtos, setProdutos] = useState  ([
    { id: 1, nome: 'produto1', preco: 10.50 }, 
    { id: 2, nome: 'produto2', preco: 20.99 }, 
    { id: 3, nome: 'produto3', preco: 30.10 },
    { id: 4, nome: 'produto4', preco: 35.15 }
   ]);

    // Função para adicionar um novo produto
  const handleAddProduct = (novoProduto) => {
    const novoId = produtos.length > 0 
      ? produtos[produtos.length - 1].id + 1 
      : 1;
    const produtoComId = { ...novoProduto, id: novoId };
    setProdutos([...produtos, produtoComId]);
  };

  return (
    <div className="app">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          
          {/* Rota de Listagem de Produtos, passando produtos e função de seleção */}
          <Route 
            path="produtos" 
            element={<ListaProdutos produtos={produtos} />} 
          />

          {/* Rota de Checkout, passando os produtos selecionados */}
          <Route 
            path="checkout" 
            element={<Checkout />} 
          />

          {/* Rota para Cadastro de Produto */}
          <Route 
            path="cadastro-produto" 
            element={<CadastroProduto onAddProduct={handleAddProduct} />} 
          />
        </Routes>
      </main>
    </div>
  );
}
