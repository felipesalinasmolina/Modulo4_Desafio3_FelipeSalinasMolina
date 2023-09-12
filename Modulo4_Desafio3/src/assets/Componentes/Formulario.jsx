import React, { useState } from "react";

const Formulario = ({ data, setData, dataFilter, setDataFilter, addAlert }) => {
  const [datosColaborador, setDatosColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleInputs = (e) => {
    const inputId = {
      inputNombre: "nombre",
      inputEmail: "correo",
      inputEdad: "edad",
      inputCargo: "cargo",
      inputTelefono: "telefono",
    };
    const prop = inputId[e.target.id];
    if (prop) {
      setDatosColaborador({ ...datosColaborador, [prop]: e.target.value });
    }
  };
  const validarDatos = (e) => {
    e.preventDefault();
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexFono = /^[0-9]{9}$/;

    if (
      datosColaborador.nombre.trim() === "" ||
      datosColaborador.correo === "" ||
      datosColaborador.edad === "" ||
      datosColaborador.cargo === "" ||
      datosColaborador.telefono === ""
    ) {
      addAlert("Ingrese todos los datos");
    } else if (!regexEmail.test(datosColaborador.correo)) {
      addAlert("Ingrese un correo valido");
    } else if (!regexFono.test(datosColaborador.telefono)) {
      addAlert("Ingrese un numero de telefono valido");
    }
  };

  return (
    <div className="formulario">
      <h3>Agregar Colaborador</h3>
      <form noValidate onSubmit={validarDatos}>
        <div className="mb-3">
          <input
            onChange={handleInputs}
            value={datosColaborador.nombre}
            type="text"
            className="form-control"
            id="inputNombre"
            placeholder="Nombre del colaborador"
          />
        </div>
        <div className="mb-3">
          <input
            onChange={handleInputs}
            value={datosColaborador.correo}
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email colaborador"
          />
        </div>
        <div className="mb-3">
          <input
            onChange={handleInputs}
            value={datosColaborador.edad}
            type="text"
            className="form-control"
            id="inputEdad"
            placeholder="Edad del colaborador"
          />
        </div>
        <div className="mb-3">
          <input
            onChange={handleInputs}
            value={datosColaborador.cargo}
            type="text"
            className="form-control"
            id="inputCargo"
            placeholder="Cargo del colaborador"
          />
        </div>
        <div className="mb-3">
          <input
            onChange={handleInputs}
            value={datosColaborador.telefono}
            type="text"
            className="form-control"
            id="inputTelefono"
            placeholder="Telefono del colaborador"
          />
        </div>
        <div className="boton">
          <button type="submit" className="btn btn-dark">
            Agregar Colaborador
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
