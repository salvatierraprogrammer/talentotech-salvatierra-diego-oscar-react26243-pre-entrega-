import {useState} from "react";



export default function FormularioProductos() {

    const  [datosForm, setDatosForm] = useState({
        id: "",
        nombre: "",
        precio: "",
        stock: ""
    })

    const manejarCambioInput = (evento) => {
        const {name, value} = evento.target;

        setDatosForm(
            {
                ...datosForm, 
                [name]: value
            }
        );
    }


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
        <form style={formStyle}>
            <h3>Agregar nuevo producto</h3>
            <div>
                <label>Nombre del Producto:</label>
                <input name="nombre" onChange={manejarCambioInput} type='number' placeholder="Ej: Teclado mecanico"/>
            </div>
            <div>
                <label>Precio:</label>
                <input name="precio" onChange={manejarCambioInput} type='number' placeholder="Ej: 95"/>
            </div>
            <div>
                <label>imagen:</label>
                <input  type='file' placeholder="https://..."/>
            </div>
            <button type="submit">Guardar producto</button>
        </form>
        
    );
}