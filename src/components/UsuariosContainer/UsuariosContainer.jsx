
import TarjetaUsuario from "../TarjetaUsuario/TarjetaUsuario";
import { useEffect, useState } from "react";
import styles from "./UsuariosContainer.module.css";

export default function UsuariosContainer() {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("/data/usuarios.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error(
            "No se pudo cargar la información de los usuarios"
          );
        }

        return respuesta.json();
      })
      .then((datos) => {
        setUsuarios(datos);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p>Cargando usuarios, por favor espere...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.contenedorUsuarios}>
      {usuarios.map((usuario) => (
        <TarjetaUsuario
          key={usuario.email}
          nombre={usuario.nombre}
          cargo={usuario.cargo}
          email={usuario.email}
          imagen={usuario.imagen}
        />
      ))}
    </div>
  );
}
