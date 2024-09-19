import styles from './Checkout.module.css';



export function Checkout() {
        const itensCarrinho = [
            { id: 1, nome: 'Produto1', preco: 10, quantidade: 2 },
            { id: 2, nome: 'Produto2', preco: 15, quantidade: 1 },
          ];

          const calcularTotal = () => {
            return itensCarrinho.reduce((total, item) => total + item.preco * item.quantidade , 0)
          };

          return(
            <div className={styles.checkoutContainer}>
                <h2>Checkout</h2>
                <ul>
                    {itensCarrinho.map((item) => (
                        <li key={item.id}>
                        <span className="item-name">{item.nome} - Quantidade: {item.quantidade}</span>
                        <span className="item-price">R$ {item.preco}</span>
                      </li>
                    ))}
                </ul>
                <div className="total">
                    Total: R$ {calcularTotal()}
                </div>
            </div>
          );
  }