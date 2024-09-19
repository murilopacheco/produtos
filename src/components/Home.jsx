import { Link } from "react-router-dom"
import styles from './Home.module.css';

export function Home() {
    return (
      <div className={styles.homeContainer}>
      <h2>Sistema de Compras</h2>
        <div className="link-container">
            <Link to="produtos">
               Produtos
            </Link>
            <Link to="checkout">Checkout</Link>
            <Link to="cadastro-produto">Cadastro de Produto</Link>
            </div> 
      </div>
    )
  }
