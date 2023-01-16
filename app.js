let seleccion = parseInt(
  prompt(
    "Seleccione una de las siguientes opciones para elegir un juego de mesa: \n 1- Según edad \n  2- Según categorias de juegos"
  )
);

switch (seleccion) {
  case 1:
    function ageFilter() {
      let edad = parseInt(prompt("ingrese su edad"));

      if (edad <= 10) {
        alert("No contamos con juegos para la edad ingresada");
      } else if (edad > 10 && edad < 30) {
        alert("Encontrarás juegos en la seccion A");
      } else if (edad > 30 && edad < 50) {
        alert("Encontrarás juegos en la seccion B");
      } else if (edad > 50 && edad < 90) {
        alert("Encontrarás juegos en la seccion C");
      } else {
        alert("Opción inválida");
      }
    }
    ageFilter();
    break;
  case 2:
    function categoryFilter() {
      let opcion = parseInt(
        prompt(
          " 1- Juegos didácticos  \n 2- Juegos de ingenio \n 3- Juegos de estrategia \n 4- Juegos cooperativos \n 5- Juegos de roles \n Ingrese una opción"
        )
      );

      switch (opcion) {
        case 1:
          alert("Ingresando a los juegos didácticos");
          break;
        case 2:
          alert("Ingresando a los juegos de ingenio");
          break;
        case 3:
          alert("Ingresando a los juegos de estrategia");
          break;
        case 4:
          alert("Ingresando a los juegos cooperativos");
          break;
        case 5:
          alert("Ingresando a los juegos de roles");
          break;
        default:
          alert("opción inválida");
          break;
      }
    }
    categoryFilter();
    break;
  default:
    alert("opción incorrecta");
    break;
}
