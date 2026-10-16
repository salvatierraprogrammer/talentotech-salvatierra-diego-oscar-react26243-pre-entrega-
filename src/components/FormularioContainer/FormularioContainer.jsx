
import React, { useState } from "react";
import FormularioProductos from "../FormularioProductos/FormularioProductos.jsx";

export default function FormularioContainer() {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    precio: "",
    stock: "",
    urlImagen: "",
  });

  const [imagenFile, setImagenFile] = useState(null);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;

    setDatosForm({
      ...datosForm,
      [name]: value,
    });
  };

  const manejarCambioImagen = (evento) => {
    setImagenFile(evento.target.files[0]);
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();

    // Validamos que el usuario haya seleccionado una imagen
    if (!imagenFile) {
      alert("Por favor, selecciona una imagen para el producto.");
      return;
    }

    // --- Lógica para subir la imagen a Imgbb ---
     const apiKey = "d09d70ffc7901c1580d013cc3a97cf92";

    const formData = new FormData();
    formData.append("image", imagenFile);

    try {
      console.log("Subiendo imagen a Imgbb...");

      const respuestaImgbb = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const datosImgbb = await respuestaImgbb.json();

      if (datosImgbb.success) {
        console.log(
          "Imagen subida con éxito. URL:",
          datosImgbb.data.url
        );

        const productoCompleto = {
          ...datosForm,
          urlImagen: datosImgbb.data.url,
        };

        console.log(
          "Enviando los siguientes datos COMPLETOS a la API:",
          productoCompleto
        );
      } else {
        throw new Error("La subida de la imagen a Imgbb falló.");
      }
    } catch (error) {
      console.error("Error en el proceso de envío:", error);
      alert(
        "Hubo un error al subir la imagen. Por favor, intentá de nuevo."
      );
    }
  };

  return (
    <FormularioProductos
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarEnvio={manejarEnvio}
      manejarCambioImagen={manejarCambioImagen}
    />
  );
}

  
