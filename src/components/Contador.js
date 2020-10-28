//Para poder usar funcionaidades de react hay que importarlas
//Necesitamos la funcionalidad del State
import React, { useState } from "react";

function Contador() {
  //Una variable de estado estará compuesta por:
  //Nombre para mostrar y Setpara establecer
  const [numero, setNumero] = useState(0);
  return (
    <div>
      <h1>Ejemplo State Contador</h1>
      <h2 style={{ color: "red" }}>El valor del contador es {numero}</h2>
      <button
        onClick={() => {
          setNumero(numero + 1);
        }}
      >
        Incrementar
      </button>
      <button
        onClick={() => {
          setNumero(numero - 1);
        }}
      >
        Decrementar
      </button>
    </div>
  );
}

export default Contador;
