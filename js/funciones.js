function abrirPanel(panelInicial) {
  //Recupera los elementos con la clase panel y eliminar la clase activa
  const paneles = document.querySelectorAll(".panel");
  paneles.forEach((panel) => panel.classList.remove("activa"));

  //Recupera los elementos con la clase opcion y elimina la clase activo
  const opciones = document.querySelectorAll(".opcion");
  opciones.forEach((opcion) => opcion.classList.remove("activo"));

  //Asigna la clase activa al elemento con el id que se recibe como parametro.
  //Esta accion hace visible el panel que corresponde al boton que fue clicado.
  document.getElementById(panelInicial).classList.add("activa");
}

fetch("../data/bd.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => agregarProyectos(datos.proyectos));

function agregarProyectos(datos) {
  console.log(datos);
  const proyectos = datos;
  const tabla = document.querySelector("#listarProyectos");

  proyectos.forEach((proyecto) => {
    tabla.innerHTML += `
               
                    ${proyecto.nombre}
                    ${proyecto.lenguaje}
                    ${proyecto.monto}
               
               `;
  });
}

function insertar(evt) {
  evt.preventDefault();

  const valores = [
    {
      nombre: document.getElementById("nombre").value,
      lenguaje: document.getElementById("lenguaje").value,
      monto: document.getElementById("monto").value,
    },
  ];

  agregarProyectos(valores);
  limpiarFormulario();
}

function limpiarFormulario() {
  // Limpiar datos del formulario luego de presionar el boton Agregar
  document.getElementById("nombre").value = "";
  document.getElementById("lenguaje").value = "";
  document.getElementById("monto").value = "";
}
