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




