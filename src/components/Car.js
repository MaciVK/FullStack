import React, { useState } from "react";

function Car(props) {
  //Cuando recibamos props (maarca y modeo, pero podemos tener muchas más
  //características y tal)
  //Creamos un objeto COCHE con los ue recibimos del parent (props)
  var coche = {
    marca: props.marca,
    modelo: props.modelo,
    aceleracion: parseInt(props.aceleracion),
    velMaxima: parseInt(props.velmaxima),
  };

  //Tendremos un estado para saber si el coche
  //Está arrancado o no (bool)
  //Queremos que el estado pueda cambiar, irá sobre
  //una variable State

  const [estado, setEstado] = useState(false);
  const comprobarEstado = () => {
    if (estado) {
      return <span style={{ color: "green" }}>Arrancado</span>;
    } else {
      return <span style={{ color: "red" }}>Parado</span>;
    }
  };

  //Queremos que el coche enga velocidad
  //inciará en 0 pero incrementará con un botón
  //Si queremos pintar la velocidad, irá al State

  const [velocidad, setVelocidad] = useState(0);
  //Metodo para acelerar el coche:
  const Acelerar = () => {
    if (estado) {
      if (velocidad <= coche.velMaxima) {
        setVelocidad(velocidad + coche.aceleracion);
      } else {
        setVelocidad(260);
        alert("Ya estás acelerando al máximo");
      }
    } else {
      setVelocidad(0);

      alert("Un coche parado no puede acelerar");
    }
  };
  const Decelerar = () => {
    if (estado) {
      if (velocidad != 0) {
        setVelocidad(velocidad - coche.aceleracion);
      } else {
      }
    } else {
      setVelocidad(0);

      alert("Un coche parado no puede Decelerar");
    }
  };

  return (
    <div>
      <h1 style={{ color: "blue" }}>
        {coche.marca} {coche.modelo}
      </h1>
      <h2>El coche está {comprobarEstado()}</h2>
      <h3 style={{ color: "blueviolet" }}>Velocidad Actual: {velocidad}</h3>
      <button
        onClick={() => {
          if (estado) {
            setEstado(false);
          } else {
            setEstado(true);
          }
        }}
      >
        Arrancar/Parar
      </button>
      <button onClick={() => Acelerar()}>Acelerar</button>
      <button onClick={() => Decelerar()}>Decelerar</button>
    </div>
  );
}

export default Car;
