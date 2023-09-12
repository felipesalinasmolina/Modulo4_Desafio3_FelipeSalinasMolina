import "./App.css";
import { useState } from "react";
import Buscador from "./assets/Componentes/Buscador";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./DatosColaboradores";
import Listado from "./assets/Componentes/Listado";
import Formulario from "./assets/Componentes/Formulario";

function App() {
  const [data, setData] = useState(BaseColaboradores);
  const [dataFilter, setDataFilter] = useState(data);
  //console.log(data);
  const [alert, setAlert] = useState({
    texto: "",
    tipo: "",
    estado: false,
  });

  const addAlert = (newAlert) => {
    setAlert(newAlert);

    setTimeout(() => {
      setAlert({
        texto: "",
        tipo: "",
        estado: false,
      });
    }, 5000);
  };

  return (
    <>
      <h1 className="titulo">
        Lista de Colaboradores
        <i className="fa-solid fa-user-group"></i>
      </h1>
      <section>
        <div className="left">
          <Buscador data={data} dataFilter={dataFilter} />
         
          <Listado
            data={data}
            setData={setData}
            dataFilter={dataFilter}
            setDataFilter={setDataFilter}
          />
        </div>
        <div className="formulario">
          <Formulario />
        </div>
      </section>
    </>
  );
}

export default App;
