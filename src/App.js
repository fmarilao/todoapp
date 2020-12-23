import React, { Component, Suspense, lazy } from "react";
import Layout from "./Layout";
import "./App.css";
const ToDo = lazy(() => import("./ToDo/"));

// Lazy() ayuda a que el contenido no necesario en la carga inicial no se cargue y solamente lo haga para el contenido que los usuarios necesitan ver por pantalla.

//Suspense para la carga de datos es una nueva funcionalidad que te permite también utilizar <Suspense> para “esperar” declarativamente por cualquier otra cosa, incluyendo datos. Esta página se enfoca en el caso de uso de la carga de datos, pero también puede esperar por imágenes, scripts, u otro trabajo asíncrono.

class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <ToDo />
        </Layout>
      </Suspense>
    );
  }
}

export default App;
