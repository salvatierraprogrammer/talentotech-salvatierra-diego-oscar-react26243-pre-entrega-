import Item  from "../Item/Item";
import styles from "./ItemList.module.css"
export default function  ItemList({ productos }) {
  return (
    <div className={styles.CuadroList}>
      {productos.map((producto) => (
        <Item
          key={producto.id}
          {...producto}
        />
      ))}
    </div>
  );
}