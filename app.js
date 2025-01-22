// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Realizamos la creación de una lista para almacenar los nombres
let listaDeAmigos = [];
let numeroRandom;

function agregarAmigo(){
    //Creamos una variable llamada "amigo" en donde almacenamos el valor capturado desde el Front a traves de un getElementById
    let amigo = document.getElementById("amigo").value;

    // Comprobamos que la longitud del nombre no sea menor o igual 1 (Es decir, vacio) 
    if (amigo.length <= 1){
        alert("Ingresa un nombre de amigo Valido!");
        //Caso contrario, es decir, si el nombre es valido. El mismo se agrega a la lista creada anteriormente.
    }else{
        listaDeAmigos.push(amigo);
        actualizarListaAmigos();
        console.log("Nombre agregado a la lista."); //Creamos mensajes en consola para dar un mayor seguimiento.
    }
    //Buscamos por el id la casilla y le asignamos el valor vacio. Es decir, limpiamos el input para que se pueda ingresar un nuevo valor.
    document.getElementById("amigo").value = '';

    console.log(amigo);
    console.log(listaDeAmigos);

    return;
}

function actualizarListaAmigos(){
    let listaDeAmigosHtml = document.getElementById("listaAmigos");
    listaDeAmigosHtml.innerHTML = "";
    for (let i=0; i< listaDeAmigos.length;i++) {
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        listaDeAmigosHtml.appendChild(li);
    }
    return;
}

function sortearAmigo(){
    if (listaDeAmigos.length >= 2){
        numeroRandom = Math.floor(Math.random()*listaDeAmigos.length);
        console.log(numeroRandom);
        let amigoSecreto = listaDeAmigos[numeroRandom];
        document.getElementById("resultado").innerHTML = amigoSecreto;
    }else{
        alert("Por favor, primero ingrese al menos 2 personas a la lista.");
    }
    
    return;
}

