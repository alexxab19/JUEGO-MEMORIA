//Variables de estadísticas 
let nombreJugador = document.querySelector(".jugador");
let nivelJugador = document.querySelector(".nivel");
let aciertosJugador = document.querySelector(".aciertos");
let intentosJugador = document.querySelector(".intentos");
let tiempoJugador = document.querySelector(".tiempo");

// Función tomar datos
function tomarDatos() {
    //Objeto para recoger los datos o estadísticas del navegador
    let datos = {
        "nombre": nombreJugador.textContent,
        "nivel": nivelJugador.textContent,
        "tiempo": tiempoJugador.textContent,
        "intentos": intentosJugador.textContent,
        "aciertos": aciertosJugador.textContent
    }
    guardarDatos(datos);
}
//Clave o llave para guardar los datos
const DatosJugadores = "Jugadores";

//Función para guardar los datos en el navegador 
function guardarDatos(objeto) {
    //Arreglo para guardar los datos 
    let Jugadores = [];

    //Tomar los datos guardados previamente en el navegador
    let tomarDatosNavegador = localStorage.getItem(DatosJugadores);

    //Comprobar si hay datos guardados previamente en el navegador
    if (tomarDatosNavegador !== null) {
        Jugadores = JSON.parse(tomarDatosNavegador);
    }

    //Agregar los datos del jugador al arreglo
    Jugadores.push(objeto);

    //Mostrar datos del Jugador o Jugadores en consola
    //console.log(Jugadores)

    //Guardar los datos en el navegador
    localStorage.setItem(DatosJugadores, JSON.stringify(Jugadores));
    //console.log(tomarDatosNavegador);
}

//Mostrar datos guardados en el navegador y agregarlos
// a la tabla
function mostrarDatos() {
    //Arreglo para guardar los datos 
    let Jugadores = [];

    //Tomar los datos guardados previamente en el navegador
    let tomarDatosNavegador = localStorage.getItem(DatosJugadores);

    //Comprobar si hay datos guardados previamente en el navegador
    if (tomarDatosNavegador !== null) {
        Jugadores = JSON.parse(tomarDatosNavegador);
    }
   
    Jugadores.sort((a, b) => b.nivel - a.nivel);
    Jugadores.sort((a, b) => b.aciertos - a.aciertos);
    Jugadores.sort((a, b) => b.tiempo - a.tiempo);
    
    // Seleccionar tabla para cargar los datos
    let tabla = document.querySelector(".tabla-estadisticas tbody");
    Jugadores.forEach((element, i) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td> ${i + 1} </td>
            <td> ${element.nombre} </td>
            <td> ${element.nivel} </td>
            <td> ${element.intentos} </td>
            <td> ${element.aciertos} </td>
            <td> ${element.tiempo} seg. </td>
        `;
        tabla.appendChild(tr);
        console.log(tr)
    });
}