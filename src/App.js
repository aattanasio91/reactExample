import { Fragment, useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Producto from "./component/Producto";

function App() {

  const [productos, guardarProductos] = useState([
    {id:1, articulo: "Mouse", precio: 1200},
    {id:2, articulo: "Teclado", precio: 4400},
    {id:3, articulo: "Procesador Intel", precio: 44500},
    {id:4, articulo: "Monitor", precio: 24000},
    {id:5, articulo: "Gabinete", precio: 12000}
  ]);

  return (
    <Fragment>
      <Header />
      <h1>Diamond System - Venta de hardware</h1>
      {productos.map(producto => 
        (
        <Producto 
          producto = {producto}
        />
        )
        )}
      <Footer />
    </Fragment>
  );
}

export default App;
