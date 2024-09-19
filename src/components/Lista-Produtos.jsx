export function ListaProdutos({ produtos }) {
  return (
    <div className="lista-produto">
      {produtos.length > 0 ? (
        produtos.map((produto) => (
          <div key={produto.id} className="item-produto">
            <h2>{produto.nome}</h2>
            <p>R$ {produto.preco}</p>
          </div>
        ))
      ) : (
        <p>Nenhum produto cadastrado.</p>
      )}
    </div>
  );
  }