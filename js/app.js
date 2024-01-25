var txt_encriptar = document.getElementById("txt_encriptar");
var txt_desencriptar = document.getElementById("txt_desencriptar");

var div_info_rpta = document.getElementById("rpta_info");
var div_no_rpta = document.getElementById("no_rpta");

var btn_desencriptar = document.getElementById("btn_desencriptar");

var keyArray = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

var accentArray = {
  á: "a",
  é: "e",
  í: "i",
  ó: "o",
  ú: "u",
};

function encriptar() {
  if (!txt_encriptar.value) return alert("Ingrese un texto por favor");

  let mensajeEncriptar = textoTransform(txt_encriptar.value, accentArray);
  let mensajeEncriptado = textoTransform(mensajeEncriptar, keyArray);

  habilitarRpta();

  /*let btn_copiar = document.getElementById('btn_copiar');
  btn_copiar.style.display = 'block';*/

  txt_desencriptar.value = mensajeEncriptado;
}

function copiar() {
  btn_desencriptar.removeAttribute("disabled");

  txt_encriptar.value = txt_desencriptar.value;

  navigator.clipboard.writeText(txt_desencriptar.value);

  alert('El mensaje fue copiado y pegado con éxito!');

  /*let btn_copiar = document.getElementById('btn_copiar');
  btn_copiar.style.display = 'none';*/
}

function desencriptar() {
  if (!txt_encriptar.value) return alert("Ingrese un texto por favor");

  txt_desencriptar.value = textoDesencriptar(txt_encriptar.value);
  txt_encriptar.value = "";

  habilitarRpta();

  /*let btn_desencriptar = document.getElementById('btn_desencriptar');
    btn_desencriptar.setAttribute('disabled', true);*/
}

function textoTransform(texto, arreglo) {
  let mensajeEncriptar = texto.trim().toLocaleLowerCase();
  let mensaje = "";

  for (let i = 0; i < mensajeEncriptar.length; i++) {
    mensaje += arreglo[mensajeEncriptar[i]]
      ? arreglo[mensajeEncriptar[i]]
      : mensajeEncriptar[i];
  }

  return mensaje;
}

function textoDesencriptar(texto) {
  return texto
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufar/g, "u");
}

function habilitarRpta() {
  div_no_rpta.style.display = "none";

  div_info_rpta.style.display = "flex";
}
