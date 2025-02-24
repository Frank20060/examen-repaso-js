console.log("Practica")


///Ejercicio2

let body = document.querySelector("body")
let sol = document.querySelector(".sol")

let luna = document.querySelector(".luna")

luna.addEventListener("click", temaoscuro)
function temaoscuro(){
    body.classList.remove("sol")
    body.classList.add("noche")
    

}
sol.addEventListener("click", temaclaro)
function temaclaro(){

    
    body.classList.remove("noche")
    body.classList.add("sol")

}


///Ejercicio 2

const jugadores = [
    {
        url : "img/antony.webp",
        nombre : "Antony"
    },
    {
        url : "img/isco.webp",  // Corregida la extensión del archivo
        nombre : "Isco"
    },    
    {
        url : "img/jesus_rodrigez.avif",  
        nombre : "Jesús Rodríguez" 
    }
];


function añadirjugador(){
    let conttar = "";

    for (let i = 0; i < jugadores.length; i++) {
        console.log(i, jugadores[i].url, jugadores[i].nombre);
        conttar += `
        <div class="tarjeta">
            <img src="${jugadores[i].url}" alt="${jugadores[i].nombre}" class="${jugadores[i].nombre}">
            <h1>${jugadores[i].nombre}</h1>
        </div>
        `;
    }
    
    console.log(conttar);
    
    const contjugadores = document.querySelector(".conttarjetas");
    
    if (contjugadores) {
        contjugadores.innerHTML = conttar;
    } else {
        console.error("No se encontró un elemento con la clase 'conttarjetas'");
    }


}
añadirjugador()



///Ejercicio 3 --> Añadir targetas

const boton = document.querySelector("button")
boton.addEventListener("click", function(añadir){
    
    añadir.preventDefault()


    // Captura el valor del campo de entrada del nombre del superhéroe
    let nnombre = document.querySelector("#name").value;
    // Captura el valor del campo de entrada de la URL de la imagen del superhéroe
    let nurl = document.querySelector("#url").value;
    // Imprime en la consola el nombre y la URL capturados
    console.log("Nombre y url", nnombre, nurl)


    const nuevojugador =
    {
        nombre : nnombre,
        url : nurl
    }
    console.log("Nuevo jugador", nuevojugador);

    jugadores.push(nuevojugador)
    
    añadirjugador()


})
