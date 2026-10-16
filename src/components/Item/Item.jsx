
import styles from './Item.module.css'
import { useState } from "react";
export default function  Item({ nombre, precio, stock, imagen }) {
    const [contador, setContador] = useState(0);
    const [cantidad, setCantidad] = useState(0);
   

    const incrementar = () => {
	if (cantidad < stock) {
		setCantidad(cantidad + 1);
    }
    };
    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
    }
    };
    const agregarAlCarrito = () => {
        alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`
    );
    };


  return (
    <div className={styles.cuadro}>
      <img className={styles.imagen} src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p className={styles.text}>Precio: ${precio}</p>
      <p>Stock: {stock}</p>
      <div className={styles.botones}>
      <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
      <button onClick={decrementar}>-</button>
      <p>{cantidad}</p>
     <button onClick={incrementar}>+</button>
     </div>
    </div>
  );
}
