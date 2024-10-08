//función para encriptar
document.addEventListener("DOMContentLoaded", function() {
    function encriptar() { 
        let texto = document.getElementById("texto").value;
        let parrafo = document.getElementById("parrafo");
        let muñeco = document.getElementById("muñeco");
        let copiar = document.getElementById("copiar");

        let textoCifrado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        if (texto.length != 0) {
            document.getElementById("texto_mensaje").textContent = textoCifrado;
            parrafo.style.display = "none";
            muñeco.style.display = "none";
            copiar.style.display = "block";
        } else {
            alert("Debes ingresar algún texto");
        }
    }

    function desencriptar() {
        let texto = document.getElementById("texto").value;
        let parrafo = document.getElementById("parrafo");
        let muñeco = document.getElementById("muñeco");
        let copiar = document.getElementById("copiar");

        let textoDescifrado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        if (texto.length != 0) {
            document.getElementById("texto_mensaje").textContent = textoDescifrado;
            parrafo.style.display = "none";
            muñeco.style.display = "none";
            copiar.style.display = "block";
        } else {
            alert("Debes ingresar algún texto");
        }
    }

    document.querySelector(".boton_encriptar").addEventListener("click", encriptar);
    document.querySelector(".boton_desencriptar").addEventListener("click", desencriptar);

    });

//función para validar el texto
function validarTexto() {
    let texto = document.getElementById("texto").value;
    return /^[a-z\s]+$/.test(texto);
}

// Ve cambios en el textarea
document.getElementById("texto").addEventListener("input", function() {
    if (this.value === "") {
        borrarMensaje(); 
    }
});

//función para borrar el texto encriptado
function borrarMensaje() {
    document.getElementById("texto_mensaje").textContent = "Ningún mensaje fue encontrado";
    document.getElementById("parrafo").textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    document.getElementById("muñeco").style.display = "block";
    document.getElementById("copiar").style.display = "none";
}

//función para copiar el texto al portapapeles
function copiarTexto() {
    let textoMensaje = document.getElementById("texto_mensaje").textContent;
    navigator.clipboard.writeText(textoMensaje)
        .then(() => alert("Texto copiado al portapapeles."))
        .catch(() => alert("Error al copiar el texto."));
}
