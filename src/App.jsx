import Item from "./components/Item/Item.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import TarjetaUsuario from "./components/TarjetaUsuario/TarjetaUsuario.jsx" 
import FormularioContainer from "./components/FormularioContainer/FormularioContainer.jsx"; 
import Layout from "./components/Layout/Layout"
export default function App() {
  return (
    <>
    <Layout>
    
     
      <ItemListContainer/>
      
        <FormularioContainer/>
        <div className="contenedor">
      <TarjetaUsuario
        nombre="Juan Peralta"
        cargo="Coordinador de Viajes"
        email="juan@gmail.com"
        imagen="https://i.pravatar.cc/150?img=12"
      />

      <TarjetaUsuario
        nombre="María González"
        cargo="Asesora de Turismo"
        email="maria@gmail.com"
        imagen="https://i.pravatar.cc/150?img=47"
      />

      <TarjetaUsuario
        nombre="Pedro Ramírez"
        cargo="Guía Turístico"
        email="pedro@gmail.com"
        imagen="https://i.pravatar.cc/150?img=11"
      />
    </div>
       </Layout>
    </>
  );
}
