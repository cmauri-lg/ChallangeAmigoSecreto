// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variable de tipo array, que almacenará los nombres de los amigos ingresados
let amigos = [];

// Función para agregar amigos
 function agregarAmigo(){
    // Capturar el valor del campo de entrada
    const nombreInput = document.getElementById("amigo");
    const nombre = nombreInput.value.trim();

        // Validar la entrada
        if (nombre === "") {
            alert("Por favor, inserte un nombre.");
            return;
        }
    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    nombreInput.value = "";

    // Llamar a la función para actualizar la lista visible en la página (opcional)
    actualizarLista();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    // Obtener el elemento de la lista en el DOM
    const listaHTML = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    listaHTML.innerHTML = "";

    // Iterar sobre el array de amigos y agregar cada uno como un elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        const elementoLista = `<li>${amigos[i]}</li>`;
        listaHTML.innerHTML += elementoLista;
    }
}

// Función para sortear un amigo de manera aleatoria
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Por favor, agrega al menos un nombre.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    const resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}



