import React from "react";
import Button from "react-bootstrap/Button";

const Buscador = ({ data, dataFilter }) => {
  const inputHandle = (e) => {
    const buscarPalabra = e.target.toLowerCase();
 
    const resultado = data.filter((colaborador) =>
      colaborador.nombre.toLowerCase().includes(buscarPalabra)||
      colaborador.correo.toLowerCase().includes(buscarPalabra)||
      colaborador.edad.toLowerCase().includes(buscarPalabra)||
      colaborador.cargo.toLowerCase().includes(buscarPalabra)||
      colaborador.telefono.toLowerCase().includes(buscarPalabra)

    );
dataFilter(resultado)

  };

  return (
    <>
      <div className="buscador">
        <input
          type="text"
          name="buscador_colaborador"
          className="form-control"
          placeholder="Ingresar colaborador"
          onChange={inputHandle}
          //   value={}
        />
      </div>
    </>
  );
};

export default Buscador;
