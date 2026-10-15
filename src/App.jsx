import Item from "./components/Item/Item.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import FormularioProductos from "./components/FormularioProductos/FormularioProductos.jsx" 
import Layout from "./components/Layout/Layout"
export default function App() {
  return (
    <>
    <Layout>
    
     
      <ItemListContainer/>
      <Item
        nombre="Notebook Pro"
        precio={12000}
        stock={15}
       /> 
        <FormularioProductos/>
       </Layout>
    </>
  );
}
