
import styles from "./TarjetaUsuario.module.css";

const TarjetaUsuario = ({ nombre, cargo, email, imagen }) => {
  return (
    <div className={styles.tarjetaUsuario}>
      <img src={imagen} alt={nombre} />
      <h4>{nombre}</h4>
      <p className={styles.cargo}>{cargo}</p>
      <p>{email}</p>
    </div>
  );
};

export default TarjetaUsuario;
