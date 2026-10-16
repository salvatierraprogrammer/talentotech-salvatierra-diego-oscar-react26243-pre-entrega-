import {useState} from "react";



export default function FormularioProductos({
datosForm,
manejarCambio,
manejarEnvio
}) {
   

  


    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '24rem',
        margin: '3rem auto',
        padding: '1.5rem',
        border: '1px solid #ddd',
        borderRadius: '8px',
        gap: '16px'
    };
    return (
        <form style={formStyle} onSubmit={manejarEnvio}>
            <h3>Agregar nuevo producto</h3>
            <div>
                <label>Nombre del Producto:</label>
                <input name="nombre"
                value={datosForm.nombre}

                onChange={manejarCambio} type='number' 
                placeholder="Ej: Viaje"/>
            </div>
            <div>
                <label>Precio:</label>
                <input name="precio" 
                value={datosForm.precio}
                onChange={manejarCambio} type='number' placeholder="Ej: 95"/>
            </div>
            <div>
                <label>imagen:</label>
                <input  type='file' placeholder="https://..."/>
            </div>
            <button type="submit">Guardar producto</button>
        </form>
        
    );
}