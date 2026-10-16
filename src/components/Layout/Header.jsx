// /componentes/layout/Header.jsx
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <h1>Mi pagina</h1>
        <nav >
          <ul className={styles.nav}>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Contacto</li>
            <li>Carrito</li>
            <li>Login</li>
          </ul>
        </nav>
    </header>
  )
}

export default Header
