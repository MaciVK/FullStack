function sumarDosNumeros(props) {
  const { num1, num2, color, realizarSuma } = props;
  var colorBackground = { color: color };
  //Se crea un metodo para realizar la suma
  const sumarDosNumeros = () => {
    var suma = parseInt(num1) + parseInt(num2);
    console.log("El total es: " + suma);
  };
  return (
    <div>
      <h1 style={colorBackground}>Component Sumar Numeros</h1>
      <button onClick={() => sumarDosNumeros()}>Sumar desde el Child</button>
      <button onClick={() => realizarSuma(num1, num2)}>
        Sumar desde el Parent
      </button>
    </div>
  );
}

export default sumarDosNumeros;
