//función para encriptar

function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje").value;
    let parrafo = document.getElementById("parrafo").value;
    let muñeco = document.getElementById("muñeco").value;

    let textoCifrado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")

    mostrarMensaje(textoCifrado);

    if (texto.lenght !=0){
        texto = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./assets/img/Muñeco.png";

    } else {
        muñeco.src = "./assets/img/Muñeco.png";
        tituloMensaje.textContent= "Ningun mensaje fue encontrado";
        parrafo.textContent ="Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }

}

//función para desencriptar
function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje").value;
    let parrafo = document.getElementById("parrafo").value;
    let muñeco = document.getElementById("muñeco").value;

    let textoDescifrado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")

    mostrarMensaje(textoDescifrado);
}

//función para validar el texto
function validarTexto () {
    return /{^[a-z\s]+$/.test(texto);
}

//función para mostrar el mensaje en la pantalla
function mostrarMensaje(mensaje) {
    document.getElementById("texto_mensaje").textContent = mensaje;
    document.getElementById("parrafo").textContent = "";
}

//función para copiar el texto al portapapeles
function copiarTexto() {
    let textoMensaje = document.getElementById("texto_mensaje").textContent;
    navigator.clipboard.writeText(textoMensaje)
        .then(() => alert("Texto copiado al portapapeles."))
        .catch(() => alert("Error al copiar el texto."));
}
