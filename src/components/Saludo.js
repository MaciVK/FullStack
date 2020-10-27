function Saludo(props) {
  var ejemplo = "Hoy es martes";

  var name = props.nombre;
  var age = props.edad;
  const botonPulsado = () => {
    console.log("Has pulsado el boton");
    ejemplo = "Y mañana miércoles";
  };
  const sumarNumeros = (num1, num2) => {
    var suma = num1 + num2;
    console.log("La suma es: " + suma);
    return suma;
  };

  //Los nombres de las propiedade los estructura no por posicion
  //sino por el nombre de los elementos enviados por el parent

  const mostrarMensaje = () => {
    return <h1>Soy un mensaje HTML</h1>;
  };
  var estiloFeo = { color: "white", backgroundColor: "green" };
  const { nombre, edad, metodo } = props;

  return (
    <div>
      <h1 style={estiloFeo}>{ejemplo}</h1>
      {/* EJECUTANDO DIRECTAMENTE LA FUNCION */}
      {sumarNumeros(7, 7)}
      {botonPulsado()}
      {mostrarMensaje()}
      <h1>
        Saludando a {nombre} con {edad} años
      </h1>
      <button onClick={() => botonPulsado()}>Pulsar Boton</button>
      <button onClick={() => sumarNumeros(5, 4)}>Sumar</button>
      <button onClick={() => metodo(nombre + " " + edad)}>Metodo padre</button>
    </div>
  );
}
export default Saludo;
