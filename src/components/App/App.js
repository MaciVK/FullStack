import logo from "./../../logo.svg";
import "./App.css";
//Hay que crear el componente en el lugar adecuado
import Saludo from "./../Saludo";
function App() {
  //Si queremos enviar parametros a la funcion, se quitan los parentesis
  // y se sustituye por el/los parametro(s)
  const metodoDelPadre = (descripcion) => {
    console.log("Metodo del padre: " + descripcion);
  };
  return (
    <div className="App">
      <Saludo nombre="El que suscribe" edad="muchos" metodo={metodoDelPadre} />
      <Saludo nombre="La que lo hizo" edad="menos" metodo={metodoDelPadre} />
      <Saludo nombre="El de siempre" edad="Mil" metodo={metodoDelPadre} />
    </div>
  );
}

export default App;
