function sumarDosNumeros(props) {
  const { num1, num2, color, metodo } = props;
  var suma = parseInt(num1) + parseInt(num2);
  var colorBackground = { color: color };
  return (
    <div>
      <h1 style={colorBackground}>La suma total es {suma}</h1>
      <button onClick={metodo}>Sumar</button>
    </div>
  );
}

export default sumarDosNumeros;
