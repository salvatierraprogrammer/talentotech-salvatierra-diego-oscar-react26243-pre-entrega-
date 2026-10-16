import React from 'react'
import styles from "./TarjetaUsuario.module.css"
const TarjetaUsuario = ({ nombre, cargo, email, imagen }) => {
  return (
    <div className="tarjeta-usuario">
      <img src={imagen} alt={nombre} />
      <h4>{nombre}</h4>
      <p className="cargo">{cargo}</p>
      <p>{email}</p>
    </div>
  )
}

export default TarjetaUsuario