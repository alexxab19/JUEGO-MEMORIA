//Variables globales
document.body.style.backgroundImage = 'url("img/FPS.jpg")';
const d = document;
let imagenes = [
    { nombre: "callie", url: "img/sheriff.png" },
    { nombre: "peck", url: "img/peck.webp" },
    { nombre: "ardillas", url: "img/ardillas.png" },
    { nombre: "Ella", url: "img/Ella.png" },
    { nombre: "sparkie", url: "img/sparkie.png" },
    { nombre: "toby", url: "img/toby.png" },
    { nombre: "callie", url: "img/sheriff.png" },
    { nombre: "peck", url: "img/peck.webp" },
    { nombre: "ardillas", url: "img/ardillas.png" },
    { nombre: "Ella", url: "img/Ella.png" },
    { nombre: "sparkie", url: "img/sparkie.png" },
    { nombre: "toby", url: "img/toby.png" }
];
let imagenes2 = [
    { nombre: "naruto", url: "img/naruto.png" },
    { nombre: "gaara", url: "img/gaara.png" },
    { nombre: "itachi", url: "img/itachi.png" },
    { nombre: "jiraiya", url: "img/jiraiya.png" },
    { nombre: "kakashi", url: "img/kakashi.png" },
    { nombre: "shikamaru", url: "img/shikamaru.png" },
    { nombre: "naruto", url: "img/naruto.png" },
    { nombre: "gaara", url: "img/gaara.png" },
    { nombre: "itachi", url: "img/itachi.png" },
    { nombre: "jiraiya", url: "img/jiraiya.png" },
    { nombre: "kakashi", url: "img/kakashi.png" },
    { nombre: "shikamaru", url: "img/shikamaru.png" },
];
let imagenes3 = [
    { nombre: "cinta", url: "img/cinta.png" },
    { nombre: "herramienta", url: "img/herramienta.png" },
    { nombre: "manny", url: "img/manny.png" },
    { nombre: "pat", url: "img/pat.png" },
    { nombre: "pinza", url: "img/pinza.png" },
    { nombre: "serrucho", url: "img/serrucho.png" },
    { nombre: "cinta", url: "img/cinta.png" },
    { nombre: "herramienta", url: "img/herramienta.png" },
    { nombre: "manny", url: "img/manny.png" },
    { nombre: "pat", url: "img/pat.png" },
    { nombre: "pinza", url: "img/pinza.png" },
    { nombre: "serrucho", url: "img/serrucho.png" },
];
let tablero = d.querySelector(".tablero");
let posImg = [];
let nombreImg = [];
let aciertos = 0;
let intentos = 0;
let tiempo = 60;
let nivel = 1;
let mostrarNivel = d.querySelector(".nivel")
let mostrarIntentos = d.querySelector(".intentos");
let mostrarAciertos = d.querySelector(".aciertos");
let mostrarTiempo = d.querySelector(".tiempo");
let botonIniciar = d.querySelector(".btn-iniciar");
let tiempoTranscurrido;
let estoyJugando = false;
let sonidoAdivinar = new Audio("sounds/adivinar.mp3");
let sonidoEscoger = new Audio("sounds/escoger.mp3");
let sonidoFallar = new Audio("sounds/fallar.mp3");
let sonidoPasarnivel = new Audio("sounds/pasarnivel.mp3");
let sonidoGameOver = new Audio("sounds/gameover.mp3");
let sonidoWin = new Audio("sounds/ganar.mp3");
let sonido10sg = new Audio("sounds/10sg.mp3")
let imgNivel;


document.addEventListener("DOMContentLoaded", function () {
    mostrarDatos();
    mostrarVentanaJugador();
})


//Agregar evento al botón para iniciar el juego 
botonIniciar.addEventListener("click", function () {
    //Ejecutar función
    if (estoyJugando == false && nivel == 1) {
        estoyJugando = true;
        mostrarNivel.textContent = nivel;
        agregarImg();
        tiempoDeJuego();
        imgNivel.sort(() => Math.random() - 0.5)
        //sonido de fondo
    } else if (estoyJugando == false && nivel == 2) {
        estoyJugando = true;
        agregarImg();
        tiempoDeJuego();
        imgNivel.sort(() => Math.random() - 0.5)

    } else if (estoyJugando == false && nivel == 3) {
        estoyJugando = true;
        agregarImg();
        tiempoDeJuego();
        imgNivel.sort(() => Math.random() - 0.5)
    }
})


//Función para agregar imágenes al tablero de juego
function agregarImg() {
    if (nivel == 1) {
        document.body.style.backgroundImage = 'url("img/FPS2.jpg")';
        imgNivel = imagenes;
        for (let index = 0; index < imagenes.length; index++) {
            let div = d.createElement("div");
            let img = d.createElement("img");
            div.setAttribute("class", "col-3");
            img.setAttribute("class", "img-fluid alto-img my-2 mt-1");
            img.setAttribute("src", "img/portadaS.png");
            img.setAttribute("id", index);
            img.addEventListener("click", mostrarImg);
            div.appendChild(img);
            tablero.appendChild(div);
        }
    } else if (nivel == 2) {
        document.body.style.backgroundImage = 'url("img/FPN2.png")';
        imgNivel = imagenes2;
        for (let index = 0; index < imagenes2.length; index++) {
            let div = d.createElement("div");
            let img = d.createElement("img");
            div.setAttribute("class", "col-3");
            img.setAttribute("class", "img-fluid alto-img my-2 mt-1");
            img.setAttribute("src", "img/portadaN.png");
            img.setAttribute("id", index);
            img.addEventListener("click", mostrarImg);
            div.appendChild(img);
            tablero.appendChild(div);
        }
    } else if (nivel == 3) {
        document.body.style.backgroundImage = 'url("img/FPM2.jpg")';
        imgNivel = imagenes3;
        for (let index = 0; index < imagenes3.length; index++) {
            let div = d.createElement("div");
            let img = d.createElement("img");
            div.setAttribute("class", "col-3");
            img.setAttribute("class", "img-fluid alto-img my-2 mt-1");
            img.setAttribute("src", "img/portadaM.png");
            img.setAttribute("id", index);
            img.addEventListener("click", mostrarImg);
            div.appendChild(img);
            tablero.appendChild(div);
        }
    }
}

//Mostrar imágenes 
function mostrarImg() {
    let imgID = this.getAttribute("id");
    // Prueba: alert("posición imagen " + imgID);
    this.setAttribute("src", imgNivel[imgID].url);
    posImg.push(imgID);
    nombreImg.push(imgNivel[imgID].nombre);
    sonidoEscoger.play();
    //Comparar las imágenes
    if (nombreImg.length == 2) {
        setTimeout(compararImg, 250);
    }
}

//Comparar imágenes 
function compararImg() {
    if (nivel == 1) {
        let todasImg = d.querySelectorAll(".tablero div img")
        if (nombreImg[0] == nombreImg[1]) {
            if (posImg[0] != posImg[1]) {
                //alert("las imágenes son iguales");
                todasImg[posImg[0]].setAttribute("src", "img/correcto.png");
                todasImg[posImg[1]].setAttribute("src", "img/correcto.png");
                todasImg[posImg[0]].removeEventListener("click", mostrarImg);
                todasImg[posImg[1]].removeEventListener("click", mostrarImg);
                aciertos++;
                mostrarAciertos.textContent = aciertos;
                intentos++;
                mostrarIntentos.textContent = intentos;
                sonidoAdivinar.play();

            } else {
                //alert("Debes seleccionar otra imagen");
                todasImg[posImg[0]].setAttribute("src", "img/portadaS.png");
                sonidoFallar.play;
            }

        } else {
            //alert("las imágenes son diferentes");
            todasImg[posImg[0]].setAttribute("src", "img/portadaS.png");
            todasImg[posImg[1]].setAttribute("src", "img/portadaS.png");
            intentos++;
            mostrarIntentos.textContent = intentos;
            sonidoFallar.play();

        }
    } else if (nivel == 2) {
        let todasImg = d.querySelectorAll(".tablero div img")
        if (nombreImg[0] == nombreImg[1]) {
            if (posImg[0] != posImg[1]) {
                //alert("las imágenes son iguales");
                todasImg[posImg[0]].setAttribute("src", "img/correcto.png");
                todasImg[posImg[1]].setAttribute("src", "img/correcto.png");
                todasImg[posImg[0]].removeEventListener("click", mostrarImg);
                todasImg[posImg[1]].removeEventListener("click", mostrarImg);
                aciertos++;
                mostrarAciertos.textContent = aciertos;
                intentos++;
                mostrarIntentos.textContent = intentos;
                sonidoAdivinar.play();


            } else {
                //alert("Debes seleccionar otra imagen");
                todasImg[posImg[0]].setAttribute("src", "img/portadaN.png");
                sonidoFallar.play;
            }

        } else {
            //alert("las imágenes son diferentes");
            todasImg[posImg[0]].setAttribute("src", "img/portadaN.png");
            todasImg[posImg[1]].setAttribute("src", "img/portadaN.png");
            intentos++;
            mostrarIntentos.textContent = intentos;
            sonidoFallar.play();

        }
    } else if (nivel == 3) {

        let todasImg = d.querySelectorAll(".tablero div img")
        if (nombreImg[0] == nombreImg[1]) {
            if (posImg[0] != posImg[1]) {
                //alert("las imágenes son iguales");
                todasImg[posImg[0]].setAttribute("src", "img/correcto.png");
                todasImg[posImg[1]].setAttribute("src", "img/correcto.png");
                todasImg[posImg[0]].removeEventListener("click", mostrarImg);
                todasImg[posImg[1]].removeEventListener("click", mostrarImg);
                aciertos++;
                mostrarAciertos.textContent = aciertos;
                intentos++;
                mostrarIntentos.textContent = intentos;
                sonidoAdivinar.play();

            } else {
                //alert("Debes seleccionar otra imagen");
                todasImg[posImg[0]].setAttribute("src", "img/portadaM.png");
                sonidoFallar.play;
            }

        } else {
            //alert("las imágenes son diferentes");
            todasImg[posImg[0]].setAttribute("src", "img/portadaM.png");
            todasImg[posImg[1]].setAttribute("src", "img/portadaM.png");
            intentos++;
            mostrarIntentos.textContent = intentos;
            sonidoFallar.play();

        }
    }

    nombreImg = [];
    posImg = [];

    //SI EL JUGADOR gANA
    if (aciertos == 6 && nivel == 1) {
        document.body.style.backgroundImage = 'url("img/FPN.png")';
        // Detener la música de 10 segundos si se está reproduciendo
        sonido10sg.pause();
        sonido10sg.currentTime = 0;
        alert("¡Felicidades!, pasaste al nivel 2 :DD");
        sonidoPasarnivel.play();
        //location.reload();
        nivel = 2;
        mostrarNivel.textContent = nivel;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        tiempo = 40;
        mostrarTiempo.textContent = tiempo;
        clearInterval(tiempoTranscurrido);
        quitarImagenes();
        estoyJugando = false;
    } else if (aciertos == 6 && nivel == 2) {
        // Detener la música de 10 segundos si se está reproduciendo
        sonido10sg.pause();
        sonido10sg.currentTime = 0;
        document.body.style.backgroundImage = 'url("img/FPM.jpg")';
        alert("¡Felicidades!, pasaste al nivel 3 :DD");
        sonidoPasarnivel.play();
        //location.reload();
        nivel = 3;
        mostrarNivel.textContent = nivel;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        tiempo = 25;
        mostrarTiempo.textContent = tiempo;
        clearInterval(tiempoTranscurrido);
        quitarImagenes();
        estoyJugando = false;
    } else if (aciertos == 6 && nivel == 3) {
        tomarDatos();
        // Detener la música de 10 segundos si se está reproduciendo
        sonido10sg.pause();
        sonido10sg.currentTime = 0;
        sonidoWin.play();
        alert("¡YOU WOOON :O!, ¡FELICITACIONES 🧠!");
        setTimeout(() => {
                location.reload();
            }, 4000)

    }
}

function tiempoDeJuego() {
    //SI EL JUGADOR PIERDE
    tiempoTranscurrido = setInterval(() => {
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if (tiempo == 10) {
            sonido10sg.play();
        }
        if (tiempo == 0) {
            clearInterval(tiempoTranscurrido);
            alert("Game Over 😹, se te ha acabado el tiempo 😹");
            sonidoGameOver.play();
            tomarDatos();
            setTimeout(() => {
                location.reload();
            }, 4000)
        } else if (intentos == 30) {
            clearInterval(tiempoTranscurrido);
            tomarDatos();
            alert("Game Over 😹, has alcanzado el máximo de intentos 😹");
            sonidoGameOver.play();
            setTimeout(() => {
                location.reload();
            }, 4000)
        }
        console.log("seg: " + tiempo);
    }, 1000);

}


function quitarImagenes() {
    let todasLasImg = d.querySelectorAll(".tablero div");
    todasLasImg.forEach((img) => {
        img.remove();
    })
}

//Función para mostrar ventana del nombre del jugador
function mostrarVentanaJugador() {
    let mostrarModal = document.querySelector(".modalNombre");
    let cerrarModal = document.querySelectorAll(".cerrar");

    mostrarModal.classList.add("show");
    mostrarModal.style.display = "block";
    for (let index = 0; index < cerrarModal.length; index++) {
        cerrarModal[index].addEventListener("click", function () {
            mostrarModal.classList.remove("show");
            mostrarModal.style.display = "none";
        })
    }
    namePlayer();
}


//Función para tomar el nombre del jugador
function namePlayer() {
    let mostrarJugador = document.querySelector(".jugador");
    let btnRegistrarJ = document.querySelector(".registrarN");
    btnRegistrarJ.addEventListener("click", function () {
        let jugadorN = document.querySelector(".nombreJ");
        mostrarJugador.textContent = jugadorN.value;
    })
}
