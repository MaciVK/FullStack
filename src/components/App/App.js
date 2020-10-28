import logo from "./../../logo.svg";
import "./App.css";
//Hay que crear el componente en el lugar adecuado
//import Saludo from "./../Saludo";
import SumarDosNumeros from "./../Sumar";
function App() {
  //Si queremos enviar parametros a la funcion, se quitan los parentesis
  // y se sustituye por el/los parametro(s)
  // const metodoDelPadre = (descripcion) => {
  //   console.log("Metodo del padre: " + descripcion);
  // };
  // const sumarDosNumerosPadre = (sumaTotal) => {
  //   console.log("Suma total" + sumaTotal);
  // };
  const sumarPadre = (num1, num2) => {
    //num1 y num2 lo recibimos desde el hijo
    var suma = parseInt(num1) + parseInt(num2);
    console.log("Suma padre: " + suma);
  };
  return (
    <div className="App">
      {/* <Saludo nombre="El que suscribe" edad="muchos" metodo={metodoDelPadre} />
      <Saludo nombre="La que lo hizo" edad="menos" metodo={metodoDelPadre} />
      <Saludo nombre="El de siempre" edad="Mil" metodo={metodoDelPadre} /> */}

      <SumarDosNumeros
        num1="20"
        num2="41"
        color="green"
        realizarSuma={sumarPadre}
      />
      <SumarDosNumeros
        num1="70"
        num2="45"
        color="red"
        realizarSuma={sumarPadre}
      />
    </div>
  );
}

export default App;
