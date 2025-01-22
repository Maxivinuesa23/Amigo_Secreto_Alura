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

    //Colocamos 2 mensajes de consola para que se pueda corroborar que los datos fueron ingresados.
    console.log(amigo);
    console.log(listaDeAmigos);

    return;
}

function actualizarListaAmigos(){
    let listaDeAmigosHtml = document.getElementById("listaAmigos"); //Obtenemos la etiqueta a traves de una ID y la almacenamos en una variable.
    listaDeAmigosHtml.innerHTML = ""; //Limpiamos el valor contenido en la etiqueta.
//Realizamos un ciclo FOR que nos permitira recorrer la Lista creada anteriormente. Dandole como parametro un indice (i) y diciendo que el limite de este sera el tamaño total de la Lista.
// Ademas le decimos que el valor de i se incremente en 1 a traves de (i++).
    for (let i=0; i< listaDeAmigos.length;i++) {  
        let li = document.createElement("li"); //Creamos una variable llamada li y a traves de las funciones document.createElement() le decimos que nos cree una etiqueta.
        li.textContent = listaDeAmigos[i]; //Al contenido de esa etiqueta le asignamos el o los valores almacenados en la lista creada que almacena los nombres. 
        listaDeAmigosHtml.appendChild(li); //Insertamos este elemento al final del mismo a traves de la función appendChild()
    }
    return;
}

function sortearAmigo(){
    //Utilizamos un condicional el cual nos controla que haya por lo menos 2 nombres ingresados en la lista
    if (listaDeAmigos.length >= 2){
        numeroRandom = Math.floor(Math.random()*listaDeAmigos.length); //Generamos un numero random a traves de Math.random y controlamos que no sea mayor a la cantidad de elementos en la lista.
        console.log(numeroRandom); //Mostramos un mensaje en consola para corroborar que la linea anterior funciona.
        let amigoSecreto = listaDeAmigos[numeroRandom]; //Creamos una variable y almacenamos el nombre que se encuentra en la posición del número random.
        document.getElementById("resultado").innerHTML = amigoSecreto; //Obtenemos la etiqueta a traves del ID y cambiamos su valor por el obtenido anteriormente.
    }else{
        alert("Por favor, primero ingrese al menos 2 personas a la lista."); //En caso de que no entre al primer condicional IF, nos manda un mensaje de alerta de que se deben ingresar
                                                                            // Al menos 2 personas a la lista. Caso contrario el programa no dejara que se sortee.
    }
    
    return;
}

