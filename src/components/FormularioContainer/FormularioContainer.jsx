import React, { useState } from "react";
import  FormularioProductos  from "../FormularioProductos/FormularioProductos.jsx";

export default function FormularioContainer() {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    precio: "",
    stock: "",
    urlImagen: "",
  });
  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatosForm({
      ...datosForm,
      [name]: value,
    });
  };
  const manejarEnvio = (evento) => {
    evento.preventDefault();
    console.log("Enviando los siguientes datos a la API:", datosForm);
  };
  return (
    <FormularioProductos
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarEnvio={manejarEnvio}
    />
  );
}
